# Sharada Child Care, Hoskote

A static website for booking appointments at Sharada Child Care, Hoskote, with a doctor login.

Images are in `images/`: the logo (`logo.svg`, also the browser-tab icon), the welcome banner (`hero.svg`), and the doctor-login art (`doctor.svg`). To use real clinic photos, add them to `images/` and change the `src` in `index.html` or `doctor.html`.

## Files

- `index.html`: booking page for patients. Patients pick a day and a free time slot, no sign-in needed.
- `doctor.html`: doctor page. The doctor types their doctor name and then manages appointments.
- `app.js`: booking and dashboard logic, talking to Supabase.
- `styles.css`: styling, with automatic dark mode.
- `config.js`: Supabase URL, publishable key, and clinic hours.

## Backend (Supabase)

- **Tables:** `appointments` (bookings) and `private.doctor_codes` (hashed doctor names, not reachable from the website).
- **Row-level security:** visitors can book and can read only the date and time of active bookings.
- **Doctor functions:** `doctor_login`, `doctor_appointments`, `doctor_set_status`, and `doctor_delete_appointment` check the doctor name on every call before touching data.
- **Double-booking:** a unique index stops two active bookings in the same slot.

The publishable key in `config.js` is meant for browsers. Access rules live in the database.

## Doctor login

Doctors type their doctor name. It isn't case-sensitive. The names are stored hashed in the database and never appear in this repository, so they work like passwords: anyone who knows one can see every booking. Choose names that are hard to guess.

To add or change a name, run this in the Supabase SQL editor (replace the name):

```sql
insert into private.doctor_codes (name, code_hash)
values ('new-name', extensions.crypt('new-name', extensions.gen_salt('bf', 10)));
```

To remove one: `delete from private.doctor_codes where name = 'old-name';`

## Limitations

- **Patients can't see or change their own bookings.** Add that if needed.
- **Email reminders are removed.** Sending them needs a scheduled job, which a static site can't run.
- **Health data.** Patient data is health information. Check your legal obligations (for example HIPAA or GDPR) before using real patient data.
