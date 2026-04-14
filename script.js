const DEFAULT_LINKS = [
  { title: "Gmail", url: "https://mail.google.com" },
  { title: "GitHub", url: "https://github.com" },
  { title: "YouTube", url: "https://youtube.com" },
  { title: "Calendar", url: "https://calendar.google.com" }
];

const SEARCH_ENGINES = {
  google: "https://www.google.com/search?q=",
  duck: "https://duckduckgo.com/?q=",
  youtube: "https://www.youtube.com/results?search_query=",
  github: "https://github.com/search?q="
};

const storageKeys = {
  engine: "aurora-engine",
  note: "aurora-note",
  links: "aurora-links"
};

const clock = document.querySelector("#clock");
const dateLabel = document.querySelector("#dateLabel");
const greeting = document.querySelector("#greeting");
const weekdayLabel = document.querySelector("#weekdayLabel");
const searchForm = document.querySelector("#searchForm");
const searchInput = document.querySelector("#searchInput");
const engineRow = document.querySelector("#engineRow");
const linkForm = document.querySelector("#linkForm");
const linkTitle = document.querySelector("#linkTitle");
const linkUrl = document.querySelector("#linkUrl");
const linksGrid = document.querySelector("#linksGrid");
const focusNote = document.querySelector("#focusNote");
const linkCardTemplate = document.querySelector("#linkCardTemplate");

let activeEngine = localStorage.getItem(storageKeys.engine) || "google";
let customLinks = loadCustomLinks();

function updateClock() {
  const now = new Date();

  clock.textContent = new Intl.DateTimeFormat("ru-RU", {
    hour: "2-digit",
    minute: "2-digit"
  }).format(now);

  dateLabel.textContent = new Intl.DateTimeFormat("ru-RU", {
    weekday: "long",
    day: "numeric",
    month: "long"
  }).format(now);

  weekdayLabel.textContent = new Intl.DateTimeFormat("ru-RU", {
    weekday: "long"
  }).format(now);

  const hour = now.getHours();
  if (hour < 6) {
    greeting.textContent = "Тихий ночной режим";
  } else if (hour < 12) {
    greeting.textContent = "Доброе утро";
  } else if (hour < 18) {
    greeting.textContent = "Спокойный рабочий ритм";
  } else {
    greeting.textContent = "Добрый вечер";
  }
}

function syncEngineChips() {
  engineRow.querySelectorAll(".engine-chip").forEach((chip) => {
    chip.classList.toggle("is-active", chip.dataset.engine === activeEngine);
  });
}

function looksLikeUrl(value) {
  return /^[a-z]+:\/\//i.test(value) || /^[\w-]+\.[\w.-]+/.test(value);
}

function normalizeUrl(value) {
  return /^[a-z]+:\/\//i.test(value) ? value : `https://${value}`;
}

function runSearch(rawValue) {
  const value = rawValue.trim();
  if (!value) {
    return;
  }

  if (looksLikeUrl(value)) {
    window.location.href = normalizeUrl(value);
    return;
  }

  const searchBase = SEARCH_ENGINES[activeEngine] || SEARCH_ENGINES.google;
  window.location.href = `${searchBase}${encodeURIComponent(value)}`;
}

function loadCustomLinks() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKeys.links) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveCustomLinks() {
  localStorage.setItem(storageKeys.links, JSON.stringify(customLinks));
}

function createLinkCard(link, isRemovable, index) {
  const fragment = linkCardTemplate.content.cloneNode(true);
  const card = fragment.querySelector(".link-card");
  const anchor = fragment.querySelector(".link-anchor");
  const removeButton = fragment.querySelector(".remove-link");

  anchor.href = link.url;
  anchor.innerHTML = `
    <span class="link-title">${escapeHtml(link.title)}</span>
    <span class="link-url">${escapeHtml(link.url.replace(/^https?:\/\//, ""))}</span>
  `;

  if (!isRemovable) {
    removeButton.hidden = true;
  } else {
    removeButton.addEventListener("click", () => {
      customLinks.splice(index, 1);
      saveCustomLinks();
      renderLinks();
    });
  }

  return card;
}

function renderLinks() {
  linksGrid.innerHTML = "";

  DEFAULT_LINKS.forEach((link) => {
    linksGrid.append(createLinkCard(link, false, -1));
  });

  customLinks.forEach((link, index) => {
    linksGrid.append(createLinkCard(link, true, index));
  });
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

searchForm.addEventListener("submit", (event) => {
  event.preventDefault();
  runSearch(searchInput.value);
});

engineRow.addEventListener("click", (event) => {
  const chip = event.target.closest(".engine-chip");
  if (!chip) {
    return;
  }

  activeEngine = chip.dataset.engine;
  localStorage.setItem(storageKeys.engine, activeEngine);
  syncEngineChips();
});

linkForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = linkTitle.value.trim();
  const url = normalizeUrl(linkUrl.value.trim());

  if (!title || !linkUrl.value.trim()) {
    return;
  }

  customLinks.unshift({ title, url });
  saveCustomLinks();
  renderLinks();
  linkForm.reset();
});

focusNote.value = localStorage.getItem(storageKeys.note) || "";
focusNote.addEventListener("input", () => {
  localStorage.setItem(storageKeys.note, focusNote.value);
});

updateClock();
syncEngineChips();
renderLinks();
searchInput.focus();
window.setInterval(updateClock, 1000);
