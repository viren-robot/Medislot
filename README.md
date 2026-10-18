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

## Email reminders

On the doctor page, **Email reminders** sends one reminder per booked appointment in the current view (the chosen day, or all days). Each row also has a **Send reminder** button. Reminders are sent from the doctor's own Gmail account using the Gmail API, so the doctor sees a permission prompt the first time they send one. An appointment that already has a reminder is marked "reminder sent" and is not sent again.

To use this, enable the **Gmail API** in your Google Cloud project. The `gmail.send` scope is a sensitive scope, so Google may ask you to verify the app before other people can use it. While the app is in testing, only the test users you list can authorize it.

Reminders are sent when the doctor clicks the button. There is no automatic schedule, because a static page cannot run in the background. To send reminders automatically (for example, every morning), you need a small server-side job, such as a scheduled Apps Script or cron job that reads the appointments and calls the Gmail API.

## Important limitations

- **This is a demo-level store.** Appointments are saved in the browser's `localStorage`, so they are only visible on the device that booked them. A real clinic needs a backend and a database shared between patients and the doctor.
- **Sign-in is checked only in the browser.** The doctor view trusts the signed-in Gmail address on the client side. Anyone can edit the page to bypass it. Before real use, verify the Google ID token on a server and enforce the doctor check there.
- Patient and doctor data is health information. Check your legal obligations (for example HIPAA or GDPR) before collecting real patient data.
