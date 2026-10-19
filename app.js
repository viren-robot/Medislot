(function () {
  "use strict";

  var cfg = window.MEDISLOT_CONFIG;
  var STORE_KEY = "medislot.appointments.v1";
  var USER_KEY = "medislot.user.v1";

  // ---------- helpers ----------

  function $(sel) { return document.querySelector(sel); }

  function el(tag, props, children) {
    var node = document.createElement(tag);
    Object.keys(props || {}).forEach(function (k) {
      if (k === "className") node.className = props[k];
      else if (k === "onclick") node.addEventListener("click", props[k]);
      else node.setAttribute(k, props[k]);
    });
    (children || []).forEach(function (c) {
      node.appendChild(typeof c === "string" ? document.createTextNode(c) : c);
    });
    return node;
  }

  function isoDate(d) {
    var z = new Date(d.getTime() - d.getTimezoneOffset() * 60000);
    return z.toISOString().slice(0, 10);
  }

  function nowHHMM() {
    var d = new Date();
    return String(d.getHours()).padStart(2, "0") + ":" + String(d.getMinutes()).padStart(2, "0");
  }

  function formatTime(hhmm) {
    var parts = hhmm.split(":").map(Number);
    var h = parts[0], m = parts[1];
    var suffix = h >= 12 ? "PM" : "AM";
    var h12 = h % 12 || 12;
    return h12 + ":" + String(m).padStart(2, "0") + " " + suffix;
  }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });
  }

  function timeSlots() {
    var out = [];
    var s = cfg.slotStart.split(":").map(Number);
    var e = cfg.slotEnd.split(":").map(Number);
    for (var t = s[0] * 60 + s[1]; t < e[0] * 60 + e[1]; t += cfg.slotMinutes) {
      out.push(String(Math.floor(t / 60)).padStart(2, "0") + ":" + String(t % 60).padStart(2, "0"));
    }
    return out;
  }

  // ---------- storage ----------

  function loadAppointments() {
    try {
      return JSON.parse(localStorage.getItem(STORE_KEY)) || [];
    } catch (err) {
      return [];
    }
  }

  function saveAppointments(list) {
    localStorage.setItem(STORE_KEY, JSON.stringify(list));
  }

  function loadUser() {
    try {
      return JSON.parse(sessionStorage.getItem(USER_KEY));
    } catch (err) {
      return null;
    }
  }

  function saveUser(user) {
    sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  function clearUser() {
    sessionStorage.removeItem(USER_KEY);
  }

  // ---------- Gmail sign-in (Google Identity Services) ----------

  function isConfigured() {
    return !!cfg.googleClientId && cfg.googleClientId.indexOf("YOUR_CLIENT_ID") !== 0;
  }

  function decodeJwtPayload(token) {
    var b64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    var json = decodeURIComponent(
      atob(b64).split("").map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      }).join("")
    );
    return JSON.parse(json);
  }

  function loadGoogleScript() {
    return new Promise(function (resolve, reject) {
      if (window.google && google.accounts) return resolve();
      var s = document.createElement("script");
      s.src = "https://accounts.google.com/gsi/client";
      s.async = true;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  // Calls onChange(user) whenever the signed-in state changes.
  function setupAuth(onChange) {
    var button = $("#g-signin");
    var notice = $("#auth-notice");

    if (!isConfigured()) {
      if (notice) {
        notice.hidden = false;
        notice.textContent = "Gmail sign-in is not configured yet. Set googleClientId in config.js.";
        notice.className = "msg error";
      }
      onChange(loadUser());
      return;
    }

    loadGoogleScript().then(function () {
      google.accounts.id.initialize({
        client_id: cfg.googleClientId,
        callback: function (resp) {
          var p = decodeJwtPayload(resp.credential);
          if (!p.email_verified) {
            if (notice) {
              notice.hidden = false;
              notice.className = "msg error";
              notice.textContent = "That Google account's email is not verified.";
            }
            return;
          }
          var user = { email: p.email, name: p.name || p.email, picture: p.picture || "" };
          saveUser(user);
          if (notice) notice.hidden = true;
          onChange(user);
        }
      });
      google.accounts.id.renderButton(button, { theme: "outline", size: "medium", text: "signin_with" });
      onChange(loadUser());
    }).catch(function () {
      if (notice) {
        notice.hidden = false;
        notice.className = "msg error";
        notice.textContent = "Could not load Google sign-in. Check your connection and try again.";
      }
    });
  }

  function signOut() {
    clearUser();
    if (window.google && google.accounts) google.accounts.id.disableAutoSelect();
    window.location.reload();
  }

  function renderAuthBar(user) {
    var bar = $("#auth-bar");
    if (!bar) return;
    var label = $("#auth-label");
    var signinWrap = $("#g-signin-wrap");
    var out = $("#signout");
    if (user) {
      label.textContent = "Signed in as " + user.email;
      signinWrap.hidden = true;
      out.hidden = false;
    } else {
      label.textContent = "";
      signinWrap.hidden = false;
      out.hidden = true;
    }
  }

  // ---------- booking page ----------

  function initBooking() {
    var form = $("#booking-form");
    var dateEl = $("#date");
    var timeEl = $("#time");
    var msg = $("#booking-msg");
    var user = null;

    var today = new Date();
    dateEl.min = isoDate(today);
    dateEl.value = isoDate(today);

    function refreshTimes(keepSelection) {
      var previous = timeEl.value;
      var taken = {};
      loadAppointments().forEach(function (a) {
        if (a.date === dateEl.value && a.status !== "cancelled") taken[a.time] = true;
      });
      var isToday = dateEl.value === isoDate(new Date());
      var now = nowHHMM();

      timeEl.innerHTML = "";
      timeEl.appendChild(el("option", { value: "" }, ["Select a time"]));
      timeSlots().forEach(function (t) {
        var past = isToday && t <= now;
        var unavailable = !!taken[t] || past;
        var label = formatTime(t) + (taken[t] ? " (booked)" : past ? " (passed)" : "");
        var opt = el("option", { value: t }, [label]);
        if (unavailable) opt.disabled = true;
        timeEl.appendChild(opt);
      });
      if (keepSelection && previous) timeEl.value = previous;
    }

    function showMsg(text, kind) {
      msg.hidden = false;
      msg.className = "msg " + kind;
      msg.textContent = text;
    }

    dateEl.addEventListener("change", function () { refreshTimes(false); });

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        date: dateEl.value,
        time: timeEl.value,
        reason: form.reason.value.trim()
      };

      if (!data.name || !data.email || !data.phone || !data.date || !data.time) {
        return showMsg("Please fill in all required fields and pick a time.", "error");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return showMsg("Please enter a valid email address.", "error");
      }

      var list = loadAppointments();
      var clash = list.some(function (a) {
        return a.date === data.date && a.time === data.time && a.status !== "cancelled";
      });
      if (clash) {
        refreshTimes(false);
        return showMsg("That time was just booked. Please choose another.", "error");
      }

      list.push(Object.assign({
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 8),
        status: "booked",
        createdAt: new Date().toISOString()
      }, data));
      saveAppointments(list);

      form.reset();
      if (user) { form.name.value = user.name; form.email.value = user.email; }
      dateEl.value = isoDate(new Date());
      refreshTimes(false);
      showMsg("Booked! " + formatDate(data.date) + " at " + formatTime(data.time) + ".", "ok");
    });

    setupAuth(function (u) {
      user = u;
      renderAuthBar(u);
      if (u) {
        if (!form.name.value) form.name.value = u.name;
        if (!form.email.value) form.email.value = u.email;
      }
    });

    $("#signout").addEventListener("click", signOut);

    refreshTimes(false);
  }

  // ---------- doctor page ----------

  function isDoctor(user) {
    if (!user) return false;
    var email = user.email.toLowerCase();
    return cfg.doctorEmails.some(function (d) { return d.toLowerCase() === email; });
  }

  function initDoctor() {
    var gate = $("#gate");
    var dash = $("#dashboard");
    var dateFilter = $("#filter-date");
    var showAll = $("#show-all");
    var list = $("#appt-list");
    var user = null;

    dateFilter.value = isoDate(new Date());

    function setStatus(id, status) {
      var all = loadAppointments();
      all.forEach(function (a) { if (a.id === id) a.status = status; });
      saveAppointments(all);
      render();
    }

    function removeAppt(id) {
      if (!window.confirm("Delete this appointment?")) return;
      saveAppointments(loadAppointments().filter(function (a) { return a.id !== id; }));
      render();
    }

    function render() {
      if (!isDoctor(user)) return;
      var all = loadAppointments().slice().sort(function (a, b) {
        return (a.date + a.time).localeCompare(b.date + b.time);
      });
      var today = isoDate(new Date());

      var active = all.filter(function (a) { return a.status === "booked"; });
      $("#stat-today").textContent = active.filter(function (a) { return a.date === today; }).length;
      $("#stat-upcoming").textContent = active.filter(function (a) { return a.date >= today; }).length;
      $("#stat-total").textContent = all.length;

      var shown = showAll.checked
        ? all
        : all.filter(function (a) { return a.date === dateFilter.value; });

      list.innerHTML = "";
      if (!shown.length) {
        list.appendChild(el("p", { className: "empty" }, ["No appointments for this selection."]));
        return;
      }

      shown.forEach(function (a) {
        var pill = el("span", { className: "pill " + a.status }, [a.status]);
        var actions = el("div", { className: "row-actions" });
        if (a.status === "booked") {
          actions.appendChild(el("button", { className: "btn small", onclick: function () { setStatus(a.id, "done"); } }, ["Mark done"]));
          actions.appendChild(el("button", { className: "btn small secondary", onclick: function () { setStatus(a.id, "cancelled"); } }, ["Cancel"]));
        } else {
          actions.appendChild(el("button", { className: "btn small secondary", onclick: function () { setStatus(a.id, "booked"); } }, ["Reopen"]));
        }
        actions.appendChild(el("button", { className: "btn small danger", onclick: function () { removeAppt(a.id); } }, ["Delete"]));

        list.appendChild(el("div", { className: "appt" }, [
          el("div", { className: "time" }, [formatTime(a.time)]),
          el("div", {}, [
            el("div", {}, [el("strong", {}, [a.name]), pill]),
            el("div", { className: "meta" }, [formatDate(a.date) + " · " + a.phone + " · " + a.email]),
            el("div", { className: "reason" }, [a.reason || "No reason given"])
          ]),
          actions
        ]));
      });
    }

    function applyUser(u) {
      user = u;
      renderAuthBar(u);
      if (isDoctor(u)) {
        gate.hidden = true;
        dash.hidden = false;
        render();
      } else {
        dash.hidden = true;
        gate.hidden = false;
        $("#gate-text").textContent = u
          ? u.email + " is not on the doctor list. Sign in with the doctor's Gmail account."
          : "Sign in with your doctor Gmail account to see appointments.";
      }
    }

    dateFilter.addEventListener("change", render);
    showAll.addEventListener("change", render);
    $("#signout").addEventListener("click", signOut);
    window.addEventListener("storage", render);

    setupAuth(applyUser);
  }

  // ---------- boot ----------

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "booking") initBooking();
    if (page === "doctor") initDoctor();
  });
})();
