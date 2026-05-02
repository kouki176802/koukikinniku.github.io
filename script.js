const data = loadSiteData();
const stats = JSON.parse(localStorage.getItem("kintoreStats") || "{}");
stats.totalVisits = (stats.totalVisits || 0) + 1;
stats.lastVisit = new Date().toISOString();
stats.exerciseViews = stats.exerciseViews || {};
localStorage.setItem("kintoreStats", JSON.stringify(stats));

const bannerGrid = document.querySelector("#bannerGrid");
const exerciseGrid = document.querySelector("#exerciseGrid");
const filterButtons = document.querySelectorAll(".filter");
const exerciseSearch = document.querySelector("#exerciseSearch");
const resultCount = document.querySelector("#resultCount");
const emptyState = document.querySelector("#emptyState");
const publishedCount = document.querySelector("#publishedCount");
const adminAccess = document.querySelector("#adminAccess");
const adminGate = document.querySelector("#adminGate");
const adminGateForm = document.querySelector("#adminGateForm");
const adminGateClose = document.querySelector("#adminGateClose");
const adminGateCode = document.querySelector("#adminGateCode");
const adminGateError = document.querySelector("#adminGateError");
const placeholderImage = "assets/placeholder-exercise.svg";
const ADMIN_PASSCODE = "kintore-admin";

const detail = {
  category: document.querySelector("#detailCategory"),
  name: document.querySelector("#detailName"),
  lead: document.querySelector("#detailLead"),
  muscles: document.querySelector("#detailMuscles"),
  level: document.querySelector("#detailLevel"),
  sets: document.querySelector("#detailSets"),
  image: document.querySelector("#detailImage"),
  steps: document.querySelector("#stepsList"),
  ng: document.querySelector("#ngList"),
  affiliate: document.querySelector("#detailAffiliateLink")
};

let currentFilter = "all";
let currentId = data.exercises[0]?.id;
let currentSearch = "";

function fileNameFromPath(path) {
  return (path || "").split("/").pop();
}

function applyImageFallback(img) {
  if (!img) return;
  const fallback = () => {
    const fallbackSrc = img.dataset.fallbackSrc || fileNameFromPath(img.getAttribute("src"));
    if (!fallbackSrc || img.src.endsWith(`/${fallbackSrc}`)) return;
    img.src = fallbackSrc;
  };
  img.addEventListener("error", fallback);
  if (img.complete && img.naturalWidth === 0) fallback();
}

document.querySelectorAll("img").forEach(applyImageFallback);

function hasPublishedImage(exercise) {
  return (exercise.image || "").includes("assets/exercises-v2/");
}

function visibleExercises() {
  const query = currentSearch.trim().toLowerCase();
  return data.exercises.filter((exercise) => {
    const matchesFilter = currentFilter === "all" || exercise.category === currentFilter;
    const searchable = [exercise.name, exercise.category, exercise.muscles, exercise.level, exercise.lead].join(" ").toLowerCase();
    return matchesFilter && (!query || searchable.includes(query));
  });
}

function renderHeroStats() {
  publishedCount.textContent = String(data.exercises.length);
}

function renderBanners() {
  bannerGrid.innerHTML = data.banners.map((banner) => `
    <a class="banner-card ${banner.accent}" href="${banner.url || "#"}">
      <span>${banner.type}</span>
      <strong>${banner.title}</strong>
      <p>${banner.description}</p>
      <em>${banner.cta}</em>
    </a>
  `).join("");
}

function renderExercises() {
  const list = visibleExercises();
  resultCount.textContent = `${list.length}件表示 / 全${data.exercises.length}種目`;
  emptyState.classList.toggle("is-visible", list.length === 0);
  exerciseGrid.innerHTML = list.map((exercise) => `
    <button class="exercise-card ${exercise.id === currentId ? "is-active" : ""}" type="button" data-id="${exercise.id}">
      <img src="${exercise.image || placeholderImage}" alt="${exercise.name}の画像付き解説" loading="lazy" onerror="this.onerror=null; this.src='${fileNameFromPath(exercise.image) || placeholderImage}'">
      <div>
        <span>${exercise.category}${hasPublishedImage(exercise) ? " / 画像あり" : " / 画像準備中"}</span>
        <h3>${exercise.name}</h3>
        <p>${exercise.muscles}</p>
      </div>
    </button>
  `).join("");
}

function selectExercise(id, shouldScroll = true) {
  const exercise = data.exercises.find((item) => item.id === id) || data.exercises[0];
  if (!exercise) return;
  currentId = exercise.id;

  stats.exerciseViews[exercise.id] = (stats.exerciseViews[exercise.id] || 0) + 1;
  localStorage.setItem("kintoreStats", JSON.stringify(stats));

  detail.category.textContent = exercise.category;
  detail.name.textContent = exercise.name;
  detail.lead.textContent = exercise.lead;
  detail.muscles.textContent = exercise.muscles;
  detail.level.textContent = exercise.level;
  detail.sets.textContent = exercise.sets;
  detail.image.src = exercise.image || placeholderImage;
  detail.image.dataset.fallbackSrc = fileNameFromPath(exercise.image);
  detail.image.alt = `${exercise.name}の画像付き解説`;
  detail.image.onerror = () => {
    detail.image.onerror = null;
    detail.image.src = detail.image.dataset.fallbackSrc || placeholderImage;
  };
  detail.affiliate.href = exercise.affiliateUrl || "#banners";

  detail.steps.innerHTML = exercise.steps.map((step, index) => `<li><b>STEP ${String(index + 1).padStart(2, "0")}</b><span>${step}</span></li>`).join("");
  detail.ng.innerHTML = exercise.ng.map((item) => `<li>${item}</li>`).join("");

  renderExercises();
  if (shouldScroll) {
    document.querySelector("#detail").scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

exerciseGrid.addEventListener("click", (event) => {
  const card = event.target.closest("[data-id]");
  if (!card) return;
  selectExercise(card.dataset.id);
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderExercises();
  });
});

exerciseSearch.addEventListener("input", () => {
  currentSearch = exerciseSearch.value;
  renderExercises();
});

adminAccess.addEventListener("click", () => {
  adminGate.hidden = false;
  adminGateError.textContent = "";
  adminGateCode.value = "";
  adminGateCode.focus();
});

adminGateClose.addEventListener("click", () => {
  adminGate.hidden = true;
});

adminGate.addEventListener("click", (event) => {
  if (event.target === adminGate) adminGate.hidden = true;
});

adminGateForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminGateCode.value !== ADMIN_PASSCODE) {
    adminGateError.textContent = "error";
    adminGateCode.select();
    return;
  }
  sessionStorage.setItem("kintoreAdminUnlocked", "true");
  window.location.assign("admin.html");
});

renderBanners();
renderHeroStats();
renderExercises();
selectExercise(currentId, false);
