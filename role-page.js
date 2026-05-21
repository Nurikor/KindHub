const THEME_KEY = "kindhub-theme";
const LANG_KEY = "kindhub-lang";
const BISHKEK = { lat: 42.8746, lng: 74.5698 };

const themeToggle = document.getElementById("themeToggle");
const langSelect = document.getElementById("langSelect");
const getLocationBtn = document.getElementById("getLocationBtn");
const locationStatus = document.getElementById("locationStatus");
const openMapsLink = document.getElementById("openMapsLink");
const role = document.body.dataset.role;
const registerBtn = document.getElementById("registerBtn");
const fundRegisterBtn = document.getElementById("fundRegisterBtn");
const createHelpBtn = document.getElementById("createHelpBtn");
const formStatus = document.getElementById("formStatus");
const fundStatus = document.getElementById("fundStatus");
const blindStatus = document.getElementById("blindStatus");
const taskSection = document.getElementById("taskSection");
const mapSection = document.getElementById("mapSection");
const taskGrid = document.getElementById("taskGrid");
const blindBadge = document.getElementById("blindModeBadge");
const blindSendBtn = document.getElementById("blindSendBtn");

const translations = {
  ru: {
    themeDark: "Тёмная тема",
    themeLight: "Светлая тема",
    back: "← Назад к выбору роли",
    allowGeo: "Разрешить геолокацию",
    openGoogle: "Открыть в Google Maps",
    mapTitle: "Карта задач и местоположение",
    mapTitleNeed: "Карта: укажите, где нужна помощь",
    mapClickHint: "Нажмите на карту, чтобы поставить метку. Её можно перетащить для уточнения.",
    helpLocationSet: "Место помощи на карте",
    helpErrLocation: "Для локальной помощи укажите точку на карте (клик по карте).",
    nameLabel: "Имя",
    fundLabel: "Фонд",
    districtLabel: "Район",
    registerVolunteer: "Зарегистрироваться как волонтер",
    registerBez: "Зарегистрироваться как Безвоздмездник",
    taskChecklist: "Задания по местности (чек-лист)",
    volTaskHint: "Для зарегистрированного волонтера доступны задания 1, 2 и 3.",
    bezTaskHint: "Для Безвоздмездника доступно только задание 2.",
    volTitle: "Регистрация волонтера · Бишкек",
    bezTitle: "Регистрация Безвоздмездника · Бишкек",
    fundTitle: "Регистрация фонда · Бишкек",
    fundHint:
      "После регистрации фонд может публиковать задачи для волонтеров и Безвоздмездников.",
    fundName: "Название фонда",
    fundDirection: "Направление",
    needTitle: "Создание запроса на помощь · Бишкек",
    helpCategory: "Категория помощи",
    descriptionLabel: "Описание",
    createRequest: "Создать запрос",
    blindDepartment: "Незрячий отдел",
    blindAll: "К волонтеру или Безвоздмезднику",
    blindVol: "Только к зарегистрированному волонтеру",
    blindModeAll: "Режим: обратиться к волонтеру или Безвоздмезднику",
    blindModeVol: "Режим: только к зарегистрированному волонтеру",
    blindMessage: "Сообщение в незрячий отдел",
    blindExtraTask: "Дополнительная задача",
    sendBlindRequest: "Отправить обращение",
    geoDefault: "Карта показывает Бишкек и задачи с рандомными точками.",
    geoOk: "Ваше местоположение определено и показано на карте.",
    geoFail: "Не удалось получить геолокацию. Оставлена карта Бишкека.",
    formOkVolunteer: "Вы зарегистрированы. Задачи и карта открыты.",
    formOkBez: "Вы зарегистрированы. Доступно задание 2, карта и заявки в фонды.",
    formErrName: "Имя: только русские/кыргызские буквы, до 16 символов.",
    formErrDistrict: "Выберите район из списка Бишкека.",
    blindSent: "Обращение отправлено в незрячий отдел.",
    taskDone: "Задача отмечена как выполненная.",
    phName: "Ваше имя",
    phFund: "Фонд, где вы зарегистрированы",
    phFundName: "Например: Фонд поддержки семьи",
    phFundDirection: "Незрячие, пожилые, семьи",
    phHelp: "Опишите ситуацию и что нужно сделать",
    phBlind: "Например: помочь прочитать надпись через видеозвонок",
    phExtra: "Например: купить лекарства, продукты или помочь с доставкой",
    uploadAvatar: "Фото профиля",
    uploadAvatarHint: "Выберите своё фото — оно будет показано в профиле.",
    orgDocsLabel: "Документы организации",
    orgDocsHint:
      "Загрузите файлы, подтверждающие регистрацию НКО: устав, свидетельство, ИНН (PDF или фото).",
    fundRegister: "Подать регистрацию фонда",
    fundOk: "Документы приняты. Регистрация фонда отправлена на проверку (DEMO).",
    fundErrDocs: "Добавьте хотя бы один файл с документами организации.",
    fundErrFields: "Укажите название фонда и направление.",
    attachRecipe: "Фото рецепта или списка (по желанию)",
    attachPlace: "Фото места встречи / ориентира (по желанию)",
    helpSent: "Запрос создан (DEMO).",
    helpErrEmpty: "Опишите, какая нужна помощь.",
    catBlind: "Незрячие",
    catLocal: "Локальная (местность)",
    catHome: "Бытовая",
    taskDoneLabel: "Выполнено",
    coordsLabel: "Координаты",
    fundApplicationTitle: "Заявка в фонд как волонтер",
    fundApplicationHint: "Выберите фонд и подайте заявку для работы волонтером",
    applyToFund: "Подать заявку",
    fundApplicationSent: "Заявка отправлена в фонд (DEMO)."
  },
  en: {
    themeDark: "Dark theme",
    themeLight: "Light theme",
    back: "← Back to role selection",
    allowGeo: "Allow geolocation",
    openGoogle: "Open in Google Maps",
    mapTitle: "Task map and location",
    mapTitleNeed: "Map: mark where you need help",
    mapClickHint: "Click the map to place a marker. Drag it to adjust the exact spot.",
    helpLocationSet: "Help location on map",
    helpErrLocation: "For on-site help, pick a point on the map (click the map).",
    nameLabel: "Name",
    fundLabel: "Foundation",
    districtLabel: "District",
    registerVolunteer: "Register as volunteer",
    registerBez: "Register as Benefactor",
    taskChecklist: "Location tasks (checklist)",
    volTaskHint: "Registered volunteers can access tasks 1, 2 and 3.",
    bezTaskHint: "Benefactor can access only task 2.",
    volTitle: "Volunteer registration · Bishkek",
    bezTitle: "Benefactor registration · Bishkek",
    fundTitle: "Foundation registration · Bishkek",
    fundHint:
      "After registration, the foundation can publish tasks for volunteers and Benefactors.",
    fundName: "Foundation name",
    fundDirection: "Focus area",
    needTitle: "Create help request · Bishkek",
    helpCategory: "Help category",
    descriptionLabel: "Description",
    createRequest: "Create request",
    blindDepartment: "Blind support section",
    blindAll: "Call volunteer or Benefactor",
    blindVol: "Only registered volunteer",
    blindModeAll: "Mode: volunteer or Benefactor",
    blindModeVol: "Mode: only registered volunteer",
    blindMessage: "Message to blind support",
    blindExtraTask: "Additional task",
    sendBlindRequest: "Send request",
    geoDefault: "Map shows Bishkek and random task locations.",
    geoOk: "Your location is detected and shown on the map.",
    geoFail: "Could not get location. Bishkek map is kept.",
    formOkVolunteer: "Registration complete. Tasks and map are open.",
    formOkBez: "Registration complete. Task 2, map, and foundation applications are open.",
    formErrName: "Name: Cyrillic only, max 16 characters.",
    formErrDistrict: "Select Bishkek district from the list.",
    blindSent: "Request sent to blind support section.",
    taskDone: "Task marked as done.",
    phName: "Your name",
    phFund: "Foundation where you are registered",
    phFundName: "e.g. Family Support Foundation",
    phFundDirection: "Blind support, elderly, families",
    phHelp: "Describe your situation and required help",
    phBlind: "For example: help read a sign via video call",
    phExtra: "For example: buy medicine, groceries or help with delivery",
    uploadAvatar: "Profile photo",
    uploadAvatarHint: "Choose your own photo — it will appear on your profile.",
    orgDocsLabel: "Organization documents",
    orgDocsHint:
      "Upload files proving NGO registration: charter, certificate, tax ID (PDF or photo).",
    fundRegister: "Submit foundation registration",
    fundOk: "Documents received. Foundation registration submitted for review (DEMO).",
    fundErrDocs: "Add at least one organization document file.",
    fundErrFields: "Enter foundation name and focus area.",
    attachRecipe: "Photo of prescription or list (optional)",
    attachPlace: "Photo of meeting place / landmark (optional)",
    helpSent: "Request created (DEMO).",
    helpErrEmpty: "Describe what help you need.",
    catBlind: "Blind / low vision",
    catLocal: "Local (on-site)",
    catHome: "Everyday help",
    taskDoneLabel: "Done",
    coordsLabel: "Coordinates",
    fundApplicationTitle: "Apply to foundation as volunteer",
    fundApplicationHint: "Choose a foundation and submit your application to work as a volunteer",
    applyToFund: "Submit application",
    fundApplicationSent: "Application sent to foundation (DEMO)."
  },
  kg: {
    themeDark: "Кара тема",
    themeLight: "Жарык тема",
    back: "← Рол тандоого кайтуу",
    allowGeo: "Геолокацияны уруксат кылуу",
    openGoogle: "Google Maps ачуу",
    mapTitle: "Тапшырма картасы жана жайгашуу",
    mapTitleNeed: "Карта: жардам кай жерде керек экенин көрсөтүңүз",
    mapClickHint: "Картага басып белги коюңуз. Так жайгаштыруу үчүн сүйрөп коюңуз.",
    helpLocationSet: "Картадагы жардам жери",
    helpErrLocation: "Жергиликтүү жардам үчүн картадан чекит тандаңыз.",
    nameLabel: "Аты",
    fundLabel: "Фонд",
    districtLabel: "Район",
    registerVolunteer: "Ыктыярчы болуп катталуу",
    registerBez: "Кайрымдуу болуп катталуу",
    taskChecklist: "Жайгашуу боюнча тапшырмалар",
    volTaskHint: "Катталган ыктыярчы 1, 2, 3 тапшырмаларга кире алат.",
    bezTaskHint: "Кайрымдууга 2-тапшырма гана ачык.",
    volTitle: "Ыктыярчы каттоо · Бишкек",
    bezTitle: "Кайрымдуу каттоо · Бишкек",
    fundTitle: "Фонд каттоо · Бишкек",
    fundHint:
      "Каттоодон кийин фонд ыктыярчылар жана Кайрымдуулар үчүн тапшырмаларды жарыялай алат.",
    fundName: "Фонддун аталышы",
    fundDirection: "Багыт",
    needTitle: "Жардам суроо түзүү · Бишкек",
    helpCategory: "Жардам категориясы",
    descriptionLabel: "Сүрөттөмө",
    createRequest: "Суроо түзүү",
    blindDepartment: "Көрүүсү начарлар бөлүмү",
    blindAll: "Ыктыярчыга же Кайрымдууга кайрылуу",
    blindVol: "Катталган ыктыярчыга гана",
    blindModeAll: "Режим: ыктыярчы же Кайрымдуу",
    blindModeVol: "Режим: катталган ыктыярчы гана",
    blindMessage: "Көрүүсү начарлар бөлүмүнө билдирүү",
    blindExtraTask: "Кошумча тапшырма",
    sendBlindRequest: "Кайрылуу жөнөтүү",
    geoDefault: "Картада Бишкек жана туш келди тапшырма чекиттери көрсөтүлөт.",
    geoOk: "Сиздин жайгашууңуз картада көрсөтүлдү.",
    geoFail: "Геолокация алынган жок. Бишкек картасы калды.",
    formOkVolunteer: "Каттоо аяктады. Тапшырмалар жана карта ачылды.",
    formOkBez: "Каттоо аяктады. 2-тапшырма, карта жана фондго өтүнүчтөр ачылды.",
    formErrName: "Аты: кирилл тамгалары гана, эң көп 16 белги.",
    formErrDistrict: "Бишкектин районун тизмеден тандаңыз.",
    blindSent: "Кайрылуу жөнөтүлдү.",
    taskDone: "Тапшырма аткарылды деп белгиленди.",
    phName: "Сиздин атыңыз",
    phFund: "Катталган фондуңуз",
    phFundName: "Мисалы: Үй-бүлөгө колдоо фонду",
    phFundDirection: "Көрүүсү начарлар, карылар, үй-бүлөлөр",
    phHelp: "Жагдайды жана керек жардамды сүрөттөңүз",
    phBlind: "Мисалы: видеочалуу менен жазууну окуп берүү",
    phExtra: "Мисалы: дары, азык сатып берүү же жеткирүүгө жардам",
    uploadAvatar: "Профиль сүрөтү",
    uploadAvatarHint: "Өзүңүздүн сүрөтүңүздү тандаңыз — профилде көрүнөт.",
    orgDocsLabel: "Уюмдун документтери",
    orgDocsHint:
      "НКО катталганын тастыктаган файлдарды жүктөңүз: устав, күбөлүк, ИНН (PDF же сүрөт).",
    fundRegister: "Фонд каттоо сунушун жөнөтүү",
    fundOk: "Документтер кабыл алынды. Фонд каттоосу текшерүүгө жөнөтүлдү (DEMO).",
    fundErrDocs: "Уюмдун документинен кеминде бир файл кошуңуз.",
    fundErrFields: "Фонддун аталышы жана багытын жазыңыз.",
    attachRecipe: "Рецепт же тизменин сүрөтү (каалоо боюнча)",
    attachPlace: "Жолугушуу жеринин сүрөтү (каалоо боюнча)",
    helpSent: "Суроо түзүлдү (DEMO).",
    helpErrEmpty: "Кандай жардам керек экенин жазыңыз.",
    catBlind: "Көрүүсү начар",
    catLocal: "Жерде (жергиликтүү)",
    catHome: "Күнүмдүк жардам",
    taskDoneLabel: "Аткарылды",
    coordsLabel: "Координаталар",
    fundApplicationTitle: "Фондго ыктыярчы катары өтүнүч",
    fundApplicationHint: "Фондду тандап, ыктыярчы болуп иштөө үчүн өтүнүчүңүздү жөнөтүңүз",
    applyToFund: "Өтүнүч жөнөтүү",
    fundApplicationSent: "Өтүнүч фондго жөнөтүлдү (DEMO)."
  }
};

