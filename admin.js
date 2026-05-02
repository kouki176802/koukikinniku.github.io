let data = loadSiteData();
const stats = JSON.parse(localStorage.getItem("kintoreStats") || "{}");
const ADMIN_PASSCODE = "kintore-admin";

const $ = (selector) => document.querySelector(selector);
const adminLock = $("#adminLock");
const adminLogin = $("#adminLogin");
const adminPassword = $("#adminPassword");

function unlockAdmin() {
  sessionStorage.setItem("kintoreAdminUnlocked", "true");
  document.body.classList.remove("admin-locked");
  adminLock.classList.add("is-unlocked");
}

if (sessionStorage.getItem("kintoreAdminUnlocked") === "true") {
  unlockAdmin();
}

adminLogin.addEventListener("submit", (event) => {
  event.preventDefault();
  if (adminPassword.value === ADMIN_PASSCODE) {
    unlockAdmin();
    return;
  }
  alert("パスコードが違います。");
  adminPassword.select();
});

const fields = {
  totalVisits: $("#totalVisits"),
  lastVisit: $("#lastVisit"),
  exerciseStats: $("#exerciseStats"),
  bannerSelect: $("#bannerSelect"),
  bannerType: $("#bannerType"),
  bannerTitle: $("#bannerTitle"),
  bannerDescription: $("#bannerDescription"),
  bannerCta: $("#bannerCta"),
  bannerUrl: $("#bannerUrl"),
  exerciseSelect: $("#exerciseSelect"),
  exerciseName: $("#exerciseName"),
  exerciseCategory: $("#exerciseCategory"),
  exerciseMuscles: $("#exerciseMuscles"),
  exerciseLevel: $("#exerciseLevel"),
  exerciseSets: $("#exerciseSets"),
  exerciseImage: $("#exerciseImage"),
  exerciseLead: $("#exerciseLead"),
  exerciseSteps: $("#exerciseSteps"),
  exerciseNg: $("#exerciseNg"),
  exerciseAffiliateUrl: $("#exerciseAffiliateUrl"),
  jsonArea: $("#jsonArea")
};

function renderStats() {
  fields.totalVisits.textContent = stats.totalVisits || 0;
  fields.lastVisit.textContent = stats.lastVisit ? new Date(stats.lastVisit).toLocaleString("ja-JP") : "-";
  const views = stats.exerciseViews || {};
  fields.exerciseStats.innerHTML = data.exercises.map((exercise) => `
    <div>
      <span>${exercise.name}</span>
      <strong>${views[exercise.id] || 0}</strong>
    </div>
  `).join("");
}

function renderSelects() {
  fields.bannerSelect.innerHTML = data.banners.map((banner, index) => `<option value="${index}">${banner.title}</option>`).join("");
  fields.exerciseSelect.innerHTML = data.exercises.map((exercise, index) => `<option value="${index}">${exercise.name}</option>`).join("");
}

function loadBannerForm() {
  const banner = data.banners[Number(fields.bannerSelect.value)] || data.banners[0];
  fields.bannerType.value = banner.type || "";
  fields.bannerTitle.value = banner.title || "";
  fields.bannerDescription.value = banner.description || "";
  fields.bannerCta.value = banner.cta || "";
  fields.bannerUrl.value = banner.url || "";
}

function loadExerciseForm() {
  const exercise = data.exercises[Number(fields.exerciseSelect.value)] || data.exercises[0];
  fields.exerciseName.value = exercise.name || "";
  fields.exerciseCategory.value = exercise.category || "";
  fields.exerciseMuscles.value = exercise.muscles || "";
  fields.exerciseLevel.value = exercise.level || "";
  fields.exerciseSets.value = exercise.sets || "";
  fields.exerciseImage.value = exercise.image || "";
  fields.exerciseLead.value = exercise.lead || "";
  fields.exerciseSteps.value = (exercise.steps || []).join("\n");
  fields.exerciseNg.value = (exercise.ng || []).join("\n");
  fields.exerciseAffiliateUrl.value = exercise.affiliateUrl || "";
}

function saveBanner() {
  const index = Number(fields.bannerSelect.value);
  data.banners[index] = {
    ...data.banners[index],
    type: fields.bannerType.value,
    title: fields.bannerTitle.value,
    description: fields.bannerDescription.value,
    cta: fields.bannerCta.value,
    url: fields.bannerUrl.value
  };
  saveSiteData(data);
  renderSelects();
  fields.bannerSelect.value = String(index);
  loadBannerForm();
  alert("広告・アフィリエイト枠を保存しました。");
}

function saveExercise() {
  const index = Number(fields.exerciseSelect.value);
  data.exercises[index] = {
    ...data.exercises[index],
    name: fields.exerciseName.value,
    category: fields.exerciseCategory.value,
    muscles: fields.exerciseMuscles.value,
    level: fields.exerciseLevel.value,
    sets: fields.exerciseSets.value,
    image: fields.exerciseImage.value,
    lead: fields.exerciseLead.value,
    steps: fields.exerciseSteps.value.split("\n").map((line) => line.trim()).filter(Boolean),
    ng: fields.exerciseNg.value.split("\n").map((line) => line.trim()).filter(Boolean),
    affiliateUrl: fields.exerciseAffiliateUrl.value
  };
  saveSiteData(data);
  renderSelects();
  fields.exerciseSelect.value = String(index);
  loadExerciseForm();
  renderStats();
  alert("トレーニング解説を保存しました。");
}

$("#saveBanner").addEventListener("click", saveBanner);
$("#saveExercise").addEventListener("click", saveExercise);
fields.bannerSelect.addEventListener("change", loadBannerForm);
fields.exerciseSelect.addEventListener("change", loadExerciseForm);

$("#exportData").addEventListener("click", () => {
  fields.jsonArea.value = JSON.stringify(data, null, 2);
});

$("#importData").addEventListener("click", () => {
  try {
    data = JSON.parse(fields.jsonArea.value);
    saveSiteData(data);
    renderSelects();
    loadBannerForm();
    loadExerciseForm();
    renderStats();
    alert("JSONを読み込みました。");
  } catch {
    alert("JSONの形式を確認してください。");
  }
});

$("#resetData").addEventListener("click", () => {
  if (!confirm("編集内容とアクセス数を初期化しますか？")) return;
  localStorage.removeItem("kintoreSiteData");
  localStorage.removeItem("kintoreStats");
  location.reload();
});

renderStats();
renderSelects();
loadBannerForm();
loadExerciseForm();
