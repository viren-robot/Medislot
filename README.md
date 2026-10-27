# Medislot

A static website for booking doctor appointments, with a doctor login.

## Files

- `index.html`: booking page for patients. Patients pick a day and a free time slot, no sign-in needed.
- `doctor.html`: doctor page. The doctor enters their email, gets a sign-in link, and then manages appointments.
- `app.js`: booking and dashboard logic, talking to Supabase.
- `styles.css`: styling, with automatic dark mode.
- `config.js`: Supabase URL, publishable key, and clinic hours.

## Backend (Supabase)

- **Tables:** `appointments` (bookings) and `doctors` (the emails allowed to manage bookings).
- **Row-level security:** visitors can book and can read only the date and time of active bookings. Signed-in doctors listed in `doctors` can read, update, and delete appointments.
- **Double-booking:** a unique index stops two active bookings in the same slot.

The publishable key in `config.js` is meant for browsers. Access rules live in the database.

## Setup

1. In Supabase, go to **Authentication > URL Configuration** and add your site URL (for example `https://viren-robot.github.io/Medislot/doctor.html`) under **Redirect URLs**. Otherwise the sign-in link won't return to the site.
2. Make sure a doctor's email is in the `doctors` table. Only those addresses can sign in and see bookings.
3. Serve the site over `http://localhost` or HTTPS. Supabase sign-in doesn't work from a `file://` URL.

## Sign-in

The doctor page emails a one-time sign-in link. Click it on the same device to open the dashboard. Supabase's default email service sends only a small number of emails per hour, which is enough for a clinic's sign-ins but not for bulk email.

## Limitations

- **Patients can't see or change their own bookings.** Add that if needed.
- **Email reminders are removed.** Sending them needs a scheduled job, which a static site can't run.
- **Health data.** Patient data is health information. Check your legal obligations (for example HIPAA or GDPR) before using real patient data.