const districts = ["Ленинский", "Октябрьский", "Первомайский", "Свердловский"];
const tasks = [
  { id: 1, title: "1) Дедушке надо лекарства с аптеки", note: "Примечание: фото рецепта с прописанными лекарствами.", allowed: ["volunteer"] },
  { id: 2, title: "2) Многодетному родителю надо купить продукты", note: "Примечание: список продуктов и адрес доставки.", allowed: ["volunteer", "bezvozdmezdnik"] },
  { id: 3, title: "3) Перенести человека с доп. потребностями в точку", note: "Примечание: аккуратное сопровождение до точки назначения.", allowed: ["volunteer"] }
];

let lang = localStorage.getItem(LANG_KEY) || "ru";
let map = null;
let taskMarkers = [];
let userMarker = null;
let helpNeedMarker = null;
let helpPickLatLng = null;
let helpMapClickBound = false;
let activeBlindMode = "all";
const taskPoints = tasks.map((task) => ({
  ...task,
  lat: BISHKEK.lat + (Math.random() - 0.5) * 0.08,
  lng: BISHKEK.lng + (Math.random() - 0.5) * 0.08
}));

function t(key) {
  return (translations[lang] && translations[lang][key]) || translations.ru[key] || key;
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key) el.textContent = t(key);
  });
  if (themeToggle) {
    themeToggle.textContent = document.body.classList.contains("dark-theme") ? t("themeLight") : t("themeDark");
  }
  if (langSelect) langSelect.value = lang;
  const nameInput = document.getElementById("personName");
  const fundInput = document.getElementById("fundName");
  const fundNameInput = document.getElementById("fundNameInput");
  const fundDirectionInput = document.getElementById("fundDirectionInput");
  const helpText = document.getElementById("helpText");
  const blindText = document.getElementById("blindText");
  const blindExtra = document.getElementById("blindExtraTask");
  if (nameInput) nameInput.placeholder = t("phName");
  if (fundInput) fundInput.placeholder = t("phFund");
  if (fundNameInput) fundNameInput.placeholder = t("phFundName");
  if (fundDirectionInput) fundDirectionInput.placeholder = t("phFundDirection");
  if (helpText) helpText.placeholder = t("phHelp");
  if (blindText) blindText.placeholder = t("phBlind");
  if (blindExtra) blindExtra.placeholder = t("phExtra");
  if (role === "need-help" && helpNeedMarker) {
    const popup = helpNeedMarker.getPopup();
    if (popup) popup.setContent(t("helpLocationSet"));
  }
}

function setTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? t("themeLight") : t("themeDark");
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem(THEME_KEY);
  const fallback = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  setTheme(savedTheme || fallback);
}

function initMap() {
  const mapEl = document.getElementById("map");
  if (!mapEl || typeof L === "undefined") return;
  map = L.map(mapEl).setView([BISHKEK.lat, BISHKEK.lng], 12);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "&copy; OpenStreetMap contributors"
  }).addTo(map);
}

function refreshTaskMarkers() {
  if (!map) return;
  taskMarkers.forEach((m) => m.remove());
  taskMarkers = [];
  taskPoints.forEach((task) => {
    const allowedText = task.allowed.includes("bezvozdmezdnik") ? "Волонтер и Безвоздмездник" : "Только волонтер";
    const marker = L.marker([task.lat, task.lng]).addTo(map).bindPopup(`${task.title}<br>${task.note}<br>${allowedText}`);
    taskMarkers.push(marker);
  });
}

function updateGoogleLink(lat, lng) {
  if (!openMapsLink) return;
  openMapsLink.href = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

function showHelpLocationStatus(prefix) {
  if (!locationStatus || role !== "need-help") return;
  if (helpPickLatLng) {
    const { lat, lng } = helpPickLatLng;
    const line = `${t("helpLocationSet")}: ${lat.toFixed(5)}, ${lng.toFixed(5)}`;
    showStatus(locationStatus, prefix ? `${prefix} ${line}` : line);
  } else {
    showStatus(locationStatus, t("mapClickHint"));
  }
}

function setHelpNeedMarker(lat, lng) {
  if (!map || role !== "need-help") return;
  const ll = L.latLng(lat, lng);
  helpPickLatLng = ll;
  if (helpNeedMarker) {
    helpNeedMarker.setLatLng(ll);
  } else {
    helpNeedMarker = L.marker(ll, { draggable: true }).addTo(map);
    helpNeedMarker.bindPopup(t("helpLocationSet"));
    helpNeedMarker.on("dragend", () => {
      const p = helpNeedMarker.getLatLng();
      helpPickLatLng = p;
      updateGoogleLink(p.lat, p.lng);
      showHelpLocationStatus();
    });
  }
  updateGoogleLink(lat, lng);
  showHelpLocationStatus();
}

function onHelpMapClick(e) {
  if (role !== "need-help") return;
  setHelpNeedMarker(e.latlng.lat, e.latlng.lng);
}

function setupInteractiveHelpLocation() {
  if (role !== "need-help" || !map || helpMapClickBound) return;
  helpMapClickBound = true;
  const mapEl = document.getElementById("map");
  if (mapEl) mapEl.classList.add("map-pick-mode");
  map.on("click", onHelpMapClick);
}

function showStatus(el, msg) {
  if (el) el.textContent = msg;
}

function isValidName(name) {
  return /^[А-Яа-яЁёҢңҮүӨөҚқҺһІіҖҗ]{1}[А-Яа-яЁёҢңҮүӨөҚқҺһІіҖҗ\s-]{0,15}$/.test(name);
}

function buildTasks() {
  if (!taskGrid) return;
  taskGrid.innerHTML = "";
  const canSee = role === "volunteer" || role === "bezvozdmezdnik";
  if (!canSee) return;

  taskPoints.forEach((task) => {
    const allowed = task.allowed.includes(role);
    const card = document.createElement("article");
    card.className = `task-card ${allowed ? "" : "disabled-task"}`;
    card.innerHTML = `
      <h4>${task.title}</h4>
      <p>${task.note}</p>
      <p><strong>${t("coordsLabel")}:</strong> ${task.lat.toFixed(4)}, ${task.lng.toFixed(4)}</p>
      <label><input type="checkbox" data-task-id="${task.id}" ${allowed ? "" : "disabled"} /> ${t("taskDoneLabel")}</label>
    `;
    taskGrid.appendChild(card);
  });
}

function unlockRoleSections() {
  if (taskSection) taskSection.classList.remove("hidden");
  if (mapSection) mapSection.classList.remove("hidden");
  const fundAppSection = document.getElementById("fundApplicationSection");
  if (fundAppSection && role === "bezvozdmezdnik") fundAppSection.classList.remove("hidden");
  buildTasks();
  if (!map) initMap();
  refreshTaskMarkers();
  updateGoogleLink(BISHKEK.lat, BISHKEK.lng);
  showStatus(locationStatus, t("geoDefault"));
}

function registerRole() {
  const nameInput = document.getElementById("personName");
  const districtSelect = document.getElementById("districtSelect");
  const name = nameInput ? nameInput.value.trim() : "";
  const district = districtSelect ? districtSelect.value : "";

  if (!isValidName(name)) {
    showStatus(formStatus, t("formErrName"));
    return;
  }
  if (!districts.includes(district)) {
    showStatus(formStatus, t("formErrDistrict"));
    return;
  }
  showStatus(formStatus, role === "volunteer" ? t("formOkVolunteer") : t("formOkBez"));
  unlockRoleSections();
}

function requestLocation() {
  if (!navigator.geolocation || !map) {
    showStatus(locationStatus, t("geoFail"));
    return;
  }
  navigator.geolocation.getCurrentPosition(
    ({ coords }) => {
      const { latitude, longitude } = coords;
      if (role === "need-help") {
        setHelpNeedMarker(latitude, longitude);
        map.setView([latitude, longitude], 13);
        showHelpLocationStatus(`${t("geoOk")} ·`);
        return;
      }
      if (userMarker) userMarker.remove();
      userMarker = L.circleMarker([latitude, longitude], { radius: 8 }).addTo(map).bindPopup("Вы здесь");
      map.setView([latitude, longitude], 13);
      updateGoogleLink(latitude, longitude);
      showStatus(locationStatus, t("geoOk"));
    },
    () => showStatus(locationStatus, t("geoFail")),
    { enableHighAccuracy: true, timeout: 10000 }
  );
}

function initBlindTabs() {
  const tabs = document.querySelectorAll("[data-blind-tab]");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      tabs.forEach((x) => x.classList.remove("active-tab"));
      tab.classList.add("active-tab");
      activeBlindMode = tab.dataset.blindTab || "all";
      if (blindBadge) {
        blindBadge.textContent = activeBlindMode === "all" ? t("blindModeAll") : t("blindModeVol");
      }
    });
  });
}

