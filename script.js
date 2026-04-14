const REGIONS = {
  moscow: {
    cityKey: "moscow",
    locale: "ru-RU",
    language: "ru",
    timeZone: "Europe/Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
    feeds: [
      "https://rssexport.rbc.ru/rbcnews/news/30/full.rss"
    ],
    sourceName: "РБК"
  },
  new_york: {
    cityKey: "newYork",
    locale: "en-US",
    language: "en",
    timeZone: "America/New_York",
    latitude: 40.7128,
    longitude: -74.006,
    feeds: [
      "https://gothamist.com/feed"
    ],
    sourceName: "Gothamist"
  },
  london: {
    cityKey: "london",
    locale: "en-GB",
    language: "en",
    timeZone: "Europe/London",
    latitude: 51.5072,
    longitude: -0.1276,
    feeds: [
      "https://www.mylondon.news/?service=rss",
      "https://www.standard.co.uk/rss"
    ],
    sourceName: "MyLondon"
  },
  tokyo: {
    cityKey: "tokyo",
    locale: "ja-JP",
    language: "ja",
    timeZone: "Asia/Tokyo",
    latitude: 35.6764,
    longitude: 139.65,
    feeds: [
      "https://www.japantimes.co.jp/feed/"
    ],
    sourceName: "The Japan Times"
  },
  paris: {
    cityKey: "paris",
    locale: "fr-FR",
    language: "fr",
    timeZone: "Europe/Paris",
    latitude: 48.8566,
    longitude: 2.3522,
    feeds: [
      "https://feeds.leparisien.fr/leparisien/rss/paris-75"
    ],
    sourceName: "Le Parisien"
  }
};

