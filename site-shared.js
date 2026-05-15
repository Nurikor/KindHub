/**
 * Общий язык и тема для index.html и demo.html (тот же LANG_KEY, что в role-page.js).
 */
const THEME_KEY = "kindhub-theme";
const LANG_KEY = "kindhub-lang";

const SITE_TRANSLATIONS = {
  landing: {
    ru: {
      themeDark: "Тёмная тема",
      themeLight: "Светлая тема",
      badge: "DEMO версия проекта для Хакатона"
      heroTitle: "Платформа, где помощь приходит быстро и безопасно",
      heroLead:
        "KindHub объединяет фонды, волонтёров, обычных людей и тех, кому нужна помощь, в одном понятном пространстве с доверием и реальными сценариями поддержки.",
      openDemo: "Открыть DEMO версию",
      howItWorks: "Как работает платформа",
      aboutTitle: "Основная идея KindHub",
      cardFund: "Для фондов",
      cardFundText: "Фонд может регистрироваться, добавлять документы и описывать направления деятельности.",
      cardVol: "Для волонтёров",
      cardVolText:
        "Волонтёры из фондов получают более глубокий уровень доверия и могут помогать в важных задачах.",
      cardPeople: "Для обычных людей",
      cardPeopleText:
        "Пользователи формата «Безвоздмездник» помогают рядом или удалённо, например по звонку незрячим.",
      cardHelp: "Для тех, кому нужна помощь",
      cardHelpText:
        "Создание запросов с указанием места на карте, разные категории помощи, поддержка незрячих по звонку и связь с волонтёрами.",
      footer: "KindHub · Дизайн с двумя темами и отдельным демо-файлом."
    },
    en: {
      themeDark: "Dark theme",
      themeLight: "Light theme",
      badge: "DEMO version of the Hackathon project",
      heroTitle: "A platform where help arrives quickly and safely",
      heroLead:
        "KindHub brings together foundations, volunteers, everyday helpers, and people who need support — one clear space built on trust and real support scenarios.",
      openDemo: "Open DEMO version",
      howItWorks: "How the platform works",
      aboutTitle: "KindHub in brief",
      cardFund: "For foundations",
      cardFundText: "Foundations can register, attach documents, and describe their focus areas.",
      cardVol: "For volunteers",
      cardVolText:
        "Volunteers linked to foundations gain deeper trust and can take on more impactful tasks.",
      cardPeople: "For everyday helpers",
      cardPeopleText:
        "«Benefactors» help nearby or remotely — for example by calling to assist blind users.",
      cardHelp: "For those who need help",
      cardHelpText:
        "Create requests by marking locations on map, various help categories, support for blind users, and connection with verified helpers.",
      footer: "KindHub · Two themes and a separate demo page."
    },
    kg: {
      themeDark: "Кара тема",
      themeLight: "Жарык тема",
      badge: Хакатон үчүн долбоордун DEMO версиясы",
      heroTitle: "Жардам тез жана коопсуз жеткен платформа",
      heroLead:
        "KindHub фонддорду, ыктыярчыларды, кадимки адамдарды жана жардамга муктаждарды бир эле түшүнүктүү мейкиндикте бириктирет — ишеним жана реалдуу сценарийлер менен.",
      openDemo: "DEMO версиясыны ачуу",
      howItWorks: "Платформа кантип иштейт",
      aboutTitle: "KindHub жөнүндө негизги идея",
      cardFund: "Фонддор үчүн",
      cardFundText: "Фонд катталып, документтерди тиркеп, багыттарын сүрөттөй алат.",
      cardVol: "Ыктыярчылар үчүн",
      cardVolText:
        "Фонд менен байланышкан ыктыярчылар тереңирээк ишенимге ээ болуп, маанилүү тапшырмаларды аткарат.",
      cardPeople: "Кадимки адамдар үчүн",
      cardPeopleText:
        "«Кайрымдуулар» жакын жерден же алыстан жардам көрсөтүшөт — мисалы, көрүүсү начарларга чакырык менен.",
      cardHelp: "Жардамга муктаждар үчүн",
      cardHelpText:
        "Картада жерин көрсөтүп суроостарды түзүү, ар түрдүү жардам категориялары, көрүүсү начарларга телефон аркылуу колдоо жана ыктыярчылар менен байланыш.",
      footer: "KindHub · Эки тема жана өзүнчө демо барак."
    }
  },
  demo: {
    ru: {
      themeDark: "Тёмная тема",
      themeLight: "Светлая тема",
      backHome: "← На главную",
      badge: "DEMO версия MVP",
      title: "Выберите, как вы хотите войти в KindHub",
      lead:
        "В MVP предусмотрено 4 роли. Нажмите на карточку для перехода на отдельный экран регистрации и функций.",
      role1t: "Как фонд",
      role1d: "Регистрация фонда, документы, направления работы.",
      role2t: "Как волонтер",
      role2d: "Для тех, кто уже зарегистрирован в фондах и хочет помогать глубже.",
      role3t: "Как Безвоздмездник",
      role3d: "Помощь людям рядом или по звонку в разных ситуациях.",
      role4t: "Как человеку, которому нужна помощь",
      role4d: "Создание запроса с указанием места на карте, категориями помощи и поддержкой по звонку.",
      noteTitle: "Что изменилось",
      noteText:
        "Теперь у каждой роли отдельный файл. Там доступны регистрация, задачи, карта и определение местоположения."
    },
    en: {
      themeDark: "Dark theme",
      themeLight: "Light theme",
      backHome: "← Home",
      badge: "MVP DEMO",
      title: "Choose how you want to enter KindHub",
      lead:
        "The MVP has 4 roles. Tap a card to open a dedicated registration and features screen.",
      role1t: "As a foundation",
      role1d: "Foundation registration, documents, focus areas.",
      role2t: "As a volunteer",
      role2d: "For people already registered with foundations who want to help more deeply.",
      role3t: "As a Benefactor",
      role3d: "Help people nearby or by phone in different situations.",
      role4t: "If you need help",
      role4d: "Create a request by marking your location on the map, choose help category, get phone support.",
      noteTitle: "What changed",
      noteText:
        "Each role now has its own page with registration, tasks, map, and geolocation."
    },
    kg: {
      themeDark: "Кара тема",
      themeLight: "Жарык тема",
      backHome: "← Башкы бетке",
      badge: "MVP DEMO версиясы",
      title: "KindHubка кантип кирүүнү тандаңыз",
      lead:
        "MVPда 4 роль бар. Каттоо жана функциялар үчүн өзүнчө экран ачуу үчүн картага баскыла.",
      role1t: "Фонд катары",
      role1d: "Фонд каттоо, документтер, иш багыттары.",
      role2t: "Ыктыярчы катары",
      role2d: "Фонддордо катталган жана тереңирээк жардам көрсөткүсү келгендер үчүн.",
      role3t: "Кайрымдуу катары",
      role3d: "Жакын жерден же телефон менен ар кандай жагдайда жардам.",
      role4t: "Жардамга муктаж адам катары",
      role4d: "Картада жерин көрсөтүп суроо түзүү, жардам категориясын тандап, телефон колдоосу алуу.",
      noteTitle: "Эмне өзгөрдү",
      noteText:
        "Ар бир ролдун өз барагы бар: каттоо, тапшырмалар, карта жана геолокация."
    }
  }
};

