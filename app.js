(function () {
  "use strict";

  var cfg = window.MEDISLOT_CONFIG;
  var db = window.supabase.createClient(cfg.supabaseUrl, cfg.supabaseKey);

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

  function showMsg(node, text, kind) {
    node.hidden = false;
    node.className = "msg " + kind;
    node.textContent = text;
  }

  // ---------- booking page ----------

  var MAX_AGE = 18;
  var MAX_CHILDREN = 10;

  function initBooking() {
    var form = $("#booking-form");
    var dateEl = $("#date");
    var timeEl = $("#time");
    var visitEl = $("#visit");
    var childrenEl = $("#children");
    var addChildBtn = $("#add-child");
    var msg = $("#booking-msg");
    var submit = form.querySelector("button[type=submit]");

    var today = new Date();
    dateEl.min = isoDate(today);
    dateEl.value = isoDate(today);

    // Each child is a name and an age in years. The first row is always there.
    function addChildRow() {
      var count = childrenEl.querySelectorAll(".child-row").length;
      var row = el("div", { className: "child-row" }, [
        el("input", { className: "child-name", placeholder: "Child's name", "aria-label": "Child's name", autocomplete: "off" }),
        el("input", { className: "child-age", type: "number", min: "0", max: String(MAX_AGE), step: "1", placeholder: "Age (years)", "aria-label": "Child's age in years" }),
        el("button", { className: "btn small danger", type: "button", onclick: function () {
          row.parentNode.removeChild(row);
          addChildBtn.disabled = false;
        } }, ["Remove"])
      ]);
      if (count === 0) row.querySelector(".btn").hidden = true;
      childrenEl.appendChild(row);
      if (childrenEl.querySelectorAll(".child-row").length >= MAX_CHILDREN) addChildBtn.disabled = true;
    }

    function readChildren() {
      return Array.prototype.map.call(childrenEl.querySelectorAll(".child-row"), function (row) {
        return {
          name: row.querySelector(".child-name").value.trim(),
          age: row.querySelector(".child-age").value
        };
      });
    }

    addChildBtn.addEventListener("click", addChildRow);
    addChildRow();

    // Only date and time of active bookings are readable by visitors.
    function takenTimes(day) {
      return db.from("appointments").select("appt_time").eq("appt_date", day).then(function (res) {
        if (res.error) throw res.error;
        return res.data.map(function (r) { return r.appt_time.slice(0, 5); });
      });
    }

    function refreshTimes() {
      var day = dateEl.value;
      var previous = timeEl.value;
      if (!day) return Promise.resolve();
      return takenTimes(day).then(function (taken) {
        var isToday = day === isoDate(new Date());
        var now = nowHHMM();
        timeEl.innerHTML = "";
        timeEl.appendChild(el("option", { value: "" }, ["Select a time"]));
        timeSlots().forEach(function (t) {
          var past = isToday && t <= now;
          var booked = taken.indexOf(t) !== -1;
          var label = formatTime(t) + (booked ? " (booked)" : past ? " (passed)" : "");
          var opt = el("option", { value: t }, [label]);
          if (booked || past) opt.disabled = true;
          timeEl.appendChild(opt);
        });
        if (previous) timeEl.value = previous;
      }).catch(function () {
        showMsg(msg, "Could not load available times. Please refresh the page.", "error");
      });
    }

    dateEl.addEventListener("change", refreshTimes);

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var data = {
        name: form.name.value.trim(),
        email: form.email.value.trim(),
        phone: form.phone.value.trim(),
        date: dateEl.value,
        time: timeEl.value,
        visit: visitEl.value
      };
      var children = readChildren();

      if (!data.name || !data.email || !data.phone || !data.date || !data.time || !data.visit) {
        return showMsg(msg, "Please fill in all required fields and pick a time.", "error");
      }
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        return showMsg(msg, "Please enter a valid email address.", "error");
      }
      if (!children.length) {
        return showMsg(msg, "Please add at least one child.", "error");
      }
      var badChild = children.some(function (c) {
        return !c.name || c.age === "" || Number(c.age) < 0 || Number(c.age) > MAX_AGE || Math.floor(Number(c.age)) !== Number(c.age);
      });
      if (badChild) {
        return showMsg(msg, "Please give every child a name and an age in whole years (0 to " + MAX_AGE + ").", "error");
      }

      submit.disabled = true;
      db.from("appointments").insert({
        patient_name: data.name,
        patient_email: data.email,
        patient_phone: data.phone,
        children: children.map(function (c) { return { name: c.name, age: Number(c.age) }; }),
        reason: data.visit,
        appt_date: data.date,
        appt_time: data.time + ":00",
        status: "booked"
      }).then(function (res) {
        submit.disabled = false;
        if (res.error) {
          // 23505 = unique violation: someone else took this slot first.
          if (res.error.code === "23505") {
            refreshTimes();
            return showMsg(msg, "That time was just booked. Please choose another.", "error");
          }
          return showMsg(msg, "Could not save your booking. Please try again.", "error");
        }
        form.reset();
        childrenEl.innerHTML = "";
        addChildBtn.disabled = false;
        addChildRow();
        dateEl.value = isoDate(new Date());
        refreshTimes();
        showMsg(msg, "Booked! " + formatDate(data.date) + " at " + formatTime(data.time) + ".", "ok");
      });
    });

    refreshTimes();
  }

  // ---------- doctor page ----------

  // Doctors log in with a name. The database checks it on every call, so the
  // names never appear in this file. It is kept for the browser tab's session only.
  var CODE_KEY = "medislot.doctorCode";

  function initDoctor() {
    var loginSection = $("#login");
    var loginForm = $("#login-form");
    var loginCode = $("#login-code");
    var loginMsg = $("#login-msg");
    var dashboard = $("#dashboard");
    var authBar = $("#auth-bar");
    var authLabel = $("#auth-label");
    var dateFilter = $("#filter-date");
    var list = $("#appt-list");
    var dashMsg = $("#dash-msg");

    var appointments = [];
    var code = null;
    dateFilter.value = isoDate(new Date());

    function readCode() {
      try { return sessionStorage.getItem(CODE_KEY); } catch (err) { return null; }
    }

    function storeCode(value) {
      try {
        if (value) sessionStorage.setItem(CODE_KEY, value);
        else sessionStorage.removeItem(CODE_KEY);
      } catch (err) { /* private mode: login lasts until reload */ }
    }

    function showLoggedOut(text) {
      code = null;
      storeCode(null);
      appointments = [];
      list.innerHTML = "";
      loginSection.hidden = false;
      dashboard.hidden = true;
      authBar.hidden = true;
      if (text) showMsg(loginMsg, text, "error");
    }

    function showDashboard(name) {
      loginSection.hidden = true;
      dashboard.hidden = false;
      authBar.hidden = false;
      authLabel.textContent = "Logged in as " + name;
      loadAppointments();
    }

    // 28000 = the database rejected the name (removed or changed since login).
    function handleError(err, fallback) {
      if (err && err.code === "28000") return showLoggedOut("Please log in again.");
      showMsg(dashMsg, fallback, "error");
    }

    function login(value) {
      return db.rpc("doctor_login", { code: value }).then(function (res) {
        if (res.error) return showMsg(loginMsg, "Could not check the name. Please try again.", "error");
        if (!res.data) return showLoggedOut("That doctor name is not recognised.");
        code = value;
        storeCode(value);
        loginMsg.hidden = true;
        showDashboard(res.data);
      });
    }

    function loadAppointments() {
      return db.rpc("doctor_appointments", { code: code }).then(function (res) {
        if (res.error) return handleError(res.error, "Could not load appointments.");
        dashMsg.hidden = true;
        appointments = res.data;
        render();
      });
    }

    function changeAppt(id, action) {
      var call = action.kind === "delete"
        ? db.rpc("doctor_delete_appointment", { code: code, appt_id: id })
        : db.rpc("doctor_set_status", { code: code, appt_id: id, new_status: action.status });

      call.then(function (res) {
        if (res.error) return handleError(res.error, "That change was not saved.");
        loadAppointments();
      });
    }

    function render() {
      var today = isoDate(new Date());
      var active = appointments.filter(function (a) { return a.status === "booked"; });
      $("#stat-today").textContent = active.filter(function (a) { return a.appt_date === today; }).length;
      $("#stat-upcoming").textContent = active.filter(function (a) { return a.appt_date >= today; }).length;
      $("#stat-total").textContent = appointments.length;

      var shown = appointments.filter(function (a) { return a.appt_date === dateFilter.value; });

      list.innerHTML = "";
      if (!shown.length) {
        list.appendChild(el("p", { className: "empty" }, ["No appointments for this selection."]));
        return;
      }

      shown.forEach(function (a) {
        var time = a.appt_time.slice(0, 5);
        var kids = (a.children || []).map(function (c) {
          return c.name + " (" + c.age + (c.age === 1 ? " yr" : " yrs") + ")";
        }).join(", ");
        var actions = el("div", { className: "row-actions" });
        if (a.status === "booked") {
          actions.appendChild(el("button", { className: "btn small", onclick: function () { changeAppt(a.id, { status: "done" }); } }, ["Mark done"]));
          actions.appendChild(el("button", { className: "btn small secondary", onclick: function () { changeAppt(a.id, { status: "cancelled" }); } }, ["Cancel"]));
        } else {
          actions.appendChild(el("button", { className: "btn small secondary", onclick: function () { changeAppt(a.id, { status: "booked" }); } }, ["Reopen"]));
        }
        actions.appendChild(el("button", { className: "btn small danger", onclick: function () {
          if (window.confirm("Delete this appointment?")) changeAppt(a.id, { kind: "delete" });
        } }, ["Delete"]));

        list.appendChild(el("div", { className: "appt" }, [
          el("div", { className: "time" }, [formatTime(time)]),
          el("div", {}, [
            el("div", {}, [el("strong", {}, [a.patient_name]), el("span", { className: "pill " + a.status }, [a.status])]),
            el("div", { className: "meta" }, [formatDate(a.appt_date) + " · " + a.patient_phone + " · " + a.patient_email]),
            el("div", { className: "kids" }, ["Child: " + (kids || "not given")]),
            el("div", { className: "reason" }, [a.reason || "No reason given"])
          ]),
          actions
        ]));
      });
    }

    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var value = loginCode.value.trim();
      if (!value) return showMsg(loginMsg, "Please enter your doctor name.", "error");
      loginCode.value = "";
      login(value);
    });

    $("#signout").addEventListener("click", function () { showLoggedOut(); });
    dateFilter.addEventListener("change", render);

    // Re-read bookings every 10 seconds while a doctor is logged in.
    setInterval(function () {
      if (code && !dashboard.hidden) loadAppointments();
    }, 10000);

    var saved = readCode();
    if (saved) login(saved);
    else showLoggedOut();
  }

  // ---------- boot ----------

  document.addEventListener("DOMContentLoaded", function () {
    var page = document.body.getAttribute("data-page");
    if (page === "booking") initBooking();
    if (page === "doctor") initDoctor();
  });
})();
