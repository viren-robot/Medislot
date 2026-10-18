# Medislot

A static website for booking doctor appointments, with a doctor view and Gmail sign-in.

## Files

- `index.html`: booking page for patients (pick a day and a free time slot).
- `doctor.html`: doctor dashboard. Lists appointments, lets the doctor mark them done, cancel, or delete. Only accessible to Gmail addresses on the doctor list.
- `app.js`: shared logic (booking, storage, Google sign-in, dashboard).
- `styles.css`: styling, with automatic dark mode.
- `config.js`: settings (Google client ID, doctor emails, clinic hours).

## Run it

Serve the folder with any static server, for example:

```sh
python3 -m http.server 8080
```

then open http://localhost:8080. Google sign-in requires the page to be served from `http://localhost` or HTTPS, not opened as a `file://` URL.

## Set up Gmail sign-in

1. In Google Cloud Console, create an OAuth client ID of type **Web application**.
2. Add your site's origin (for example `http://localhost:8080`) under **Authorized JavaScript origins**.
3. Paste the client ID into `googleClientId` in `config.js`.
4. Put the doctor's Gmail address in `doctorEmails` in `config.js`.

## Important limitations

- **This is a demo-level store.** Appointments are saved in the browser's `localStorage`, so they are only visible on the device that booked them. A real clinic needs a backend and a database shared between patients and the doctor.
- **Sign-in is checked only in the browser.** The doctor view trusts the signed-in Gmail address on the client side. Anyone can edit the page to bypass it. Before real use, verify the Google ID token on a server and enforce the doctor check there.
- Patient and doctor data is health information. Check your legal obligations (for example HIPAA or GDPR) before collecting real patient data.
