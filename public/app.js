const STORAGE_KEY = "sahand_icando_clean_v2";

const i18n = {
  en: {
    welcomeTitle: "Welcome to I CanDo",
    welcomeSub: "You don't need to change your entire life in one day. Let's start with your name and your first main goal.",
    askNameLabel: "YOUR NAME",
    askNamePlaceholder: "Enter your name...",
    askGoalLabel: "YOUR FIRST MAIN GOAL",
    askGoalPlaceholder: "What is your #1 goal right now?",
    askHorizonLabel: "GOAL TIME HORIZON",
    startJourneyBtn: "Begin My Journey",
    workspace: "WORKSPACE",
    navToday: "Today",
    navVision: "Vision",
    navFocus: "Focus",
    navStats: "Stats",
    navMore: "More",
    motto: "One day at a time.",
    greetingPrefix: "Hello,",
    streakUnit: "Day Streak",
    recoveryActive: "Recovery Mode Active",
    mainMission: "Today's Main Mission",
    missionHint: "Identify the one result that will make today valuable.",
    missionPlaceholder: "Write today's main mission...",
    saveBtn: "Save",
    addBtn: "Add",
    startFocusBtn: "Start Focus",
    advanceMissionBtn: "+25% Progress",
    dailyProgress: "DAILY PROGRESS",
    tasksCompletedSuffix: "tasks completed",
    focusedToday: "Focused Today:",
    dailyTasks: "Daily Tasks",
    taskPlaceholder: "Add a realistic task for today...",
    prioMain: "Main Priority",
    prioSecondary: "Secondary",
    prioOptional: "Optional",
    noTasksYet: "No tasks added yet. Add your first priority above.",
    dailySchedule: "Daily Schedule",
    schedPlaceholder: "Activity (e.g. Deep Work)...",
    noScheduleYet: "No time blocks yet. Plan your day above.",
    addGoalTitle: "Add a Long-Term Goal",
    visionHint: "Break your big ambitions into smaller milestones.",
    goalPlaceholder: "Enter a goal...",
    addGoalBtn: "Add Goal",
    hYearly: "Yearly Goal",
    hSixMonth: "6-Month Goal",
    hQuarterly: "Quarterly Goal",
    hMonthly: "Monthly Goal",
    hWeekly: "Weekly Goal",
    milestonePlaceholder: "Add a milestone step...",
    noGoalsYet: "No goals added yet.",
    focusEngine: "DEEP WORK SESSION",
    stayFocused: "SINGLE TASK FOCUS",
    focusTaskPlaceholder: "What are you focusing on right now?",
    startTimerBtn: "Start",
    pauseTimerBtn: "Pause",
    resumeTimerBtn: "Resume",
    logSessionBtn: "Complete & Save",
    resetBtn: "Reset",
    focusHistory: "Completed Focus Sessions",
    focusHistorySub: "Your recorded deep work blocks",
    noFocusYet: "No focus sessions recorded yet.",
    statTotalFocus: "TOTAL FOCUS TIME",
    statFocusSub: "Deep work logged",
    statSessions: "FOCUS SESSIONS",
    statSessionsSub: "Completed sessions",
    statSleep: "LATEST SLEEP",
    logSleepTitle: "Record Sleep & Rest",
    sleepHoursPlaceholder: "Hours slept (e.g. 7.5)",
    sleepQualityPlaceholder: "Quality (1 to 10)",
    noSleepYet: "No sleep records yet.",
    settingsTitle: "Personal Settings",
    yourNameLabel: "Your Name",
    langLabel: "Language",
    themeLabel: "Theme",
    recoveryTitle: "Recovery Day Mode",
    recoveryDesc: "Gentle restart after difficult days",
    toggleBtn: "Toggle",
    routinesAndData: "Routines & Data",
    wakeTargetLabel: "Target Wake-Up",
    bedTargetLabel: "Target Bedtime",
    exportBtn: "Export Backup",
    syncBtn: "Sync Server",
    resetAllBtn: "Reset App Data",
    confirmReset: "Reset all data and return to welcome screen?",
    minsUnit: "m",
    hrsUnit: "h",
    qualityLabel: "Quality",
    pageTitles: {
      today: "Today's Command Center",
      vision: "Vision & Goals",
      focus: "Deep Focus",
      stats: "Progress & Statistics",
      more: "Settings & Routines"
    }
  },
  fa: {
    welcomeTitle: "به I CanDo خوش آمدید",
    welcomeSub: "لازم نیست تمام زندگی‌ات را در یک روز تغییر دهی. با نام خودت و اولین هدف اصلی‌ات شروع کن.",
    askNameLabel: "نام شما",
    askNamePlaceholder: "نام خود را وارد کنید...",
    askGoalLabel: "اولین هدف اصلی شما",
    askGoalPlaceholder: "مهم‌ترین هدف فعلی شما چیست؟",
    askHorizonLabel: "افق زمانی هدف",
    startJourneyBtn: "شروع مسیر من",
    workspace: "فضای کاری",
    navToday: "امروز",
    navVision: "چشم‌انداز",
    navFocus: "تمرکز",
    navStats: "آمار",
    navMore: "بیشتر",
    motto: "هر روز، یک قدم.",
    greetingPrefix: "سلام،",
    streakUnit: "روز پیوستگی",
    recoveryActive: "حالت روز بازیابی فعال است",
    mainMission: "مأموریت اصلی امروز",
    missionHint: "یک نتیجه‌ی مهم که امروزت را ارزشمند می‌کند مشخص کن.",
    missionPlaceholder: "مأموریت اصلی امروز را بنویس...",
    saveBtn: "ذخیره",
    addBtn: "افزودن",
    startFocusBtn: "شروع تمرکز",
    advanceMissionBtn: "+۲۵٪ پیشرفت",
    dailyProgress: "پیشرفت امروز",
    tasksCompletedSuffix: "کار انجام شده",
    focusedToday: "تمرکز امروز:",
    dailyTasks: "کارهای روزانه",
    taskPlaceholder: "یک کار واقعی برای امروز اضافه کن...",
    prioMain: "اولویت اصلی",
    prioSecondary: "فرعی",
    prioOptional: "اختیاری",
    noTasksYet: "هنوز کاری ثبت نشده است. اولین اولویت امروزت را اضافه کن.",
    dailySchedule: "برنامه‌ی زمانی امروز",
    schedPlaceholder: "فعالیت (مثلاً کار عمیق)...",
    noScheduleYet: "هنوز بازه‌ی زمانی ثبت نشده است.",
    addGoalTitle: "افزودن هدف جدید",
    visionHint: "اهداف بزرگ را به قدم‌ها و مراحل کوچک‌تر تقسیم کن.",
    goalPlaceholder: "عنوان هدف جدید...",
    addGoalBtn: "ثبت هدف",
    hYearly: "هدف سالانه",
    hSixMonth: "هدف شش‌ماهه",
    hQuarterly: "هدف فصلی (سه‌ماهه)",
    hMonthly: "هدف ماهانه",
    hWeekly: "هدف هفتگی",
    milestonePlaceholder: "افزودن قدم یا مرحله‌ی جدید...",
    noGoalsYet: "هنوز هدفی ثبت نشده است.",
    focusEngine: "جلسه‌ی کار عمیق",
    stayFocused: "تمرکز روی یک کار مشخص",
    focusTaskPlaceholder: "الان روی چه کاری تمرکز می‌کنی؟",
    startTimerBtn: "شروع",
    pauseTimerBtn: "توقف",
    resumeTimerBtn: "ادامه",
    logSessionBtn: "تکمیل و ثبت جلسه",
    resetBtn: "از نو",
    focusHistory: "جلسات تمرکز ثبت‌شده",
    focusHistorySub: "سوابق کار عمیق شما",
    noFocusYet: "هنوز جلسه‌ی تمرکزی ثبت نشده است.",
    statTotalFocus: "مجموع زمان تمرکز",
    statFocusSub: "کار عمیق ثبت‌شده",
    statSessions: "تعداد جلسات تمرکز",
    statSessionsSub: "جلسات تکمیل‌شده",
    statSleep: "آخرین وضعیت خواب",
    logSleepTitle: "ثبت خواب و بازیابی انرژی",
    sleepHoursPlaceholder: "ساعت خواب (مثلاً 7.5)",
    sleepQualityPlaceholder: "کیفیت خواب (۱ تا ۱۰)",
    noSleepYet: "هنوز گزارشی از خواب ثبت نشده است.",
    settingsTitle: "تنظیمات شخصی",
    yourNameLabel: "نام شما",
    langLabel: "زبان برنامه",
    themeLabel: "پوسته‌ی ظاهری",
    recoveryTitle: "حالت روز بازیابی",
    recoveryDesc: "بازگشت آرام به روتین پس از روزهای سخت",
    toggleBtn: "تغییر وضعیت",
    routinesAndData: "روتین‌ها و پشتیبان‌گیری",
    wakeTargetLabel: "ساعت هدف بیداری",
    bedTargetLabel: "ساعت هدف خواب",
    exportBtn: "خروجی فایل پشتیبان",
    syncBtn: "همگام‌سازی با سرور",
    resetAllBtn: "پاک‌سازی کل اطلاعات",
    confirmReset: "آیا تمام اطلاعات پاک شود و به صفحه‌ی شروع برگردید؟",
    minsUnit: " دقیقه",
    hrsUnit: " ساعت",
    qualityLabel: "کیفیت",
    pageTitles: {
      today: "مرکز فرماندهی امروز",
      vision: "چشم‌انداز و اهداف",
      focus: "تمرکز عمیق",
      stats: "آمار و پیشرفت",
      more: "تنظیمات و روتین‌ها"
    }
  }
};