const UI_COPY = {
  ru: {
    cities: {
      moscow: "Москва",
      newYork: "Нью-Йорк",
      london: "Лондон",
      tokyo: "Токио",
      paris: "Париж"
    },
    regionAria: "Выбор региона",
    addLinkTile: "Добавить ссылку",
    linkSheetKicker: "Быстрая ссылка",
    addLinkTitle: "Новая ссылка",
    editLinkTitle: "Редактировать ссылку",
    linkTitlePlaceholder: "Название",
    linkUrlPlaceholder: "example.com или https://example.com",
    add: "Добавить",
    save: "Сохранить",
    cancel: "Отмена",
    closeSheet: "Закрыть",
    edit: "Редактировать",
    delete: "Удалить",
    newsKicker: "Последние новости",
    newsFallback: "Новости не загрузились. Перезагрузите расширение на странице chrome://extensions/.",
    untitled: "Без названия",
    defaultSource: "Google News",
    weatherClear: "Ясно",
    weatherMainlyClear: "Малооблачно",
    weatherPartlyCloudy: "Переменная облачность",
    weatherCloudy: "Облачно",
    weatherFog: "Туман",
    weatherDrizzle: "Морось",
    weatherRain: "Дождь",
    weatherSnow: "Снег",
    weatherShowers: "Ливень",
    weatherThunder: "Гроза",
    greetingNight: "Спокойной ночи!",
    greetingMorning: "Доброе утро!",
    greetingDay: "Добрый день!",
    greetingEvening: "Добрый вечер!",
    themeToDark: "Переключить на тёмную тему",
    themeToLight: "Переключить на светлую тему"
  },
  en: {
    cities: {
      moscow: "Moscow",
      newYork: "New York",
      london: "London",
      tokyo: "Tokyo",
      paris: "Paris"
    },
    regionAria: "Choose region",
    addLinkTile: "Add link",
    linkSheetKicker: "Quick link",
    addLinkTitle: "New link",
    editLinkTitle: "Edit link",
    linkTitlePlaceholder: "Title",
    linkUrlPlaceholder: "example.com or https://example.com",
    add: "Add",
    save: "Save",
    cancel: "Cancel",
    closeSheet: "Close",
    edit: "Edit",
    delete: "Delete",
    newsKicker: "Latest news",
    newsFallback: "News did not load. Reload the extension on chrome://extensions/.",
    untitled: "Untitled",
    defaultSource: "Google News",
    weatherClear: "Clear",
    weatherMainlyClear: "Mostly clear",
    weatherPartlyCloudy: "Partly cloudy",
    weatherCloudy: "Cloudy",
    weatherFog: "Fog",
    weatherDrizzle: "Drizzle",
    weatherRain: "Rain",
    weatherSnow: "Snow",
    weatherShowers: "Showers",
    weatherThunder: "Thunderstorm",
    greetingNight: "Good night!",
    greetingMorning: "Good morning!",
    greetingDay: "Good afternoon!",
    greetingEvening: "Good evening!",
    themeToDark: "Switch to dark theme",
    themeToLight: "Switch to light theme"
  },
  ja: {
    cities: {
      moscow: "モスクワ",
      newYork: "ニューヨーク",
      london: "ロンドン",
      tokyo: "東京",
      paris: "パリ"
    },
    regionAria: "地域を選択",
    addLinkTile: "リンクを追加",
    linkSheetKicker: "クイックリンク",
    addLinkTitle: "新しいリンク",
    editLinkTitle: "リンクを編集",
    linkTitlePlaceholder: "タイトル",
    linkUrlPlaceholder: "example.com または https://example.com",
    add: "追加",
    save: "保存",
    cancel: "キャンセル",
    closeSheet: "閉じる",
    edit: "編集",
    delete: "削除",
    newsKicker: "最新ニュース",
    newsFallback: "ニュースを読み込めませんでした。chrome://extensions/ で拡張機能を再読み込みしてください。",
    untitled: "無題",
    defaultSource: "Google News",
    weatherClear: "快晴",
    weatherMainlyClear: "ほぼ晴れ",
    weatherPartlyCloudy: "晴れ時々くもり",
    weatherCloudy: "くもり",
    weatherFog: "霧",
    weatherDrizzle: "霧雨",
    weatherRain: "雨",
    weatherSnow: "雪",
    weatherShowers: "にわか雨",
    weatherThunder: "雷雨",
    greetingNight: "おやすみなさい!",
    greetingMorning: "おはようございます!",
    greetingDay: "こんにちは!",
    greetingEvening: "こんばんは!",
    themeToDark: "ダークテーマに切り替え",
    themeToLight: "ライトテーマに切り替え"
  },
  fr: {
    cities: {
      moscow: "Moscou",
      newYork: "New York",
      london: "Londres",
      tokyo: "Tokyo",
      paris: "Paris"
    },
    regionAria: "Choisir une region",
    addLinkTile: "Ajouter un lien",
    linkSheetKicker: "Lien rapide",
    addLinkTitle: "Nouveau lien",
    editLinkTitle: "Modifier le lien",
    linkTitlePlaceholder: "Titre",
    linkUrlPlaceholder: "example.com ou https://example.com",
    add: "Ajouter",
    save: "Enregistrer",
    cancel: "Annuler",
    closeSheet: "Fermer",
    edit: "Modifier",
    delete: "Supprimer",
    newsKicker: "Dernieres actualites",
    newsFallback: "Les actualites ne se sont pas chargees. Rechargez l'extension dans chrome://extensions/.",
    untitled: "Sans titre",
    defaultSource: "Google News",
    weatherClear: "Clair",
    weatherMainlyClear: "Plutot degage",
    weatherPartlyCloudy: "Partiellement nuageux",
    weatherCloudy: "Nuageux",
    weatherFog: "Brouillard",
    weatherDrizzle: "Bruine",
    weatherRain: "Pluie",
    weatherSnow: "Neige",
    weatherShowers: "Averses",
    weatherThunder: "Orage",
    greetingNight: "Bonne nuit!",
    greetingMorning: "Bonjour!",
    greetingDay: "Bon apres-midi!",
    greetingEvening: "Bonsoir!",
    themeToDark: "Passer au theme sombre",
    themeToLight: "Passer au theme clair"
  }
};

const storageKeys = {
  region: "aurora-region",
  links: "aurora-links",
  theme: "aurora-theme"
};

const body = document.body;
const themeToggle = document.querySelector("#themeToggle");
const themeWave = document.querySelector("#themeWave");
const clock = document.querySelector("#clock");
const dateLabel = document.querySelector("#dateLabel");
const weatherLabel = document.querySelector("#weatherLabel");
const greetingLabel = document.querySelector("#greetingLabel");
const regionSelect = document.querySelector("#regionSelect");
const linksList = document.querySelector("#linksList");
const linkSheet = document.querySelector("#linkSheet");
const linkSheetBackdrop = document.querySelector("#linkSheetBackdrop");
const closeLinkSheetButton = document.querySelector("#closeLinkSheet");
const linkSheetKicker = document.querySelector("#linkSheetKicker");
const linkSheetTitle = document.querySelector("#linkSheetTitle");
const linkForm = document.querySelector("#linkForm");
const linkTitle = document.querySelector("#linkTitle");
const linkUrl = document.querySelector("#linkUrl");
const saveLinkButton = document.querySelector("#saveLinkButton");
const cancelEditButton = document.querySelector("#cancelEditButton");
const newsKicker = document.querySelector("#newsKicker");
const newsList = document.querySelector("#newsList");
const newsItemTemplate = document.querySelector("#newsItemTemplate");
const linkItemTemplate = document.querySelector("#linkItemTemplate");