function initNeedHelp() {
  if (!map) initMap();
  if (role === "need-help") {
    setupInteractiveHelpLocation();
    refreshTaskMarkers();
    updateGoogleLink(BISHKEK.lat, BISHKEK.lng);
    showHelpLocationStatus();
  } else {
    refreshTaskMarkers();
    updateGoogleLink(BISHKEK.lat, BISHKEK.lng);
    showStatus(locationStatus, t("geoDefault"));
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const next = document.body.classList.contains("dark-theme") ? "light" : "dark";
    localStorage.setItem(THEME_KEY, next);
    setTheme(next);
  });
}

if (langSelect) {
  langSelect.addEventListener("change", () => {
    lang = langSelect.value;
    localStorage.setItem(LANG_KEY, lang);
    applyTranslations();
    if (locationStatus && map) {
      if (role === "need-help") showHelpLocationStatus();
      else showStatus(locationStatus, t("geoDefault"));
    }
    if (taskGrid && taskSection && !taskSection.classList.contains("hidden")) {
      buildTasks();
    }
  });
}

if (registerBtn) registerBtn.addEventListener("click", registerRole);
if (getLocationBtn) getLocationBtn.addEventListener("click", requestLocation);

if (taskGrid) {
  taskGrid.addEventListener("change", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLInputElement) || target.type !== "checkbox") return;
    if (target.checked) showStatus(formStatus, t("taskDone"));
  });
}

