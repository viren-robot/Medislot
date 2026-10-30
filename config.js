// Medislot configuration. Edit these values before deploying.
window.MEDISLOT_CONFIG = {
  // Supabase project URL and publishable key. The publishable key is safe in
  // the browser: what visitors can read and write is set by row-level security
  // in the database, not by hiding this key.
  supabaseUrl: "https://hpptnujyeczspdfxjopk.supabase.co",
  supabaseKey: "sb_publishable_pknzhhf-ow2nfuY3sALKfA_25GLhGAp",

  clinicName: "Sharada Child Care, Hoskote",
  // Clinic sessions (24-hour clock). Slots start every slotMinutes inside each session.
  sessions: [
    { start: "10:00", end: "14:00" },
    { start: "17:00", end: "19:00" }
  ],
  // Days with no bookings: 0 = Sunday, 6 = Saturday.
  closedDays: [0],
  slotMinutes: 30
};