function siteT(page, lang, key) {
  const pack = SITE_TRANSLATIONS[page];
  if (!pack || !pack[lang] || !pack[lang][key]) return SITE_TRANSLATIONS[page].ru[key] || key;
  return pack[lang][key];
}

function applySiteI18n(page, lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    el.textContent = siteT(page, lang, key);
  });
  const themeBtn = document.getElementById("themeToggle");
  if (themeBtn) {
    themeBtn.textContent = document.body.classList.contains("dark-theme")
      ? siteT(page, lang, "themeLight")
      : siteT(page, lang, "themeDark");
  }
  const langSel = document.getElementById("langSelect");
  if (langSel) langSel.value = lang;
}

function initSiteShared() {
  const page = document.body.dataset.sitePage || "landing";
  let lang = localStorage.getItem(LANG_KEY) || "ru";
  const langSelect = document.getElementById("langSelect");
  const themeToggle = document.getElementById("themeToggle");

  const savedTheme = localStorage.getItem(THEME_KEY);
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (prefersDark ? "dark" : "light");
  if (theme === "dark") document.body.classList.add("dark-theme");
  else document.body.classList.remove("dark-theme");

  applySiteI18n(page, lang);

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      const next = document.body.classList.contains("dark-theme") ? "light" : "dark";
      localStorage.setItem(THEME_KEY, next);
      if (next === "dark") document.body.classList.add("dark-theme");
      else document.body.classList.remove("dark-theme");
      applySiteI18n(page, lang);
    });
  }

  if (langSelect) {
    langSelect.addEventListener("change", () => {
      lang = langSelect.value;
      localStorage.setItem(LANG_KEY, lang);
      applySiteI18n(page, lang);
    });
  }
}

initSiteShared();
