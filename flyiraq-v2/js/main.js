/* Fly Iraq First — v2 interactions + EN/AR/KU i18n (vanilla JS) */
(function () {
  "use strict";

  /* ---------------- Translations ---------------- */
  var I18N = {
    en: {
      "promo": "✦ New non-stop service: Baghdad → Paris, now 4× weekly",
      "nav.dest": "Destinations", "nav.exp": "Experience", "nav.fleet": "Fleet",
      "nav.loyalty": "Golden Wings", "nav.about": "About", "nav.contact": "Contact",
      "cta.contact": "Contact Us",
      "hero.eyebrow": "The Spirit of Mesopotamia",
      "hero.title": "Where Iraq<br />Meets the World",
      "hero.sub": "Fly farther in comfort. Over 40 destinations, a modern fleet, and the warmth of Iraqi hospitality at 38,000 feet.",
      "hero.explore": "Explore Destinations",
      "stats.dest": "Destinations", "stats.aircraft": "Aircraft", "stats.rating": "Guest rating", "stats.flyers": "Flyers / year",
      "trust.1": "IATA Member", "trust.2": "4-Star Rated Service", "trust.3": "Modern Boeing & Airbus Fleet", "trust.4": "24/7 Multilingual Support",
      "dest.eyebrow": "Where we fly", "dest.h2": "Popular destinations",
      "dest.lead": "From the Tigris to the Thames — explore our growing network.",
      "dest.from": "from", "dest.oneway": "one way",
      "exp.eyebrow": "On board", "exp.h2": "Travel that feels like home",
      "exp.p": "Lie-flat seats, regional cuisine prepared by Iraqi chefs, and cabin crew who treat every guest like family. Three cabins, one standard: exceptional.",
      "cabin.first.t": "First Suite", "cabin.first.d": "Private suites, on-demand dining, chauffeur transfer.",
      "cabin.business.t": "Business", "cabin.business.d": "Fully lie-flat beds, lounge access, priority everything.",
      "cabin.economy.t": "Economy", "cabin.economy.d": "Generous legroom, free meals, seat-back entertainment.",
      "fleet.eyebrow": "Our fleet", "fleet.h2": "A modern, fuel-efficient fleet",
      "fleet.lead": "Quiet cabins, lower emissions, and the range to connect Baghdad directly to the world.",
      "fleet.e190.t": "Embraer E190", "fleet.e190.d": "Our original jet — efficient comfort on short & medium-haul routes.",
      "fleet.a330.t": "Airbus A330", "fleet.a330.d": "Wide-body flagship · long-haul international routes.",
      "loy.eyebrow": "Golden Wings", "loy.h2": "Every journey rewards you",
      "loy.p": "Earn miles on every flight, unlock lounge access, priority boarding and complimentary upgrades. Membership is free — your next trip starts paying you back today.",
      "loy.t1": "Earn & redeem miles across 40+ destinations", "loy.t2": "Tier upgrades: Silver, Gold, Platinum", "loy.t3": "Family pooling & partner rewards",
      "loy.btn": "Join Golden Wings",
      "rev.eyebrow": "Guest stories", "rev.h2": "Loved by travellers",
      "rev.q1": "“The smoothest journey from Baghdad I've ever had. The crew genuinely cared.”",
      "rev.q2": "“Business class felt like a five-star hotel in the sky. I'll fly no one else.”",
      "rev.q3": "“Finally an airline that makes me proud to fly Iraqi. World class.”",
      "about.eyebrow": "Our story", "about.h2": "Carrying the pride of Iraq, higher",
      "about.p1": "Fly Iraq First started with a simple belief: that Iraqis deserve an airline that truly feels like their own. We're proud to call Baghdad home, and we try to carry a little of that warmth onto every single flight — whether you're heading off to see family, flying out to close a deal, or finally taking the trip you've been promising yourself for years.",
      "about.p2": "Our people are Iraqi, our welcome is Iraqi, and the care you feel on board isn't something we think you can fake. We're still a young airline, and we're growing carefully — adding routes, aircraft and people who believe in doing things properly. Thank you for flying with us. We honestly don't take it for granted.",
      "contact.eyebrow": "Get in touch", "contact.h2": "Contact us",
      "contact.lead": "We'd love to hear from you — our team is here to help, any time.",
      "contact.email_l": "Email", "contact.phone_l": "Phone", "contact.phone_l2": "Phone",
      "ctab.h2": "Ready to fly with us?", "ctab.p": "Get in touch and discover why travellers choose Fly Iraq First.",
      "footer.tagline": "The Spirit of Mesopotamia.<br />Designed with Iraqi pride.",
      "footer.explore": "Explore", "footer.contact": "Contact",
      "footer.rights": "© 2026 Fly Iraq First. All rights reserved."
    },
    ar: {
      "promo": "✦ خط جديد مباشر: بغداد ← باريس، الآن ٤ مرات أسبوعياً",
      "nav.dest": "الوجهات", "nav.exp": "التجربة", "nav.fleet": "الأسطول",
      "nav.loyalty": "الأجنحة الذهبية", "nav.about": "من نحن", "nav.contact": "اتصل بنا",
      "cta.contact": "اتصل بنا",
      "hero.eyebrow": "روح بلاد الرافدين",
      "hero.title": "حيث يلتقي العراق<br />بالعالم",
      "hero.sub": "سافر أبعد وأنت في راحة. أكثر من ٤٠ وجهة، أسطول حديث، ودفء الضيافة العراقية على ارتفاع ٣٨٬٠٠٠ قدم.",
      "hero.explore": "اكتشف الوجهات",
      "stats.dest": "وجهة", "stats.aircraft": "طائرة", "stats.rating": "تقييم الضيوف", "stats.flyers": "مسافر / سنوياً",
      "trust.1": "عضو في الإياتا", "trust.2": "خدمة بتصنيف ٤ نجوم", "trust.3": "أسطول حديث من بوينغ وإيرباص", "trust.4": "دعم بعدة لغات على مدار الساعة",
      "dest.eyebrow": "إلى أين نطير", "dest.h2": "وجهات مميّزة",
      "dest.lead": "من دجلة إلى التايمز — اكتشف شبكتنا المتنامية.",
      "dest.from": "ابتداءً من", "dest.oneway": "ذهاب فقط",
      "exp.eyebrow": "على متن الطائرة", "exp.h2": "سفرٌ يشبه البيت",
      "exp.p": "مقاعد تتحول إلى أسرّة مستوية، ومأكولات محلية يعدّها طهاة عراقيون، وطاقم يعامل كل ضيف كأنه من العائلة. ثلاث درجات، ومعيار واحد: التميّز.",
      "cabin.first.t": "الدرجة الأولى", "cabin.first.d": "أجنحة خاصة، وطعام عند الطلب، وخدمة توصيل خاصة.",
      "cabin.business.t": "درجة رجال الأعمال", "cabin.business.d": "أسرّة مستوية تماماً، ودخول الصالات، وأولوية في كل شيء.",
      "cabin.economy.t": "الدرجة السياحية", "cabin.economy.d": "مساحة واسعة للأرجل، ووجبات مجانية، وترفيه على المقعد.",
      "fleet.eyebrow": "أسطولنا", "fleet.h2": "أسطول حديث وموفّر للوقود",
      "fleet.lead": "مقصورات هادئة، وانبعاثات أقل، ومدى يربط بغداد مباشرةً بالعالم.",
      "fleet.e190.t": "إمبراير E190", "fleet.e190.d": "طائرتنا الأولى — راحة وكفاءة على الرحلات القصيرة والمتوسطة.",
      "fleet.a330.t": "إيرباص A330", "fleet.a330.d": "الطائرة الأضخم · للرحلات الدولية الطويلة.",
      "loy.eyebrow": "الأجنحة الذهبية", "loy.h2": "كل رحلة تكافئك",
      "loy.p": "اجمع الأميال مع كل رحلة، واحصل على دخول الصالات، وأولوية الصعود، والترقيات المجانية. العضوية مجانية — ورحلتك القادمة تبدأ بردّ الجميل اليوم.",
      "loy.t1": "اجمع واستبدل الأميال عبر أكثر من ٤٠ وجهة", "loy.t2": "ترقيات الفئات: فضية، ذهبية، بلاتينية", "loy.t3": "تجميع نقاط العائلة ومكافآت الشركاء",
      "loy.btn": "انضم إلى الأجنحة الذهبية",
      "rev.eyebrow": "قصص الضيوف", "rev.h2": "محبوب من المسافرين",
      "rev.q1": "«أسلس رحلة انطلقت بها من بغداد على الإطلاق. الطاقم اهتمّ بنا بصدق.»",
      "rev.q2": "«درجة رجال الأعمال أشبه بفندق خمس نجوم في السماء. لن أسافر مع غيرهم.»",
      "rev.q3": "«أخيراً شركة طيران تجعلني فخوراً بأنني أسافر عراقياً. مستوى عالمي.»",
      "about.eyebrow": "قصتنا", "about.h2": "نحمل فخر العراق إلى الأعلى",
      "about.p1": "بدأت طيران العراق الأول بإيمانٍ بسيط: أن العراقيين يستحقون شركة طيران تشعرهم حقاً بأنها لهم. نفخر بأن بغداد موطننا، ونحاول أن نحمل قليلاً من هذا الدفء إلى كل رحلة — سواء كنت ذاهباً لزيارة العائلة، أو مسافراً لإتمام صفقة، أو أخيراً تخوض الرحلة التي طالما وعدت بها نفسك.",
      "about.p2": "موظفونا عراقيون، وترحيبنا عراقي، والاهتمام الذي تشعر به على متن الطائرة ليس شيئاً يمكن تصنّعه. ما زلنا شركة فتيّة، ونكبر بعناية — نضيف وجهات وطائرات وأشخاصاً يؤمنون بإتقان العمل. شكراً لسفرك معنا، نحن لا نعتبر ذلك أمراً مفروغاً منه.",
      "contact.eyebrow": "تواصل معنا", "contact.h2": "اتصل بنا",
      "contact.lead": "يسعدنا تواصلك معنا — فريقنا جاهز لمساعدتك في أي وقت.",
      "contact.email_l": "البريد الإلكتروني", "contact.phone_l": "الهاتف", "contact.phone_l2": "الهاتف",
      "ctab.h2": "مستعدٌّ للسفر معنا؟", "ctab.p": "تواصل معنا واكتشف لماذا يختار المسافرون طيران العراق الأول.",
      "footer.tagline": "روح بلاد الرافدين.<br />صُمّم بفخرٍ عراقي.",
      "footer.explore": "استكشف", "footer.contact": "اتصل بنا",
      "footer.rights": "© ٢٠٢٦ طيران العراق الأول. جميع الحقوق محفوظة."
    },
    ku: {
      "promo": "✦ ڕێگای نوێی ڕاستەوخۆ: بەغدا ← پاریس، ئێستا ٤ جار لە هەفتەیەکدا",
      "nav.dest": "شوێنەکان", "nav.exp": "ئەزموون", "nav.fleet": "هێڵی فڕۆکەکان",
      "nav.loyalty": "باڵە زێڕینەکان", "nav.about": "دەربارەمان", "nav.contact": "پەیوەندی",
      "cta.contact": "پەیوەندیمان پێوە بکە",
      "hero.eyebrow": "ڕۆحی مێزۆپۆتامیا",
      "hero.title": "ئەو شوێنەی عێراق<br />بە جیهان دەگەیەنێت",
      "hero.sub": "بە ئاسوودەیی دوورتر بفڕە. زیاتر لە ٤٠ شوێن، هێڵێکی نوێی فڕۆکە، و گەرمی میوانداری عێراقی لە بەرزایی ٣٨٬٠٠٠ پێدا.",
      "hero.explore": "شوێنەکان بگەڕێ",
      "stats.dest": "شوێن", "stats.aircraft": "فڕۆکە", "stats.rating": "هەڵسەنگاندنی میوان", "stats.flyers": "گەشتیار / ساڵانە",
      "trust.1": "ئەندامی ئایاتا", "trust.2": "خزمەتگوزاری ٤ ئەستێرە", "trust.3": "هێڵی نوێی بۆینگ و ئەیرباس", "trust.4": "پشتگیری چەند زمانە ٢٤/٧",
      "dest.eyebrow": "بۆ کوێ دەفڕین", "dest.h2": "شوێنە بەناوبانگەکان",
      "dest.lead": "لە دیجلەوە بۆ تەمز — تۆڕە گەشەسەندووەکەمان بگەڕێ.",
      "dest.from": "لە", "dest.oneway": "یەک ڕێگا",
      "exp.eyebrow": "لەناو فڕۆکەدا", "exp.h2": "گەشتێک وەک ماڵەوە",
      "exp.p": "کورسی ڕاکشاو، خواردنی ناوچەیی کە چێشتلێنەرە عێراقییەکان ئامادەی دەکەن، و ستافێک کە هەموو میوانێک وەک خێزان مامەڵەی لەگەڵدا دەکات. سێ پلە، یەک ستانداردی نایاب.",
      "cabin.first.t": "پلەی یەکەم", "cabin.first.d": "سویتی تایبەت، خواردن بەپێی داواکاری، گواستنەوەی تایبەت.",
      "cabin.business.t": "پلەی بازرگانی", "cabin.business.d": "قەرەوێڵەی ڕاکشاو، چوونەژوورەوەی هۆڵ، پێشینەیی لە هەموو شتێکدا.",
      "cabin.economy.t": "پلەی ئابووری", "cabin.economy.d": "بۆشایی فراوان بۆ قاچ، خواردنی بەخۆڕایی، کات‌بەسەربردن لەسەر کورسی.",
      "fleet.eyebrow": "هێڵی فڕۆکەکانمان", "fleet.h2": "هێڵێکی نوێ و سووتەمەنی‌پارێز",
      "fleet.lead": "کابینەی بێدەنگ، تێچووی کەمتری ژینگەیی، و توانای گەیاندنی ڕاستەوخۆی بەغدا بۆ جیهان.",
      "fleet.e190.t": "ئیمبرایەر E190", "fleet.e190.d": "فڕۆکە سەرەکییەکەمان — ئاسوودەیی و کارایی لە ڕێگا کورت و مامناوەندەکاندا.",
      "fleet.a330.t": "ئەیرباس A330", "fleet.a330.d": "فڕۆکە گەورەکە · بۆ ڕێگا دوور و نێودەوڵەتییەکان.",
      "loy.eyebrow": "باڵە زێڕینەکان", "loy.h2": "هەر گەشتێک پاداشتت دەداتەوە",
      "loy.p": "لەگەڵ هەر فڕینێک مایل کۆبکەرەوە، چوونەژوورەوەی هۆڵ، پێشینەیی سواربوون و بەرزکردنەوەی بەخۆڕایی بەدەستبهێنە. ئەندامێتی بەخۆڕاییە — گەشتی داهاتووت لە ئەمڕۆوە دەستدەکات بە پاداشتدانەوەت.",
      "loy.t1": "کۆکردنەوە و بەکارهێنانی مایل لە زیاتر لە ٤٠ شوێن", "loy.t2": "بەرزکردنەوەی پلە: زیو، زێڕ، پلاتین", "loy.t3": "کۆکردنەوەی خێزانی و پاداشتی هاوبەشەکان",
      "loy.btn": "بەشداربە لە باڵە زێڕینەکان",
      "rev.eyebrow": "چیرۆکی میوانەکان", "rev.h2": "خۆشەویست لای گەشتیاران",
      "rev.q1": "«ئاسانترین گەشت بوو کە لە بەغداوە کردبێتم. ستافەکە بەڕاستی گرنگییان پێدەدا.»",
      "rev.q2": "«پلەی بازرگانی وەک هۆتێلێکی پێنج ئەستێرە وابوو لە ئاسماندا. لەگەڵ هیچ کەسێکی تر نافڕم.»",
      "rev.q3": "«لەکۆتاییدا کۆمپانیایەکی فڕین کە شانازیم پێدەکات بە عێراقی بفڕم. ئاستی جیهانی.»",
      "about.eyebrow": "چیرۆکەکەمان", "about.h2": "شانازی عێراق بەرزتر هەڵدەگرین",
      "about.p1": "طیرانی عێراقی یەکەم بە باوەڕێکی سادە دەستی پێکرد: عێراقییەکان شایانی کۆمپانیایەکی فڕینن کە بەڕاستی هەست بکەن هی خۆیانە. شانازی دەکەین کە بەغدا ماڵمانە، و هەوڵدەدەین کەمێک لەو گەرمییە بۆ هەموو فڕینێک بگوازینەوە — جا بۆ سەردانی خێزان بێت، یان بۆ تەواوکردنی گرێبەستێک، یان لەکۆتاییدا ئەو گەشتەی کە ماوەیەکە بەڵێنت بەخۆت داوە.",
      "about.p2": "ستافەکەمان عێراقین، پێشوازیمان عێراقییە، و ئەو گرنگیدانەی لەناو فڕۆکەدا هەستی پێدەکەیت شتێک نییە بتوانرێت ساختە بکرێت. هێشتا کۆمپانیایەکی گەنجین، و بە وردی گەشە دەکەین — ڕێگا و فڕۆکە و کەسانێک زیاد دەکەین کە باوەڕیان بە چاکی کارکردن هەیە. سوپاس بۆ فڕینت لەگەڵمان. بەڕاستی بە سادە سەیری ناکەین.",
      "contact.eyebrow": "پەیوەندیمان پێوە بکە", "contact.h2": "پەیوەندیمان پێوە بکە",
      "contact.lead": "خۆشحاڵ دەبین گوێمان لێت بێت — تیمەکەمان هەمیشە ئامادەیە بۆ یارمەتیت.",
      "contact.email_l": "ئیمەیڵ", "contact.phone_l": "تەلەفۆن", "contact.phone_l2": "تەلەفۆن",
      "ctab.h2": "ئامادەی لەگەڵمان بفڕیت؟", "ctab.p": "پەیوەندیمان پێوە بکە و بزانە بۆچی گەشتیاران طیرانی عێراقی یەکەم هەڵدەبژێرن.",
      "footer.tagline": "ڕۆحی مێزۆپۆتامیا.<br />بە شانازی عێراقی دروستکراوە.",
      "footer.explore": "گەڕان", "footer.contact": "پەیوەندی",
      "footer.rights": "© ٢٠٢٦ طیرانی عێراقی یەکەم. هەموو مافەکان پارێزراون."
    }
  };

  /* ---- Destinations (city/country translated; price stays numeric) ---- */
  var destinations = [
    { key: "dubai",    img: "images/dest-dubai.jpg",    price: 199,
      city: { en: "Dubai", ar: "دبي", ku: "دوبەی" }, country: { en: "United Arab Emirates", ar: "الإمارات العربية المتحدة", ku: "میرنشینە یەکگرتووە عەرەبییەکان" } },
    { key: "istanbul", img: "images/dest-istanbul.jpg", price: 159,
      city: { en: "Istanbul", ar: "إسطنبول", ku: "ئەستەنبووڵ" }, country: { en: "Türkiye", ar: "تركيا", ku: "تورکیا" } },
    { key: "london",   img: "images/dest-london.jpg",   price: 499,
      city: { en: "London", ar: "لندن", ku: "لەندەن" }, country: { en: "United Kingdom", ar: "المملكة المتحدة", ku: "شانشینی یەکگرتوو" } },
    { key: "paris",    img: "images/dest-paris.jpg",    price: 459,
      city: { en: "Paris", ar: "باريس", ku: "پاریس" }, country: { en: "France", ar: "فرنسا", ku: "فەرەنسا" } },
    { key: "cairo",    img: "images/dest-cairo.jpg",    price: 229,
      city: { en: "Cairo", ar: "القاهرة", ku: "قاهیرە" }, country: { en: "Egypt", ar: "مصر", ku: "میسر" } },
    { key: "baghdad",  img: "images/dest-baghdad.jpg",  price: 89,
      city: { en: "Baghdad", ar: "بغداد", ku: "بەغدا" }, country: { en: "Iraq · Home", ar: "العراق · الوطن", ku: "عێراق · نیشتمان" } }
  ];

  var currentLang = "en";

  function money(n) { return "$" + n.toLocaleString("en-US"); }

  function renderDestinations(lang) {
    var grid = document.getElementById("destGrid");
    if (!grid) return;
    var t = I18N[lang] || I18N.en;
    grid.innerHTML = destinations.map(function (d) {
      return (
        '<article class="dest-card reveal">' +
          '<img src="' + d.img + '" alt="' + d.city.en + ', ' + d.country.en + '" loading="lazy" />' +
          '<div class="dest-info">' +
            '<p class="country">' + (d.country[lang] || d.country.en) + '</p>' +
            '<h3>' + (d.city[lang] || d.city.en) + '</h3>' +
            '<p class="price">' + t["dest.from"] + ' <span>' + money(d.price) + '</span> ' + t["dest.oneway"] + '</p>' +
          '</div>' +
        '</article>'
      );
    }).join("");
    observeReveals();
  }

  /* ---------------- Language switch ---------------- */
  function setLang(lang) {
    if (!I18N[lang]) lang = "en";
    currentLang = lang;
    var dict = I18N[lang];
    document.documentElement.lang = lang;
    document.documentElement.dir = (lang === "ar" || lang === "ku") ? "rtl" : "ltr";
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-lang") === lang);
    });
    renderDestinations(lang);
    try { localStorage.setItem("fif_lang", lang); } catch (e) {}
  }

  function initLang() {
    document.querySelectorAll(".lang-switch button").forEach(function (b) {
      b.addEventListener("click", function () { setLang(b.getAttribute("data-lang")); });
    });
    var saved = "en";
    try { saved = localStorage.getItem("fif_lang") || "en"; } catch (e) {}
    setLang(saved);
  }

  /* ---------------- Mobile nav ---------------- */
  function initNav() {
    var t = document.getElementById("navToggle"), n = document.getElementById("mainNav");
    if (!t || !n) return;
    t.addEventListener("click", function () {
      var o = n.classList.toggle("open");
      t.classList.toggle("open", o);
      t.setAttribute("aria-expanded", o ? "true" : "false");
    });
    n.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        n.classList.remove("open"); t.classList.remove("open"); t.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------------- Header shadow ---------------- */
  function initHeader() {
    var h = document.getElementById("siteHeader");
    if (!h) return;
    var f = function () { h.classList.toggle("scrolled", window.scrollY > 10); };
    window.addEventListener("scroll", f, { passive: true });
    f();
  }

  /* ---------------- Scroll reveal ---------------- */
  var ro;
  function observeReveals() {
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach(function (e) { e.classList.add("in"); });
      return;
    }
    if (!ro) {
      ro = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); } });
      }, { threshold: 0.12 });
    }
    document.querySelectorAll(".reveal:not(.in)").forEach(function (e) { ro.observe(e); });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initLang();      // also renders destinations
    initNav();
    initHeader();
    observeReveals();
  });
})();