let activeRegionKey = localStorage.getItem(storageKeys.region) || "moscow";
let customLinks = loadCustomLinks();
let editingLinkId = null;
let activeTheme = localStorage.getItem(storageKeys.theme) || "light";
let themeIsAnimating = false;

if (!REGIONS[activeRegionKey]) {
  activeRegionKey = "moscow";
}

if (!["light", "dark"].includes(activeTheme)) {
  activeTheme = "light";
}

function getActiveRegion() {
  return REGIONS[activeRegionKey];
}

function getCopy() {
  return UI_COPY[getActiveRegion().language] || UI_COPY.en;
}

function getRegionLabel(region) {
  return getCopy().cities[region.cityKey] || region.cityKey;
}

function getSheetTitle() {
  return editingLinkId ? getCopy().editLinkTitle : getCopy().addLinkTitle;
}

function formatLinkUrl(value) {
  try {
    return new URL(value).host.replace(/^www\./, "");
  } catch {
    return value.replace(/^https?:\/\//, "");
  }
}

function getDefaultSourceLabel() {
  return getActiveRegion().sourceName || getCopy().defaultSource;
}

function updateRegionOptions() {
  regionSelect.innerHTML = "";

  Object.entries(REGIONS).forEach(([key, region]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = getRegionLabel(region);
    option.selected = key === activeRegionKey;
    regionSelect.append(option);
  });
}

function applyTranslations() {
  const copy = getCopy();

  document.documentElement.lang = getActiveRegion().language;
  regionSelect.setAttribute("aria-label", copy.regionAria);
  linkSheetKicker.textContent = copy.linkSheetKicker;
  linkSheetTitle.textContent = getSheetTitle();
  linkTitle.placeholder = copy.linkTitlePlaceholder;
  linkUrl.placeholder = copy.linkUrlPlaceholder;
  saveLinkButton.textContent = editingLinkId ? copy.save : copy.add;
  cancelEditButton.textContent = copy.cancel;
  closeLinkSheetButton.setAttribute("aria-label", copy.closeSheet);
  newsKicker.textContent = copy.newsKicker;
  updateRegionOptions();
}

function syncThemeToggle() {
  const isDark = activeTheme === "dark";
  const copy = getCopy();

  body.dataset.theme = activeTheme;
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute("aria-label", isDark ? copy.themeToLight : copy.themeToDark);
}

function applyTheme(theme) {
  activeTheme = theme;
  localStorage.setItem(storageKeys.theme, activeTheme);
  syncThemeToggle();
}

function animateThemeChange(nextTheme) {
  if (themeIsAnimating) {
    return;
  }

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduceMotion) {
    applyTheme(nextTheme);
    return;
  }

  themeIsAnimating = true;

  const rect = themeToggle.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;
  const radius = Math.hypot(
    Math.max(centerX, window.innerWidth - centerX),
    Math.max(centerY, window.innerHeight - centerY)
  );

  body.classList.add("is-theme-animating");

  const animation = themeWave.animate(
    [
      { clipPath: `circle(0px at ${centerX}px ${centerY}px)` },
      { clipPath: `circle(${radius}px at ${centerX}px ${centerY}px)` }
    ],
    {
      duration: 620,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      fill: "forwards"
    }
  );

  animation.finished
    .catch(() => {})
    .finally(() => {
      applyTheme(nextTheme);
      window.requestAnimationFrame(() => {
        themeWave.getAnimations().forEach((item) => {
          item.cancel();
        });
        body.classList.remove("is-theme-animating");
        themeIsAnimating = false;
      });
    });
}

