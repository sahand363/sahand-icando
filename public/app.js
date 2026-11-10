const STORAGE_KEY = "sahand_icando_state_v1";

const i18n = {
  en: {
    workspace: "SYSTEM",
    navToday: "Today",
    navVision: "Vision",
    navFocus: "Focus",
    navStats: "Statistics",
    navMore: "More",
    motto: "One day at a time.",
    mainMission: "Main Mission",
    missionHint: "The one result that makes today valuable.",
    startFocusBtn: "Start Focus Session →",
    dailyOverview: "DAILY OVERVIEW",
    focusedToday: "Focused Today:",
    dailyTasks: "Daily Tasks",
    dailySchedule: "Daily Schedule",
    addGoalTitle: "Connect Long-Term Vision to Milestones"
  },
  fa: {
    workspace: "فضای کاری",
    navToday: "امروز",
    navVision: "چشم‌انداز",
    navFocus: "تمرکز",
    navStats: "آمار",
    navMore: "بیشتر",
    motto: "هر روز، یک قدم.",
    mainMission: "مأموریت اصلی امروز",
    missionHint: "یک خروجی مهم که امروزت را ارزشمند می‌کند.",
    startFocusBtn: "شروع جلسه‌ی تمرکز ←",
    dailyOverview: "وضعیت امروز",
    focusedToday: "تمرکز امروز:",
    dailyTasks: "کارهای روزانه",
    dailySchedule: "برنامه‌ی زمانی",
    addGoalTitle: "اتصال چشم‌انداز بلندمدت به قدم‌های اجرایی"
  }
};

const defaultState = {
  lang: "en",
  theme: "noir",
  recoveryMode: false,
  streakDays: 5,
  mission: { title: "Complete core architecture & test APK on phone", progress: 50 },
  tasks: [
    { id: 1, title: "Deep work on main project", priority: "Main", completed: true },
    { id: 2, title: "Music production & arrangement practice", priority: "Secondary", completed: false },
    { id: 3, title: "Evening review & digital shutdown", priority: "Optional", completed: false }
  ],
  goals: [
    { id: 1, title: "Release Original Music EP", horizon: "Quarterly", progress: 60 },
    { id: 2, title: "Build Sustainable Daily Consistency", horizon: "Monthly", progress: 75 },
    { id: 3, title: "Launch Sahand I CanDo Personal OS", horizon: "Yearly", progress: 40 }
  ],
  focusSessions: [
    { id: 1, taskTitle: "System Architecture", duration: 45, time: "10:30" }
  ],
  sleep: { duration: "7h 45m", score: 8.4 }
};

let state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...defaultState, ...JSON.parse(raw) } : defaultState;
  } catch (_) {
    return defaultState;
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
  renderAll();
}

// Navigation
function setPage(name) {
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `page-${name}`));
  document.querySelectorAll("[data-page]").forEach(b => b.classList.toggle("active", b.dataset.page === name));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Render UI
function renderAll() {
  // Theme & Lang
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";
  document.getElementById("lang-select").value = state.lang;
  document.getElementById("theme-select").value = state.theme;

  const dict = i18n[state.lang] || i18n.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const k = el.dataset.i18n;
    if (dict[k]) el.textContent = dict[k];
  });

  // Mission
  document.getElementById("mission-title").textContent = state.mission.title;
  document.getElementById("mission-bar").style.width = `${state.mission.progress}%`;
  document.getElementById("recovery-indicator").style.display = state.recoveryMode ? "inline-flex" : "none";

  // Tasks
  const tasksEl = document.getElementById("tasks-container");
  tasksEl.innerHTML = "";
  state.tasks.forEach(t => {
    const row = document.createElement("div");
    row.className = "task-row";
    row.innerHTML = `
      <div class="check-box ${t.completed ? "done" : ""}" data-id="${t.id}">${t.completed ? "✓" : ""}</div>
      <div style="flex:1;">
        <div style="font-size:13px; font-weight:600; ${t.completed ? "text-decoration:line-through; color:var(--muted);" : ""}">${t.title}</div>
        <small style="font-size:10px; color:var(--muted);">${t.priority} Priority</small>
      </div>
      <button class="btn-del" data-del="${t.id}" style="color:var(--muted); font-size:12px;">✕</button>
    `;
    tasksEl.appendChild(row);
  });

  // Daily Overview
  const doneCount = state.tasks.filter(t => t.completed).length;
  const totalCount = state.tasks.length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : 0;
  document.getElementById("completion-rate").textContent = `${pct}%`;
  document.getElementById("tasks-summary-text").textContent = `${doneCount} of ${totalCount} tasks completed`;
  document.getElementById("daily-bar").style.width = `${pct}%`;

  const totalFocus = state.focusSessions.reduce((acc, s) => acc + s.duration, 0);
  document.getElementById("today-focus-mins").textContent = `${totalFocus} mins`;
  document.getElementById("stat-total-focus").textContent = `${totalFocus} mins`;
  document.getElementById("stat-sessions-count").textContent = state.focusSessions.length;
  document.getElementById("stat-sleep-last").textContent = `${state.sleep.score} / 10 (${state.sleep.duration})`;

  // Goals
  const goalsEl = document.getElementById("goals-container");
  goalsEl.innerHTML = "";
  state.goals.forEach(g => {
    const card = document.createElement("article");
    card.className = "card";
    card.innerHTML = `
      <span class="badge badge-accent">${g.horizon}</span>
      <h4 style="margin:12px 0 8px;">${g.title}</h4>
      <div style="display:flex; justify-content:space-between; font-size:11px; color:var(--muted);">
        <span>Milestone Progress</span><strong>${g.progress}%</strong>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${g.progress}%"></div></div>
      <button class="btn btn-outline goal-bump" data-gid="${g.id}" style="margin-top:8px; padding:4px 10px; font-size:10px;">+10% Milestone</button>
    `;
    goalsEl.appendChild(card);
  });

  // Focus History
  const fhEl = document.getElementById("focus-history-container");
  fhEl.innerHTML = "";
  state.focusSessions.slice().reverse().forEach(s => {
    const item = document.createElement("div");
    item.className = "task-row";
    item.innerHTML = `<div style="flex:1;"><strong style="font-size:13px;">${s.taskTitle}</strong></div><span class="badge">${s.duration}m</span>`;
    fhEl.appendChild(item);
  });
}