if (blindSendBtn) {
  blindSendBtn.addEventListener("click", () => {
    const text = document.getElementById("blindText")?.value.trim();
    if (!text) return;
    showStatus(blindStatus, t("blindSent"));
  });
}

function initAvatarUpload() {
  const input = document.getElementById("avatarInput");
  const preview = document.getElementById("avatarPreview");
  if (!input || !preview) return;
  input.addEventListener("change", () => {
    preview.innerHTML = "";
    const file = input.files && input.files[0];
    if (!file || !file.type.startsWith("image/")) {
      preview.classList.add("hidden");
      return;
    }
    const url = URL.createObjectURL(file);
    const img = document.createElement("img");
    img.src = url;
    img.alt = "";
    preview.appendChild(img);
    preview.classList.remove("hidden");
  });
}

function initOrgDocsList() {
  const input = document.getElementById("orgDocsInput");
  const list = document.getElementById("orgDocsList");
  if (!input || !list) return;
  input.addEventListener("change", () => {
    list.innerHTML = "";
    const { files } = input;
    if (!files || !files.length) return;
    Array.from(files).forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f.name;
      list.appendChild(li);
    });
  });
}

function registerFund() {
  const name = document.getElementById("fundNameInput")?.value.trim();
  const direction = document.getElementById("fundDirectionInput")?.value.trim();
  const files = document.getElementById("orgDocsInput")?.files;
  if (!name || !direction) {
    showStatus(fundStatus, t("fundErrFields"));
    return;
  }
  if (!files || files.length === 0) {
    showStatus(fundStatus, t("fundErrDocs"));
    return;
  }
  showStatus(fundStatus, t("fundOk"));
}