function updateClock() {
  const now = new Date();
  const region = getActiveRegion();
  const copy = getCopy();
  const hour = Number(
    new Intl.DateTimeFormat("en-US", {
      hour: "numeric",
      hour12: false,
      timeZone: region.timeZone
    }).format(now)
  );

  clock.textContent = new Intl.DateTimeFormat(region.locale, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: region.timeZone,
    hour12: false
  }).format(now);

  dateLabel.textContent = new Intl.DateTimeFormat(region.locale, {
    weekday: "long",
    day: "numeric",
    month: "long",
    timeZone: region.timeZone
  }).format(now);

  if (hour < 6) {
    greetingLabel.textContent = copy.greetingNight;
  } else if (hour < 12) {
    greetingLabel.textContent = copy.greetingMorning;
  } else if (hour < 18) {
    greetingLabel.textContent = copy.greetingDay;
  } else {
    greetingLabel.textContent = copy.greetingEvening;
  }
}

function buildFeedUrl() {
  return getActiveRegion().feeds || [];
}

function formatRelativeDate(rawDate) {
  if (!rawDate) {
    return "";
  }

  const date = new Date(rawDate);
  if (Number.isNaN(date.getTime())) {
    return "";
  }

  const region = getActiveRegion();
  return new Intl.DateTimeFormat(region.locale, {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: region.timeZone,
    hour12: false
  }).format(date);
}

function parseFeed(xmlText) {
  const copy = getCopy();
  const xml = new DOMParser().parseFromString(xmlText, "application/xml");
  const items = Array.from(xml.querySelectorAll("item")).slice(0, 5);

  return items.map((item) => ({
    title: item.querySelector("title")?.textContent?.trim() || copy.untitled,
    link: item.querySelector("link")?.textContent?.trim() || "#",
    source: item.querySelector("source")?.textContent?.trim() || getDefaultSourceLabel(),
    pubDate: item.querySelector("pubDate")?.textContent?.trim() || ""
  }));
}

function weatherCodeToLabel(code) {
  const copy = getCopy();

  if (code === 0) {
    return copy.weatherClear;
  }

  if ([1].includes(code)) {
    return copy.weatherMainlyClear;
  }

  if ([2].includes(code)) {
    return copy.weatherPartlyCloudy;
  }

  if ([3].includes(code)) {
    return copy.weatherCloudy;
  }

  if ([45, 48].includes(code)) {
    return copy.weatherFog;
  }

  if ([51, 53, 55, 56, 57].includes(code)) {
    return copy.weatherDrizzle;
  }

  if ([61, 63, 65, 66, 67, 80, 81, 82].includes(code)) {
    return copy.weatherRain;
  }

  if ([71, 73, 75, 77, 85, 86].includes(code)) {
    return copy.weatherSnow;
  }

  if ([95, 96, 99].includes(code)) {
    return copy.weatherThunder;
  }

  return copy.weatherShowers;
}

async function loadWeather() {
  const region = getActiveRegion();
  const params = new URLSearchParams({
    latitude: String(region.latitude),
    longitude: String(region.longitude),
    current: "temperature_2m,weather_code",
    timezone: region.timeZone
  });

  try {
    const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params.toString()}`, {
      method: "GET"
    });

    if (!response.ok) {
      throw new Error(`Weather request failed with status ${response.status}`);
    }

    const payload = await response.json();
    const current = payload.current;

    if (!current) {
      weatherLabel.textContent = "";
      return;
    }

    const temperature = Math.round(current.temperature_2m);
    const label = weatherCodeToLabel(current.weather_code);
    weatherLabel.textContent = `${temperature}°C, ${label}`;
  } catch (error) {
    weatherLabel.textContent = "";
    console.error("Failed to load weather", error);
  }
}

function loadCustomLinks() {
  try {
    const parsed = JSON.parse(localStorage.getItem(storageKeys.links) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveCustomLinks() {
  localStorage.setItem(storageKeys.links, JSON.stringify(customLinks));
}

function normalizeUrl(rawValue) {
  return /^[a-z]+:\/\//i.test(rawValue) ? rawValue : `https://${rawValue}`;
}

function createLinkId() {
  return `link-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`;
}

function openLinkSheet(mode, linkId = null) {
  if (mode === "edit") {
    const link = customLinks.find((item) => item.id === linkId);
    if (!link) {
      return;
    }

    editingLinkId = linkId;
    linkTitle.value = link.title;
    linkUrl.value = link.url;
  } else {
    editingLinkId = null;
    linkForm.reset();
  }

  applyTranslations();
  body.classList.add("is-sheet-open");
  linkSheet.hidden = false;
  linkSheetBackdrop.hidden = false;
  linkSheet.setAttribute("aria-hidden", "false");
  window.requestAnimationFrame(() => {
    linkTitle.focus();
  });
}