// Focus Timer Logic
let sessionMins = 45;
let remainingSecs = 45 * 60;
let timerInterval = null;

function renderTimer() {
  const m = Math.floor(remainingSecs / 60).toString().padStart(2, "0");
  const s = (remainingSecs % 60).toString().padStart(2, "0");
  document.getElementById("timer-display").textContent = `${m}:${s}`;
}

// Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-page]").forEach(b => b.addEventListener("click", () => setPage(b.dataset.page)));
  document.querySelectorAll("[data-goto]").forEach(b => b.addEventListener("click", () => setPage(b.dataset.goto)));

  document.getElementById("edit-mission-btn").addEventListener("click", () => {
    const next = prompt("Set Today's Main Mission:", state.mission.title);
    if (next) { state.mission.title = next; saveState(); }
  });

  document.getElementById("mission-step-btn").addEventListener("click", () => {
    state.mission.progress = (state.mission.progress + 25) > 100 ? 0 : state.mission.progress + 25;
    saveState();
  });

  document.getElementById("add-task-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("new-task-input");
    const prio = document.getElementById("new-task-priority").value;
    state.tasks.push({ id: Date.now(), title: input.value, priority: prio, completed: false });
    input.value = "";
    saveState();
  });

  document.getElementById("tasks-container").addEventListener("click", e => {
    const check = e.target.closest(".check-box");
    if (check) {
      const t = state.tasks.find(x => x.id === Number(check.dataset.id));
      if (t) { t.completed = !t.completed; saveState(); }
    }
    const del = e.target.closest(".btn-del");
    if (del) {
      state.tasks = state.tasks.filter(x => x.id !== Number(del.dataset.del));
      saveState();
    }
  });

  document.getElementById("add-goal-form").addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("goal-title-input");
    const horizon = document.getElementById("goal-horizon-input").value;
    state.goals.push({ id: Date.now(), title: title.value, horizon, progress: 10 });
    title.value = "";
    saveState();
  });

  document.getElementById("goals-container").addEventListener("click", e => {
    const bump = e.target.closest(".goal-bump");
    if (bump) {
      const g = state.goals.find(x => x.id === Number(bump.dataset.gid));
      if (g) { g.progress = Math.min(100, g.progress + 10); saveState(); }
    }
  });

  // Timer controls
  document.querySelectorAll(".dur-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(timerInterval); timerInterval = null;
      sessionMins = Number(btn.dataset.mins);
      remainingSecs = sessionMins * 60;
      renderTimer();
    });
  });

  document.getElementById("timer-toggle").addEventListener("click", e => {
    if (timerInterval) {
      clearInterval(timerInterval); timerInterval = null;
      e.target.textContent = "Resume";
    } else {
      e.target.textContent = "Pause";
      timerInterval = setInterval(() => {
        if (remainingSecs > 0) { remainingSecs--; renderTimer(); }
        else { clearInterval(timerInterval); timerInterval = null; }
      }, 1000);
    }
  });

  document.getElementById("timer-reset").addEventListener("click", () => {
    clearInterval(timerInterval); timerInterval = null;
    remainingSecs = sessionMins * 60;
    document.getElementById("timer-toggle").textContent = "Start Focus";
    renderTimer();
  });

  document.getElementById("timer-complete").addEventListener("click", () => {
    state.focusSessions.push({
      id: Date.now(),
      taskTitle: state.mission.title,
      duration: sessionMins,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });
    saveState();
    alert("Focus session logged to Statistics!");
  });

  // Sleep form
  document.getElementById("sleep-form").addEventListener("submit", e => {
    e.preventDefault();
    state.sleep = {
      duration: document.getElementById("sleep-hours").value,
      score: Number(document.getElementById("sleep-score").value)
    };
    saveState();
  });

  // Settings
  document.getElementById("lang-select").addEventListener("change", e => { state.lang = e.target.value; saveState(); });
  document.getElementById("theme-select").addEventListener("change", e => { state.theme = e.target.value; saveState(); });
  document.getElementById("recovery-toggle-btn").addEventListener("click", () => { state.recoveryMode = !state.recoveryMode; saveState(); });

  // Export JSON
  document.getElementById("export-data-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sahand-icando-backup.json";
    a.click();
  });

  // Sync with Go Backend
  document.getElementById("sync-go-btn").addEventListener("click", async () => {
    const status = document.getElementById("sync-status");
    try {
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if (res.ok) status.textContent = "✓ Synced with Go Server";
    } catch (_) {
      status.textContent = "Saved locally (Go server offline)";
    }
  });

  renderAll();
});