if (fundRegisterBtn) {
  fundRegisterBtn.addEventListener("click", registerFund);
}

if (createHelpBtn) {
  createHelpBtn.addEventListener("click", () => {
    const text = document.getElementById("helpText")?.value.trim();
    const category = document.getElementById("helpCategory")?.value;
    if (!text) {
      showStatus(formStatus, t("helpErrEmpty"));
      return;
    }
    if (role === "need-help" && category === "local" && !helpPickLatLng) {
      showStatus(formStatus, t("helpErrLocation"));
      return;
    }
    showStatus(formStatus, t("helpSent"));
  });
}

function initFundApplications() {
  const fundSection = document.getElementById("fundApplicationSection");
  const fundStatus = document.getElementById("fundApplicationStatus");
  if (!fundSection || role !== "bezvozdmezdnik") return;
  
  const applyButtons = document.querySelectorAll(".fund-apply-btn");
  applyButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const fundName = btn.dataset.fund;
      if (fundName && fundStatus) {
        fundStatus.textContent = `${t("fundApplicationSent")} Фонд: ${fundName}`;
      }
    });
  });
}

initTheme();
applyTranslations();
initBlindTabs();
initAvatarUpload();
initOrgDocsList();
initFundApplications();
if (role === "need-help" || role === "fund") initNeedHelp();