function createEmptyState() {
  return {
    onboarded: false,
    userName: "",
    lang: "en",
    theme: "noir",
    recoveryMode: false,
    streakDays: 1,
    routines: { wake: "07:00", bed: "23:00" },
    mission: { title: "", progress: 0 },
    tasks: [],
    schedule: [],
    goals: [],
    focusSessions: [],
    sleepLogs: []
  };
}

let state = loadState();
let currentPage = "today";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? { ...createEmptyState(), ...JSON.parse(raw) } : createEmptyState();
  } catch (_) {
    return createEmptyState();
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (_) {}
  renderAll();
}

function t(key) {
  const dict = i18n[state.lang] || i18n.en;
  return dict[key] || i18n.en[key] || key;
}

function translatePriority(p) {
  if (p === "Main") return t("prioMain");
  if (p === "Secondary") return t("prioSecondary");
  return t("prioOptional");
}

function translateHorizon(h) {
  const map = {
    "Yearly": "hYearly",
    "6-Month": "hSixMonth",
    "Quarterly": "hQuarterly",
    "Monthly": "hMonthly",
    "Weekly": "hWeekly"
  };
  return t(map[h] || "hYearly");
}

function setPage(name) {
  currentPage = name;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `page-${name}`));
  document.querySelectorAll("[data-page]").forEach(b => b.classList.toggle("active", b.dataset.page === name));
  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[name] || dict.pageTitles.today;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderAll() {
  // 1. Language & Theme attributes
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";

  // 2. Onboarding modal visibility
  const modal = document.getElementById("onboarding-modal");
  modal.classList.toggle("hidden", Boolean(state.onboarded));
  document.getElementById("onboard-lang").value = state.lang;

  // 3. Static i18n text & placeholders
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // 4. Header & Greeting
  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[currentPage];
  document.getElementById("user-greeting").textContent = state.userName ? `${t("greetingPrefix")} ${state.userName}` : "";
  document.getElementById("sidebar-user-name").textContent = state.userName || "";
  document.getElementById("streak-badge").textContent = `🔥 ${state.streakDays} ${t("streakUnit")}`;
  document.getElementById("recovery-badge").style.display = state.recoveryMode ? "inline-flex" : "none";

  // 5. Mission
  const missionInput = document.getElementById("mission-input");
  if (document.activeElement !== missionInput) {
    missionInput.value = state.mission.title || "";
  }
  document.getElementById("mission-pct-label").textContent = `${state.mission.progress}%`;
  document.getElementById("mission-bar").style.width = `${state.mission.progress}%`;

  // 6. Tasks
  const tasksEl = document.getElementById("tasks-container");
  tasksEl.innerHTML = "";
  if (state.tasks.length === 0) {
    tasksEl.innerHTML = `<div class="empty-text">${t("noTasksYet")}</div>`;
  } else {
    state.tasks.forEach(task => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="check-box ${task.completed ? "done" : ""}" data-task-toggle="${task.id}">${task.completed ? "✓" : ""}</div>
        <div class="item-body">
          <span class="item-title ${task.completed ? "done" : ""}">${escapeHtml(task.title)}</span>
          <span class="item-sub">${translatePriority(task.priority)}</span>
        </div>
        <button class="del-btn" data-task-del="${task.id}">✕</button>
      `;
      tasksEl.appendChild(row);
    });
  }

  // 7. Daily Progress
  const doneCount = state.tasks.filter(x => x.completed).length;
  const totalCount = state.tasks.length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : state.mission.progress;
  document.getElementById("completion-rate").textContent = `${pct}%`;
  document.getElementById("tasks-summary-text").textContent = `${doneCount} / ${totalCount} ${t("tasksCompletedSuffix")}`;
  document.getElementById("daily-bar").style.width = `${pct}%`;

  const totalFocusMins = state.focusSessions.reduce((sum, s) => sum + s.duration, 0);
  document.getElementById("today-focus-mins").textContent = `${totalFocusMins}${t("minsUnit")}`;

  // 8. Daily Schedule
  const schedEl = document.getElementById("schedule-container");
  schedEl.innerHTML = "";
  if (state.schedule.length === 0) {
    schedEl.innerHTML = `<div class="empty-text">${t("noScheduleYet")}</div>`;
  } else {
    const sorted = state.schedule.slice().sort((a, b) => a.time.localeCompare(b.time));
    sorted.forEach(item => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <strong style="color:var(--accent); font-size:12.5px; min-width:48px;">${escapeHtml(item.time)}</strong>
        <div class="item-body">
          <span class="item-title">${escapeHtml(item.title)}</span>
        </div>
        <button class="del-btn" data-sched-del="${item.id}">✕</button>
      `;
      schedEl.appendChild(row);
    });
  }

  // 9. Vision Goals & Milestones
  const goalsEl = document.getElementById("goals-container");
  goalsEl.innerHTML = "";
  if (state.goals.length === 0) {
    goalsEl.innerHTML = `<div class="card empty-text">${t("noGoalsYet")}</div>`;
  } else {
    state.goals.forEach(g => {
      const milestones = g.milestones || [];
      const mDone = milestones.filter(m => m.done).length;
      const calcPct = milestones.length ? Math.round((mDone / milestones.length) * 100) : (g.progress || 0);

      const card = document.createElement("article");
      card.className = "card";
      let msHtml = "";
      milestones.forEach(m => {
        msHtml += `
          <div class="item-row" style="padding:8px 0;">
            <div class="check-box ${m.done ? "done" : ""}" data-ms-toggle="${g.id}:${m.id}">${m.done ? "✓" : ""}</div>
            <div class="item-body"><span class="item-title ${m.done ? "done" : ""}">${escapeHtml(m.text)}</span></div>
            <button class="del-btn" data-ms-del="${g.id}:${m.id}">✕</button>
          </div>
        `;
      });

      card.innerHTML = `
        <div class="card-header" style="margin-bottom:8px;">
          <span class="badge badge-accent">${translateHorizon(g.horizon)}</span>
          <button class="del-btn" data-goal-del="${g.id}">✕</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <h4 class="card-title">${escapeHtml(g.title)}</h4>
          <strong style="color:var(--accent); font-size:13px;">${calcPct}%</strong>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${calcPct}%"></div></div>
        <form class="form-row add-ms-form" data-goal-id="${g.id}" style="margin-top:10px;">
          <input type="text" class="input-field ms-input" placeholder="${t("milestonePlaceholder")}" required />
          <button type="submit" class="btn btn-outline btn-sm">${t("addBtn")}</button>
        </form>
        <div class="item-list">${msHtml}</div>
      `;
      goalsEl.appendChild(card);
    });
  }

  // 10. Focus Sessions History
  const fhEl = document.getElementById("focus-history-container");
  fhEl.innerHTML = "";
  if (state.focusSessions.length === 0) {
    fhEl.innerHTML = `<div class="empty-text">${t("noFocusYet")}</div>`;
  } else {
    state.focusSessions.slice().reverse().forEach(s => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${escapeHtml(s.taskTitle)}</span>
          <span class="item-sub">${escapeHtml(s.time || "")}</span>
        </div>
        <span class="badge badge-accent">${s.duration}${t("minsUnit")}</span>
      `;
      fhEl.appendChild(row);
    });
  }

  // 11. Statistics & Sleep
  document.getElementById("stat-total-focus").textContent = `${totalFocusMins}${t("minsUnit")}`;
  document.getElementById("stat-sessions-count").textContent = String(state.focusSessions.length);

  const sleepEl = document.getElementById("sleep-history-container");
  sleepEl.innerHTML = "";
  if (state.sleepLogs.length === 0) {
    document.getElementById("stat-sleep-last").textContent = "—";
    document.getElementById("stat-sleep-sub").textContent = "";
    sleepEl.innerHTML = `<div class="empty-text">${t("noSleepYet")}</div>`;
  } else {
    const latest = state.sleepLogs[state.sleepLogs.length - 1];
    document.getElementById("stat-sleep-last").textContent = `${latest.hours}${t("hrsUnit")}`;
    document.getElementById("stat-sleep-sub").textContent = `${t("qualityLabel")}: ${latest.score} / 10`;

    state.sleepLogs.slice().reverse().forEach(log => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${log.hours}${t("hrsUnit")}</span>
          <span class="item-sub">${escapeHtml(log.date)}</span>
        </div>
        <span class="badge">${t("qualityLabel")}: ${log.score}/10</span>
      `;
      sleepEl.appendChild(row);
    });
  }

  // 12. Settings Inputs
  const nameIn = document.getElementById("settings-name-input");
  if (document.activeElement !== nameIn) nameIn.value = state.userName || "";
  document.getElementById("lang-select").value = state.lang;
  document.getElementById("theme-select").value = state.theme;
  document.getElementById("routine-wake").value = state.routines?.wake || "07:00";
  document.getElementById("routine-bed").value = state.routines?.bed || "23:00";
}

