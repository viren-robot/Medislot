// Translations for the booking page: English, Kannada, Telugu and Urdu.
// Elements opt in with data-i18n="key" (text), data-i18n-alt, data-i18n-placeholder
// and data-i18n-aria (attributes). app.js uses I18N.t(key, vars) for text it builds.
(function () {
  "use strict";

  var STRINGS = {
    en: {
      meta_title: "Sharada Child Care, Hoskote | Book an appointment",
      brand: "Sharada Child Care",
      nav_book: "Book",
      nav_doctor: "Doctor login",
      lang_label: "Language",
      hero_title: "Sharada Child Care, Hoskote",
      hero_sub: "Book your child's visit online. Pick a day and a free time slot, and we'll see you then.",
      hero_cta: "Book an appointment",
      hero_alt: "A parent and child walking to a children's clinic",
      intro_h: "Introduction",
      intro_p1: "Welcome to Sharada Child Care, a children's clinic in Hoskote run by paediatrician Dr Veenadevi S, MBBS, MD.",
      intro_p2: "We look after children from newborns to teenagers: vaccinations, check-ups, treatment for common illnesses, and advice for parents on feeding, growth and development.",
      intro_p3: "We aim to make every visit calm and reassuring, for the child and for the parent.",
      sum_h: "Clinical summary",
      sum_sub: "What we offer at the clinic. When you book, choose one of these as the reason for your visit.",
      vacc: "Vaccination",
      vacc_p: "Routine childhood vaccinations on schedule, from birth onwards. Please bring your child's vaccination card to every visit.",
      vacc_alt: "A child on their mother's lap being given a vaccine",
      cons: "Consultation",
      cons_p: "Check-ups and treatment for fever, cough and cold, stomach upsets, rashes and other common childhood illnesses, with advice on feeding and growth.",
      cons_alt: "A doctor listening to a young child's chest with a stethoscope",
      obs: "Observation",
      obs_p: "Short stays under the doctor's care, under 6 hours or longer, when a child needs to be watched closely or treated before going home.",
      obs_alt: "A health worker with mothers and a baby in a clinic ward",
      ear: "Ear piercing",
      ear_p: "Clean, careful ear piercing for children, with advice on aftercare.",
      obs_short: "Observation (less than 6 hrs)",
      obs_long: "Observation (more than 6 hrs)",
      emerg_h: "In an emergency",
      emerg_p: "If your child has trouble breathing, has a fit (seizure), is hard to wake, or is badly injured, go to the nearest hospital emergency department straight away. Do not wait for an appointment.",
      det_doctor: "Doctor",
      det_doctor_v: "Dr Veenadevi S, MBBS, MD Paediatrician",
      det_address: "Address",
      det_directions: "Get directions",
      det_phone: "Phone",
      det_hours: "Hours",
      hours1: "Monday to Saturday: 10:00 AM – 2:00 PM and 5:00 PM – 7:00 PM",
      hours2: "Sunday: closed",
      det_services: "Services",
      book_h: "Book an appointment",
      book_sub: "Only your name is required. Add the other details if you can, so we can reach you and prepare for the visit.",
      f_name: "Parent's full name *",
      f_email: "Email",
      f_phone: "Phone",
      f_date: "Date",
      f_time: "Time",
      f_reason: "Reason for visit",
      f_reason_ph: "Select a reason",
      f_children: "Child details",
      add_child: "+ Add another child",
      child_name: "Child's name",
      child_age: "Age (years)",
      child_age_aria: "Child's age in years",
      remove: "Remove",
      submit: "Book appointment",
      closed_sun: "Closed on Sundays",
      select_time: "Select a time",
      booked: "booked",
      passed: "passed",
      err_times: "Could not load available times. Please refresh the page.",
      err_name: "Please enter the parent's name.",
      err_email: "Please check the email address, or leave it blank.",
      err_phone: "Please check the phone number, or leave it blank.",
      err_age: "Please give ages in whole years (0 to {max}), or leave them blank.",
      err_taken: "That time was just booked. Please choose another.",
      err_save: "Could not save your booking. Please try again.",
      ok: "Booked! {when}.",
      when_full: "{date} at {time}",
      when_date: "{date}. The clinic will confirm a time",
      when_none: "No date chosen yet. The clinic will contact you to arrange one",
      credits: "Illustrative photos"
    },

    kn: {
      meta_title: "ಶಾರದಾ ಚೈಲ್ಡ್ ಕೇರ್, ಹೊಸಕೋಟೆ | ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      brand: "ಶಾರದಾ ಚೈಲ್ಡ್ ಕೇರ್",
      nav_book: "ಬುಕ್ ಮಾಡಿ",
      nav_doctor: "ವೈದ್ಯರ ಲಾಗಿನ್",
      lang_label: "ಭಾಷೆ",
      hero_title: "ಶಾರದಾ ಚೈಲ್ಡ್ ಕೇರ್, ಹೊಸಕೋಟೆ",
      hero_sub: "ನಿಮ್ಮ ಮಗುವಿನ ಭೇಟಿಯನ್ನು ಆನ್‌ಲೈನ್‌ನಲ್ಲಿ ಬುಕ್ ಮಾಡಿ. ಒಂದು ದಿನ ಮತ್ತು ಖಾಲಿ ಇರುವ ಸಮಯವನ್ನು ಆರಿಸಿ, ಆಗ ನಾವು ನಿಮ್ಮನ್ನು ಭೇಟಿಯಾಗುತ್ತೇವೆ.",
      hero_cta: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      hero_alt: "ಪೋಷಕರು ಮತ್ತು ಮಗು ಮಕ್ಕಳ ಕ್ಲಿನಿಕ್‌ಗೆ ನಡೆದು ಹೋಗುತ್ತಿರುವುದು",
      intro_h: "ಪರಿಚಯ",
      intro_p1: "ಶಾರದಾ ಚೈಲ್ಡ್ ಕೇರ್‌ಗೆ ಸ್ವಾಗತ. ಇದು ಹೊಸಕೋಟೆಯಲ್ಲಿರುವ ಮಕ್ಕಳ ಕ್ಲಿನಿಕ್ ಆಗಿದ್ದು, ಮಕ್ಕಳ ತಜ್ಞರಾದ ಡಾ. ವೀಣಾದೇವಿ ಎಸ್, MBBS, MD ಅವರು ನಡೆಸುತ್ತಾರೆ.",
      intro_p2: "ನವಜಾತ ಶಿಶುಗಳಿಂದ ಹದಿಹರೆಯದವರವರೆಗೆ ನಾವು ಮಕ್ಕಳನ್ನು ನೋಡಿಕೊಳ್ಳುತ್ತೇವೆ: ಲಸಿಕೆಗಳು, ತಪಾಸಣೆಗಳು, ಸಾಮಾನ್ಯ ಕಾಯಿಲೆಗಳಿಗೆ ಚಿಕಿತ್ಸೆ, ಮತ್ತು ಆಹಾರ, ಬೆಳವಣಿಗೆ ಹಾಗೂ ವಿಕಾಸದ ಬಗ್ಗೆ ಪೋಷಕರಿಗೆ ಸಲಹೆ.",
      intro_p3: "ಪ್ರತಿ ಭೇಟಿಯೂ ಮಗುವಿಗೂ ಪೋಷಕರಿಗೂ ಶಾಂತವಾಗಿ ಮತ್ತು ಧೈರ್ಯ ತುಂಬುವಂತಿರಬೇಕು ಎಂಬುದು ನಮ್ಮ ಗುರಿ.",
      sum_h: "ಕ್ಲಿನಿಕಲ್ ಸಾರಾಂಶ",
      sum_sub: "ಕ್ಲಿನಿಕ್‌ನಲ್ಲಿ ನಾವು ನೀಡುವ ಸೇವೆಗಳು. ಬುಕ್ ಮಾಡುವಾಗ ಇವುಗಳಲ್ಲಿ ಒಂದನ್ನು ಭೇಟಿಯ ಕಾರಣವಾಗಿ ಆರಿಸಿ.",
      vacc: "ಲಸಿಕೆ",
      vacc_p: "ಹುಟ್ಟಿನಿಂದಲೇ ವೇಳಾಪಟ್ಟಿಯಂತೆ ಮಕ್ಕಳ ನಿಯಮಿತ ಲಸಿಕೆಗಳು. ಪ್ರತಿ ಭೇಟಿಗೂ ನಿಮ್ಮ ಮಗುವಿನ ಲಸಿಕೆ ಕಾರ್ಡ್ ತನ್ನಿ.",
      vacc_alt: "ತಾಯಿಯ ತೊಡೆಯ ಮೇಲೆ ಕುಳಿತ ಮಗುವಿಗೆ ಲಸಿಕೆ ನೀಡಲಾಗುತ್ತಿದೆ",
      cons: "ಸಮಾಲೋಚನೆ",
      cons_p: "ಜ್ವರ, ಕೆಮ್ಮು ಮತ್ತು ನೆಗಡಿ, ಹೊಟ್ಟೆಯ ತೊಂದರೆಗಳು, ಚರ್ಮದ ದದ್ದುಗಳು ಮತ್ತು ಮಕ್ಕಳ ಇತರ ಸಾಮಾನ್ಯ ಕಾಯಿಲೆಗಳಿಗೆ ತಪಾಸಣೆ ಮತ್ತು ಚಿಕಿತ್ಸೆ, ಜೊತೆಗೆ ಆಹಾರ ಮತ್ತು ಬೆಳವಣಿಗೆಯ ಬಗ್ಗೆ ಸಲಹೆ.",
      cons_alt: "ವೈದ್ಯರು ಸ್ಟೆತೊಸ್ಕೋಪ್‌ನಿಂದ ಚಿಕ್ಕ ಮಗುವಿನ ಎದೆಯನ್ನು ಪರೀಕ್ಷಿಸುತ್ತಿರುವುದು",
      obs: "ನಿಗಾ (ಅಬ್ಸರ್ವೇಶನ್)",
      obs_p: "ಮಗುವನ್ನು ಹತ್ತಿರದಿಂದ ಗಮನಿಸಬೇಕಾದಾಗ ಅಥವಾ ಮನೆಗೆ ಹೋಗುವ ಮೊದಲು ಚಿಕಿತ್ಸೆ ನೀಡಬೇಕಾದಾಗ, ವೈದ್ಯರ ನಿಗಾದಲ್ಲಿ 6 ಗಂಟೆಗಿಂತ ಕಡಿಮೆ ಅಥವಾ ಹೆಚ್ಚು ಸಮಯದ ವಾಸ್ತವ್ಯ.",
      obs_alt: "ಕ್ಲಿನಿಕ್‌ನ ವಾರ್ಡ್‌ನಲ್ಲಿ ತಾಯಂದಿರು ಮತ್ತು ಮಗುವಿನೊಂದಿಗೆ ಆರೋಗ್ಯ ಕಾರ್ಯಕರ್ತೆ",
      ear: "ಕಿವಿ ಚುಚ್ಚುವುದು",
      ear_p: "ಮಕ್ಕಳಿಗೆ ಸ್ವಚ್ಛ ಮತ್ತು ಎಚ್ಚರಿಕೆಯ ಕಿವಿ ಚುಚ್ಚುವಿಕೆ, ನಂತರದ ಆರೈಕೆಯ ಸಲಹೆಯೊಂದಿಗೆ.",
      obs_short: "ನಿಗಾ (6 ಗಂಟೆಗಿಂತ ಕಡಿಮೆ)",
      obs_long: "ನಿಗಾ (6 ಗಂಟೆಗಿಂತ ಹೆಚ್ಚು)",
      emerg_h: "ತುರ್ತು ಸಂದರ್ಭದಲ್ಲಿ",
      emerg_p: "ನಿಮ್ಮ ಮಗುವಿಗೆ ಉಸಿರಾಡಲು ಕಷ್ಟವಾಗುತ್ತಿದ್ದರೆ, ಫಿಟ್ಸ್ (ಸೆಳವು) ಬಂದರೆ, ಎಬ್ಬಿಸಲು ಕಷ್ಟವಾದರೆ ಅಥವಾ ತೀವ್ರವಾಗಿ ಗಾಯಗೊಂಡಿದ್ದರೆ, ತಕ್ಷಣ ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಯ ತುರ್ತು ವಿಭಾಗಕ್ಕೆ ಹೋಗಿ. ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಾಗಿ ಕಾಯಬೇಡಿ.",
      det_doctor: "ವೈದ್ಯರು",
      det_doctor_v: "ಡಾ. ವೀಣಾದೇವಿ ಎಸ್, MBBS, MD ಮಕ್ಕಳ ತಜ್ಞರು",
      det_address: "ವಿಳಾಸ",
      det_directions: "ದಾರಿ ತಿಳಿಯಿರಿ",
      det_phone: "ಫೋನ್",
      det_hours: "ಸಮಯ",
      hours1: "ಸೋಮವಾರದಿಂದ ಶನಿವಾರ: ಬೆಳಿಗ್ಗೆ 10:00 – ಮಧ್ಯಾಹ್ನ 2:00 ಮತ್ತು ಸಂಜೆ 5:00 – 7:00",
      hours2: "ಭಾನುವಾರ: ರಜೆ",
      det_services: "ಸೇವೆಗಳು",
      book_h: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      book_sub: "ನಿಮ್ಮ ಹೆಸರು ಮಾತ್ರ ಕಡ್ಡಾಯ. ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸಲು ಮತ್ತು ಭೇಟಿಗೆ ಸಿದ್ಧರಾಗಲು ಸಾಧ್ಯವಾದರೆ ಉಳಿದ ವಿವರಗಳನ್ನೂ ಸೇರಿಸಿ.",
      f_name: "ಪೋಷಕರ ಪೂರ್ಣ ಹೆಸರು *",
      f_email: "ಇಮೇಲ್",
      f_phone: "ಫೋನ್",
      f_date: "ದಿನಾಂಕ",
      f_time: "ಸಮಯ",
      f_reason: "ಭೇಟಿಯ ಕಾರಣ",
      f_reason_ph: "ಕಾರಣವನ್ನು ಆರಿಸಿ",
      f_children: "ಮಗುವಿನ ವಿವರಗಳು",
      add_child: "+ ಇನ್ನೊಂದು ಮಗುವನ್ನು ಸೇರಿಸಿ",
      child_name: "ಮಗುವಿನ ಹೆಸರು",
      child_age: "ವಯಸ್ಸು (ವರ್ಷಗಳು)",
      child_age_aria: "ಮಗುವಿನ ವಯಸ್ಸು ವರ್ಷಗಳಲ್ಲಿ",
      remove: "ತೆಗೆದುಹಾಕಿ",
      submit: "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ",
      closed_sun: "ಭಾನುವಾರ ರಜೆ",
      select_time: "ಸಮಯವನ್ನು ಆರಿಸಿ",
      booked: "ಬುಕ್ ಆಗಿದೆ",
      passed: "ಮುಗಿದಿದೆ",
      err_times: "ಲಭ್ಯವಿರುವ ಸಮಯಗಳನ್ನು ಲೋಡ್ ಮಾಡಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುಟವನ್ನು ರಿಫ್ರೆಶ್ ಮಾಡಿ.",
      err_name: "ದಯವಿಟ್ಟು ಪೋಷಕರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ.",
      err_email: "ದಯವಿಟ್ಟು ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪರಿಶೀಲಿಸಿ, ಅಥವಾ ಖಾಲಿ ಬಿಡಿ.",
      err_phone: "ದಯವಿಟ್ಟು ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ಪರಿಶೀಲಿಸಿ, ಅಥವಾ ಖಾಲಿ ಬಿಡಿ.",
      err_age: "ದಯವಿಟ್ಟು ವಯಸ್ಸನ್ನು ಪೂರ್ಣ ವರ್ಷಗಳಲ್ಲಿ (0 ರಿಂದ {max}) ನೀಡಿ, ಅಥವಾ ಖಾಲಿ ಬಿಡಿ.",
      err_taken: "ಆ ಸಮಯ ಈಗಷ್ಟೇ ಬುಕ್ ಆಗಿದೆ. ದಯವಿಟ್ಟು ಬೇರೆ ಸಮಯವನ್ನು ಆರಿಸಿ.",
      err_save: "ನಿಮ್ಮ ಬುಕಿಂಗ್ ಉಳಿಸಲಾಗಲಿಲ್ಲ. ದಯವಿಟ್ಟು ಮತ್ತೆ ಪ್ರಯತ್ನಿಸಿ.",
      ok: "ಬುಕ್ ಆಗಿದೆ! {when}.",
      when_full: "{date}, {time}",
      when_date: "{date}. ಕ್ಲಿನಿಕ್ ಸಮಯವನ್ನು ಖಚಿತಪಡಿಸುತ್ತದೆ",
      when_none: "ಇನ್ನೂ ದಿನಾಂಕ ಆರಿಸಿಲ್ಲ. ಸಮಯ ನಿಗದಿಪಡಿಸಲು ಕ್ಲಿನಿಕ್ ನಿಮ್ಮನ್ನು ಸಂಪರ್ಕಿಸುತ್ತದೆ",
      credits: "ಮಾದರಿ ಫೋಟೋಗಳು"
    },

    te: {
      meta_title: "శారదా చైల్డ్ కేర్, హోసకోటే | అపాయింట్‌మెంట్ బుక్ చేయండి",
      brand: "శారదా చైల్డ్ కేర్",
      nav_book: "బుక్ చేయండి",
      nav_doctor: "డాక్టర్ లాగిన్",
      lang_label: "భాష",
      hero_title: "శారదా చైల్డ్ కేర్, హోసకోటే",
      hero_sub: "మీ పిల్లల సందర్శనను ఆన్‌లైన్‌లో బుక్ చేయండి. ఒక రోజు మరియు ఖాళీగా ఉన్న సమయాన్ని ఎంచుకోండి, అప్పుడు మేము మిమ్మల్ని కలుస్తాము.",
      hero_cta: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      hero_alt: "పిల్లల క్లినిక్‌కు నడిచి వెళ్తున్న తల్లిదండ్రులు మరియు పిల్లవాడు",
      intro_h: "పరిచయం",
      intro_p1: "శారదా చైల్డ్ కేర్‌కు స్వాగతం. ఇది హోసకోటేలోని పిల్లల క్లినిక్, దీనిని పిల్లల వైద్య నిపుణురాలు డా. వీణాదేవి ఎస్, MBBS, MD నిర్వహిస్తున్నారు.",
      intro_p2: "నవజాత శిశువుల నుండి టీనేజ్ పిల్లల వరకు మేము సంరక్షణ అందిస్తాము: టీకాలు, పరీక్షలు, సాధారణ వ్యాధులకు చికిత్స, మరియు ఆహారం, ఎదుగుదల, అభివృద్ధి గురించి తల్లిదండ్రులకు సలహాలు.",
      intro_p3: "ప్రతి సందర్శన పిల్లలకూ తల్లిదండ్రులకూ ప్రశాంతంగా, ధైర్యంగా ఉండేలా చూడటమే మా లక్ష్యం.",
      sum_h: "క్లినికల్ సారాంశం",
      sum_sub: "క్లినిక్‌లో మేము అందించే సేవలు. బుక్ చేసేటప్పుడు వీటిలో ఒకదాన్ని మీ సందర్శన కారణంగా ఎంచుకోండి.",
      vacc: "టీకా",
      vacc_p: "పుట్టినప్పటి నుండి షెడ్యూల్ ప్రకారం పిల్లలకు సాధారణ టీకాలు. ప్రతి సందర్శనకు మీ పిల్లల టీకా కార్డును తీసుకురండి.",
      vacc_alt: "తల్లి ఒడిలో కూర్చున్న పిల్లవాడికి టీకా వేస్తున్నారు",
      cons: "సంప్రదింపు",
      cons_p: "జ్వరం, దగ్గు మరియు జలుబు, కడుపు సమస్యలు, చర్మంపై దద్దుర్లు మరియు ఇతర సాధారణ బాల్య వ్యాధులకు పరీక్ష మరియు చికిత్స, అలాగే ఆహారం మరియు ఎదుగుదలపై సలహా.",
      cons_alt: "స్టెతస్కోప్‌తో చిన్న పిల్లవాడి ఛాతీని పరీక్షిస్తున్న డాక్టర్",
      obs: "పరిశీలన (అబ్జర్వేషన్)",
      obs_p: "పిల్లవాడిని దగ్గరగా గమనించాల్సినప్పుడు లేదా ఇంటికి వెళ్లే ముందు చికిత్స అవసరమైనప్పుడు, డాక్టర్ పర్యవేక్షణలో 6 గంటల కంటే తక్కువ లేదా ఎక్కువ సమయం ఉండటం.",
      obs_alt: "క్లినిక్ వార్డులో తల్లులు మరియు శిశువుతో ఆరోగ్య కార్యకర్త",
      ear: "చెవులు కుట్టడం",
      ear_p: "పిల్లలకు శుభ్రంగా, జాగ్రత్తగా చెవులు కుట్టడం, తర్వాతి సంరక్షణపై సలహాతో.",
      obs_short: "పరిశీలన (6 గంటల కంటే తక్కువ)",
      obs_long: "పరిశీలన (6 గంటల కంటే ఎక్కువ)",
      emerg_h: "అత్యవసర పరిస్థితిలో",
      emerg_p: "మీ పిల్లవాడికి శ్వాస తీసుకోవడం కష్టంగా ఉంటే, ఫిట్స్ (మూర్ఛ) వస్తే, లేపడం కష్టంగా ఉంటే లేదా తీవ్రంగా గాయపడితే, వెంటనే దగ్గరలోని ఆసుపత్రి అత్యవసర విభాగానికి వెళ్లండి. అపాయింట్‌మెంట్ కోసం ఎదురుచూడకండి.",
      det_doctor: "డాక్టర్",
      det_doctor_v: "డా. వీణాదేవి ఎస్, MBBS, MD పిల్లల వైద్య నిపుణురాలు",
      det_address: "చిరునామా",
      det_directions: "దారి చూడండి",
      det_phone: "ఫోన్",
      det_hours: "సమయాలు",
      hours1: "సోమవారం నుండి శనివారం: ఉదయం 10:00 – మధ్యాహ్నం 2:00 మరియు సాయంత్రం 5:00 – 7:00",
      hours2: "ఆదివారం: సెలవు",
      det_services: "సేవలు",
      book_h: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      book_sub: "మీ పేరు మాత్రమే తప్పనిసరి. మిమ్మల్ని సంప్రదించడానికి మరియు సందర్శనకు సిద్ధం కావడానికి వీలైతే ఇతర వివరాలు కూడా ఇవ్వండి.",
      f_name: "తల్లిదండ్రుల పూర్తి పేరు *",
      f_email: "ఇమెయిల్",
      f_phone: "ఫోన్",
      f_date: "తేదీ",
      f_time: "సమయం",
      f_reason: "సందర్శన కారణం",
      f_reason_ph: "కారణాన్ని ఎంచుకోండి",
      f_children: "పిల్లల వివరాలు",
      add_child: "+ మరో పిల్లవాడిని జోడించండి",
      child_name: "పిల్లల పేరు",
      child_age: "వయస్సు (సంవత్సరాలు)",
      child_age_aria: "పిల్లల వయస్సు సంవత్సరాలలో",
      remove: "తీసివేయండి",
      submit: "అపాయింట్‌మెంట్ బుక్ చేయండి",
      closed_sun: "ఆదివారం సెలవు",
      select_time: "సమయాన్ని ఎంచుకోండి",
      booked: "బుక్ అయింది",
      passed: "గడిచిపోయింది",
      err_times: "అందుబాటులో ఉన్న సమయాలను లోడ్ చేయలేకపోయాము. దయచేసి పేజీని రిఫ్రెష్ చేయండి.",
      err_name: "దయచేసి తల్లిదండ్రుల పేరు నమోదు చేయండి.",
      err_email: "దయచేసి ఇమెయిల్ చిరునామాను తనిఖీ చేయండి, లేదా ఖాళీగా వదిలేయండి.",
      err_phone: "దయచేసి ఫోన్ నంబర్‌ను తనిఖీ చేయండి, లేదా ఖాళీగా వదిలేయండి.",
      err_age: "దయచేసి వయస్సును పూర్తి సంవత్సరాలలో (0 నుండి {max}) ఇవ్వండి, లేదా ఖాళీగా వదిలేయండి.",
      err_taken: "ఆ సమయం ఇప్పుడే బుక్ అయింది. దయచేసి మరో సమయాన్ని ఎంచుకోండి.",
      err_save: "మీ బుకింగ్‌ను సేవ్ చేయలేకపోయాము. దయచేసి మళ్లీ ప్రయత్నించండి.",
      ok: "బుక్ అయింది! {when}.",
      when_full: "{date}, {time}",
      when_date: "{date}. క్లినిక్ సమయాన్ని నిర్ధారిస్తుంది",
      when_none: "ఇంకా తేదీ ఎంచుకోలేదు. సమయం నిర్ణయించడానికి క్లినిక్ మిమ్మల్ని సంప్రదిస్తుంది",
      credits: "నమూనా ఫోటోలు"
    },

    ur: {
      meta_title: "شاردا چائلڈ کیئر، ہوسکوٹے | اپائنٹمنٹ بک کریں",
      brand: "شاردا چائلڈ کیئر",
      nav_book: "بک کریں",
      nav_doctor: "ڈاکٹر لاگ اِن",
      lang_label: "زبان",
      hero_title: "شاردا چائلڈ کیئر، ہوسکوٹے",
      hero_sub: "اپنے بچے کی ملاقات آن لائن بک کریں۔ کوئی دن اور خالی وقت چنیں، اور ہم آپ سے تب ملیں گے۔",
      hero_cta: "اپائنٹمنٹ بک کریں",
      hero_alt: "والدین اور بچہ بچوں کے کلینک کی طرف جا رہے ہیں",
      intro_h: "تعارف",
      intro_p1: "شاردا چائلڈ کیئر میں خوش آمدید۔ یہ ہوسکوٹے میں بچوں کا کلینک ہے جسے ماہرِ اطفال ڈاکٹر وینا دیوی ایس، MBBS، MD چلاتی ہیں۔",
      intro_p2: "ہم نوزائیدہ بچوں سے لے کر نوعمروں تک کی دیکھ بھال کرتے ہیں: ٹیکے، معائنے، عام بیماریوں کا علاج، اور والدین کے لیے خوراک، نشوونما اور بڑھوتری کے بارے میں مشورہ۔",
      intro_p3: "ہماری کوشش ہے کہ ہر ملاقات بچے اور والدین دونوں کے لیے پُرسکون اور اطمینان بخش ہو۔",
      sum_h: "طبی خلاصہ",
      sum_sub: "کلینک میں ہماری خدمات۔ بک کرتے وقت ان میں سے ایک کو اپنی ملاقات کی وجہ کے طور پر چنیں۔",
      vacc: "ٹیکہ کاری",
      vacc_p: "پیدائش سے ہی شیڈول کے مطابق بچوں کے معمول کے ٹیکے۔ ہر ملاقات پر اپنے بچے کا ٹیکہ کارڈ ساتھ لائیں۔",
      vacc_alt: "ماں کی گود میں بیٹھے بچے کو ٹیکہ لگایا جا رہا ہے",
      cons: "مشاورت",
      cons_p: "بخار، کھانسی اور زکام، پیٹ کی خرابی، دانے اور بچپن کی دیگر عام بیماریوں کا معائنہ اور علاج، ساتھ ہی خوراک اور نشوونما کے بارے میں مشورہ۔",
      cons_alt: "ڈاکٹر اسٹیتھوسکوپ سے ایک چھوٹے بچے کا سینہ چیک کر رہی ہیں",
      obs: "نگرانی (آبزرویشن)",
      obs_p: "جب بچے پر قریب سے نظر رکھنی ہو یا گھر جانے سے پہلے علاج کی ضرورت ہو، تو ڈاکٹر کی نگرانی میں 6 گھنٹے سے کم یا زیادہ قیام۔",
      obs_alt: "کلینک کے وارڈ میں ماؤں اور ایک بچے کے ساتھ ہیلتھ ورکر",
      ear: "کان چھیدنا",
      ear_p: "بچوں کے لیے صاف ستھرا اور احتیاط سے کان چھیدنا، بعد کی دیکھ بھال کے مشورے کے ساتھ۔",
      obs_short: "نگرانی (6 گھنٹے سے کم)",
      obs_long: "نگرانی (6 گھنٹے سے زیادہ)",
      emerg_h: "ہنگامی صورت میں",
      emerg_p: "اگر آپ کے بچے کو سانس لینے میں دشواری ہو، دورہ (فٹ) پڑے، جگانا مشکل ہو، یا شدید چوٹ لگی ہو، تو فوراً قریبی اسپتال کے ایمرجنسی شعبے میں جائیں۔ اپائنٹمنٹ کا انتظار نہ کریں۔",
      det_doctor: "ڈاکٹر",
      det_doctor_v: "ڈاکٹر وینا دیوی ایس، MBBS، MD ماہرِ اطفال",
      det_address: "پتہ",
      det_directions: "راستہ دیکھیں",
      det_phone: "فون",
      det_hours: "اوقات",
      hours1: "پیر سے ہفتہ: صبح 10:00 – دوپہر 2:00 اور شام \u20665:00 – 7:00\u2069",
      hours2: "اتوار: بند",
      det_services: "خدمات",
      book_h: "اپائنٹمنٹ بک کریں",
      book_sub: "صرف آپ کا نام ضروری ہے۔ اگر ہو سکے تو باقی تفصیلات بھی دیں تاکہ ہم آپ سے رابطہ کر سکیں اور ملاقات کی تیاری کر سکیں۔",
      f_name: "والد/والدہ کا پورا نام *",
      f_email: "ای میل",
      f_phone: "فون",
      f_date: "تاریخ",
      f_time: "وقت",
      f_reason: "ملاقات کی وجہ",
      f_reason_ph: "وجہ چنیں",
      f_children: "بچے کی تفصیلات",
      add_child: "+ ایک اور بچہ شامل کریں",
      child_name: "بچے کا نام",
      child_age: "عمر (سال)",
      child_age_aria: "بچے کی عمر سالوں میں",
      remove: "ہٹائیں",
      submit: "اپائنٹمنٹ بک کریں",
      closed_sun: "اتوار کو بند",
      select_time: "وقت چنیں",
      booked: "بک ہو چکا",
      passed: "گزر چکا",
      err_times: "دستیاب اوقات لوڈ نہیں ہو سکے۔ براہِ کرم صفحہ ریفریش کریں۔",
      err_name: "براہِ کرم والد/والدہ کا نام درج کریں۔",
      err_email: "براہِ کرم ای میل پتہ چیک کریں، یا اسے خالی چھوڑ دیں۔",
      err_phone: "براہِ کرم فون نمبر چیک کریں، یا اسے خالی چھوڑ دیں۔",
      err_age: "براہِ کرم عمر پورے سالوں میں (0 سے {max}) لکھیں، یا خالی چھوڑ دیں۔",
      err_taken: "یہ وقت ابھی ابھی بک ہو گیا۔ براہِ کرم کوئی اور وقت چنیں۔",
      err_save: "آپ کی بکنگ محفوظ نہیں ہو سکی۔ براہِ کرم دوبارہ کوشش کریں۔",
      ok: "بک ہو گیا! {when}۔",
      when_full: "{date}، {time}",
      when_date: "{date}۔ کلینک وقت کی تصدیق کرے گا",
      when_none: "ابھی کوئی تاریخ نہیں چنی گئی۔ وقت طے کرنے کے لیے کلینک آپ سے رابطہ کرے گا",
      credits: "تمثیلی تصاویر"
    }
  };

  // The services line in the clinic details is built from the service names.
  Object.keys(STRINGS).forEach(function (code) {
    var s = STRINGS[code];
    s.services_list = [s.vacc, s.cons, s.ear, s.obs_short, s.obs_long].join(" · ");
  });

  var RTL = { ur: true };
  var KEY = "medislot.lang";
  var current = "en";

  function t(key, vars) {
    var text = (STRINGS[current] && STRINGS[current][key]) || STRINGS.en[key] || key;
    Object.keys(vars || {}).forEach(function (k) {
      text = text.split("{" + k + "}").join(vars[k]);
    });
    return text;
  }

  function apply(root) {
    root = root || document;
    root.querySelectorAll("[data-i18n]").forEach(function (n) { n.textContent = t(n.getAttribute("data-i18n")); });
    [["alt", "data-i18n-alt"], ["placeholder", "data-i18n-placeholder"], ["aria-label", "data-i18n-aria"]].forEach(function (pair) {
      root.querySelectorAll("[" + pair[1] + "]").forEach(function (n) { n.setAttribute(pair[0], t(n.getAttribute(pair[1]))); });
    });
  }

  function setLang(code, save) {
    if (!STRINGS[code]) code = "en";
    current = code;
    var html = document.documentElement;
    html.lang = code;
    html.dir = RTL[code] ? "rtl" : "ltr";
    document.title = t("meta_title");
    apply(document);
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === code));
    });
    if (save) {
      try { localStorage.setItem(KEY, code); } catch (err) { /* storage blocked: choice lasts until reload */ }
    }
    document.dispatchEvent(new CustomEvent("langchange", { detail: code }));
  }

  // ?lang=kn in the address wins, then the saved choice, then the browser's language.
  function initialLang() {
    var fromUrl = new URLSearchParams(location.search).get("lang");
    if (fromUrl && STRINGS[fromUrl]) return fromUrl;
    try {
      var saved = localStorage.getItem(KEY);
      if (saved && STRINGS[saved]) return saved;
    } catch (err) { /* ignore */ }
    var nav = (navigator.language || "en").slice(0, 2);
    return STRINGS[nav] ? nav : "en";
  }

  window.I18N = {
    t: t,
    apply: apply,
    lang: function () { return current; },
    // Locale for dates and times, always with Western digits.
    locale: function () { return current + "-IN-u-nu-latn"; }
  };

  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("[data-lang]").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang"), true); });
    });
    setLang(initialLang(), false);
  });
})();