function closeLinkSheet() {
  editingLinkId = null;
  linkForm.reset();
  body.classList.remove("is-sheet-open");
  linkSheet.hidden = true;
  linkSheetBackdrop.hidden = true;
  linkSheet.setAttribute("aria-hidden", "true");
  applyTranslations();
}

function renderLinks() {
  linksList.innerHTML = "";
  const copy = getCopy();

  customLinks.forEach((link) => {
    const fragment = linkItemTemplate.content.cloneNode(true);
    const anchor = fragment.querySelector(".link-card-main");
    const title = fragment.querySelector(".link-card-title");
    const url = fragment.querySelector(".link-card-url");
    const editButton = fragment.querySelector('[data-action="edit"]');
    const deleteButton = fragment.querySelector('[data-action="delete"]');

    anchor.href = link.url;
    title.textContent = link.title;
    url.textContent = formatLinkUrl(link.url);
    editButton.textContent = copy.edit;
    deleteButton.textContent = copy.delete;

    editButton.addEventListener("click", () => {
      openLinkSheet("edit", link.id);
    });

    deleteButton.addEventListener("click", () => {
      customLinks = customLinks.filter((item) => item.id !== link.id);
      saveCustomLinks();
      renderLinks();

      if (editingLinkId === link.id) {
        closeLinkSheet();
      }
    });

    linksList.append(fragment);
  });

  const addCard = document.createElement("button");
  addCard.type = "button";
  addCard.className = "add-link-card";
  addCard.innerHTML = `
    <span class="add-link-mark" aria-hidden="true">+</span>
    <span class="add-link-label">${copy.addLinkTile}</span>
  `;
  addCard.addEventListener("click", () => {
    openLinkSheet("add");
  });

  linksList.append(addCard);
}

function renderNews(items) {
  newsList.innerHTML = "";

  if (!items.length) {
    const emptyCard = document.createElement("article");
    emptyCard.className = "news-item";
    emptyCard.textContent = getCopy().newsFallback;
    newsList.append(emptyCard);
    return;
  }

  items.forEach((item) => {
    const fragment = newsItemTemplate.content.cloneNode(true);
    const link = fragment.querySelector(".news-link");
    const source = fragment.querySelector(".news-source");
    const time = fragment.querySelector(".news-time");

    link.href = item.link;
    link.textContent = item.title;
    source.textContent = item.source;
    time.textContent = formatRelativeDate(item.pubDate);

    if (item.pubDate) {
      time.dateTime = new Date(item.pubDate).toISOString();
    }

    newsList.append(fragment);
  });
}

async function loadNews() {
  const feedUrls = buildFeedUrl();

  for (const feedUrl of feedUrls) {
    try {
      const response = await fetch(feedUrl, {
        method: "GET"
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const xmlText = await response.text();
      const items = parseFeed(xmlText);
      if (items.length) {
        renderNews(items);
        return;
      }
    } catch (error) {
      console.error("Failed to load news feed", feedUrl, error);
    }
  }

  renderNews([]);
}

regionSelect.addEventListener("change", () => {
  activeRegionKey = regionSelect.value;
  localStorage.setItem(storageKeys.region, activeRegionKey);
  applyTranslations();
  syncThemeToggle();
  updateClock();
  loadWeather();
  renderLinks();
  loadNews();
});

linkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = linkTitle.value.trim();
  const rawUrl = linkUrl.value.trim();
  if (!title || !rawUrl) {
    return;
  }

  const normalizedUrl = normalizeUrl(rawUrl);
  const nextLink = {
    id: editingLinkId || createLinkId(),
    title,
    url: normalizedUrl
  };

  if (editingLinkId) {
    customLinks = customLinks.map((item) => (item.id === editingLinkId ? nextLink : item));
  } else {
    customLinks.push(nextLink);
  }

  saveCustomLinks();
  renderLinks();
  closeLinkSheet();
});

cancelEditButton.addEventListener("click", () => {
  closeLinkSheet();
});

closeLinkSheetButton.addEventListener("click", () => {
  closeLinkSheet();
});

linkSheetBackdrop.addEventListener("click", () => {
  closeLinkSheet();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !linkSheet.hidden) {
    closeLinkSheet();
  }
});

themeToggle.addEventListener("click", () => {
  animateThemeChange(activeTheme === "dark" ? "light" : "dark");
});

applyTranslations();
syncThemeToggle();
updateClock();
loadWeather();
renderLinks();
loadNews();
window.setInterval(updateClock, 1000);