function escapeHtml(str) {
  return String(str || "")
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">");
}

// Timer Logic
let sessionMins = 45;
let remainingSecs = 45 * 60;
let timerInterval = null;

function renderTimer() {
  const m = Math.floor(remainingSecs / 60).toString().padStart(2, "0");
  const s = (remainingSecs % 60).toString().padStart(2, "0");
  document.getElementById("timer-display").textContent = `${m}:${s}`;
}

document.addEventListener("DOMContentLoaded", () => {
  // Onboarding Language Switcher
  document.getElementById("onboard-lang").addEventListener("change", e => {
    state.lang = e.target.value;
    saveState();
  });

  // Onboarding Submit
  document.getElementById("onboarding-form").addEventListener("submit", e => {
    e.preventDefault();
    const userName = document.getElementById("onboard-name").value.trim();
    const firstGoal = document.getElementById("onboard-goal").value.trim();
    const horizon = document.getElementById("onboard-horizon").value;

    state.userName = userName;
    state.onboarded = true;
    state.mission = { title: firstGoal, progress: 0 };
    state.goals = [
      { id: Date.now(), title: firstGoal, horizon: horizon, progress: 0, milestones: [] }
    ];
    saveState();
  });

  // Page Navigation
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.page));
  });
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.goto));
  });

  // Mission Save & Progress
  document.getElementById("mission-form").addEventListener("submit", e => {
    e.preventDefault();
    state.mission.title = document.getElementById("mission-input").value.trim();
    saveState();
  });
  document.getElementById("mission-step-btn").addEventListener("click", () => {
    state.mission.progress = state.mission.progress >= 100 ? 0 : state.mission.progress + 25;
    saveState();
  });

  // Tasks Add / Toggle / Delete
  document.getElementById("add-task-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("new-task-input");
    const prio = document.getElementById("new-task-priority").value;
    if (!input.value.trim()) return;
    state.tasks.push({ id: Date.now(), title: input.value.trim(), priority: prio, completed: false });
    input.value = "";
    saveState();
  });

  document.getElementById("tasks-container").addEventListener("click", e => {
    const toggle = e.target.closest("[data-task-toggle]");
    if (toggle) {
      const id = Number(toggle.dataset.taskToggle);
      const task = state.tasks.find(x => x.id === id);
      if (task) { task.completed = !task.completed; saveState(); }
    }
    const del = e.target.closest("[data-task-del]");
    if (del) {
      const id = Number(del.dataset.taskDel);
      state.tasks = state.tasks.filter(x => x.id !== id);
      saveState();
    }
  });

  // Schedule Add / Delete
  document.getElementById("add-schedule-form").addEventListener("submit", e => {
    e.preventDefault();
    const timeIn = document.getElementById("sched-time-input");
    const titleIn = document.getElementById("sched-title-input");
    if (!titleIn.value.trim()) return;
    state.schedule.push({ id: Date.now(), time: timeIn.value, title: titleIn.value.trim() });
    titleIn.value = "";
    saveState();
  });

  document.getElementById("schedule-container").addEventListener("click", e => {
    const del = e.target.closest("[data-sched-del]");
    if (del) {
      const id = Number(del.dataset.schedDel);
      state.schedule = state.schedule.filter(x => x.id !== id);
      saveState();
    }
  });

  // Vision Goals & Milestones
  document.getElementById("add-goal-form").addEventListener("submit", e => {
    e.preventDefault();
    const titleIn = document.getElementById("goal-title-input");
    const horizon = document.getElementById("goal-horizon-input").value;
    if (!titleIn.value.trim()) return;
    state.goals.push({ id: Date.now(), title: titleIn.value.trim(), horizon, progress: 0, milestones: [] });
    titleIn.value = "";
    saveState();
  });

  document.getElementById("goals-container").addEventListener("submit", e => {
    const form = e.target.closest(".add-ms-form");
    if (form) {
      e.preventDefault();
      const gid = Number(form.dataset.goalId);
      const input = form.querySelector(".ms-input");
      const goal = state.goals.find(g => g.id === gid);
      if (goal && input.value.trim()) {
        goal.milestones = goal.milestones || [];
        goal.milestones.push({ id: Date.now(), text: input.value.trim(), done: false });
        saveState();
      }
    }
  });

  document.getElementById("goals-container").addEventListener("click", e => {
    const gDel = e.target.closest("[data-goal-del]");
    if (gDel) {
      const gid = Number(gDel.dataset.goalDel);
      state.goals = state.goals.filter(g => g.id !== gid);
      saveState();
    }
    const msToggle = e.target.closest("[data-ms-toggle]");
    if (msToggle) {
      const [gid, mid] = msToggle.dataset.msToggle.split(":").map(Number);
      const goal = state.goals.find(g => g.id === gid);
      const ms = goal?.milestones?.find(m => m.id === mid);
      if (ms) { ms.done = !ms.done; saveState(); }
    }
    const msDel = e.target.closest("[data-ms-del]");
    if (msDel) {
      const [gid, mid] = msDel.dataset.msDel.split(":").map(Number);
      const goal = state.goals.find(g => g.id === gid);
      if (goal && goal.milestones) {
        goal.milestones = goal.milestones.filter(m => m.id !== mid);
        saveState();
      }
    }
  });

  // Focus Timer Controls
  document.querySelectorAll(".dur-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(timerInterval);
      timerInterval = null;
      sessionMins = Number(btn.dataset.mins);
      remainingSecs = sessionMins * 60;
      document.getElementById("timer-toggle").textContent = t("startTimerBtn");
      renderTimer();
    });
  });

  document.getElementById("timer-toggle").addEventListener("click", e => {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
      e.target.textContent = t("resumeTimerBtn");
    } else {
      e.target.textContent = t("pauseTimerBtn");
      timerInterval = setInterval(() => {
        if (remainingSecs > 0) {
          remainingSecs--;
          renderTimer();
        } else {
          clearInterval(timerInterval);
          timerInterval = null;
        }
      }, 1000);
    }
  });

  document.getElementById("timer-reset").addEventListener("click", () => {
    clearInterval(timerInterval);
    timerInterval = null;
    remainingSecs = sessionMins * 60;
    document.getElementById("timer-toggle").textContent = t("startTimerBtn");
    renderTimer();
  });

  document.getElementById("timer-complete").addEventListener("click", () => {
    const customTask = document.getElementById("focus-task-input").value.trim();
    const title = customTask || state.mission.title || t("focusEngine");
    state.focusSessions.push({
      id: Date.now(),
      taskTitle: title,
      duration: sessionMins,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });
    document.getElementById("focus-task-input").value = "";
    saveState();
  });

  // Sleep Form
  document.getElementById("sleep-form").addEventListener("submit", e => {
    e.preventDefault();
    const hours = Number(document.getElementById("sleep-hours").value);
    const score = Number(document.getElementById("sleep-score").value);
    state.sleepLogs.push({
      id: Date.now(),
      hours,
      score,
      date: new Date().toLocaleDateString()
    });
    document.getElementById("sleep-hours").value = "";
    document.getElementById("sleep-score").value = "";
    saveState();
  });

  // More / Settings
  document.getElementById("save-name-btn").addEventListener("click", () => {
    const next = document.getElementById("settings-name-input").value.trim();
    if (next) { state.userName = next; saveState(); }
  });
  document.getElementById("lang-select").addEventListener("change", e => {
    state.lang = e.target.value;
    saveState();
  });
  document.getElementById("theme-select").addEventListener("change", e => {
    state.theme = e.target.value;
    saveState();
  });
  document.getElementById("recovery-toggle-btn").addEventListener("click", () => {
    state.recoveryMode = !state.recoveryMode;
    saveState();
  });
  document.getElementById("routine-wake").addEventListener("change", e => {
    state.routines.wake = e.target.value;
    saveState();
  });
  document.getElementById("routine-bed").addEventListener("change", e => {
    state.routines.bed = e.target.value;
    saveState();
  });

  // Export, Sync & Reset
  document.getElementById("export-data-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sahand-icando-backup.json";
    a.click();
  });

  document.getElementById("sync-go-btn").addEventListener("click", async () => {
    const status = document.getElementById("sync-status");
    try {
      const res = await fetch("/api/sync", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if (res.ok) status.textContent = "✓ Synced";
    } catch (_) {
      status.textContent = "Saved on device";
    }
  });

  document.getElementById("reset-all-btn").addEventListener("click", () => {
    if (confirm(t("confirmReset"))) {
      localStorage.removeItem(STORAGE_KEY);
      state = createEmptyState();
      saveState();
    }
  });

  renderTimer();
  renderAll();
});
