const STORAGE_KEY = "sahand_icando_v3_rebuilt";

const i18n = {
  en: {
    welcomeTitle: "Welcome to I CanDo",
    welcomeSub: "Enter your name and your #1 End-of-Year Goal (365 daily steps) to build your daily schedule.",
    askNameLabel: "YOUR NAME",
    askNamePlaceholder: "Your name...",
    askTopGoalLabel: "#1 END-OF-YEAR GOAL (365 STEPS)",
    askTopGoalPlaceholder: "Your most important yearly goal...",
    askDailyStepLabel: "MANDATORY DAILY TASK FOR THIS GOAL",
    askDailyStepPlaceholder: "What must you do every day for this goal?",
    startBtn: "Begin",
    navigationLabel: "NAVIGATION",
    tab1Nav: "To-Do List",
    tab2Nav: "Sleep Schedule",
    tab3Nav: "Workout Plan",
    tab4Nav: "Goals & Timeline",
    tab5Nav: "Top 3 Goals",
    tab1Short: "To-Do",
    tab2Short: "Sleep",
    tab3Short: "Workout",
    tab4Short: "Goals",
    tab5Short: "Top 3",
    motto: "One day at a time.",
    greetingPrefix: "Hello,",
    mandatoryBadge: "TOP 3 END-OF-YEAR GOALS (365 STEPS)",
    top3DailyTitle: "Mandatory Daily Actions",
    top3DailySub: "Check to complete 1 of 365 steps. Use Duplicate if you work on a goal twice today to count 2 steps.",
    mainPriorityBadge: "MAIN PRIORITY",
    goalsInTodoTitle: "Goals List",
    manageGoalsBtn: "Goals →",
    secondaryBadge: "SECONDARY PRIORITY",
    secondaryTasksTitle: "Other Tasks (Less Important)",
    secondaryPlaceholder: "Add secondary priority task...",
    addBtn: "Add",
    duplicateBtn: "Duplicate",
    editBtn: "Edit",
    saveBtn: "Save",
    cancelBtn: "Cancel",
    checkStepBtn: "+1 Step",
    stepsWord: "steps",
    noTop3Daily: "No Top 3 Goals set yet. Add them in the Top 3 tab.",
    noActiveGoalsTodo: "No active goals in your Goals List yet.",
    noSecondaryTasks: "No secondary tasks added.",
    sleepSettingsTitle: "Sleep Settings & Targets",
    targetSleepHoursLabel: "TARGET HOURS",
    targetBedLabel: "TARGET BEDTIME",
    targetWakeLabel: "TARGET WAKE-UP",
    saveSettingsBtn: "Save Sleep Settings",
    logSleepTitle: "Record Sleep",
    actualBedLabel: "BEDTIME",
    actualWakeLabel: "WAKE-UP",
    recordSleepBtn: "Save Sleep Entry",
    weeklySleepSchedTitle: "Weekly Sleep Schedule",
    sleepHistoryTitle: "Sleep History",
    noSleepRecords: "No sleep entries recorded yet.",
    healthStandardsEyebrow: "RECOMMENDED ACTIVITY LEVELS FOR HEALTH & DEVELOPMENT",
    workoutProgressTitle: "Weekly Workout Progress & Targets",
    aerobicTargetLabel: "ACTIVE MINUTES (REC: 150M/WK)",
    strengthTargetLabel: "STRENGTH SESSIONS (REC: 2+/WK)",
    planAdherenceLabel: "WEEKLY SCHEDULE PROGRESS",
    weeklyWorkoutSchedTitle: "Weekly Workout Plan",
    checkToCompleteHint: "CHECK TO MARK COMPLETED",
    addTimelineGoalTitle: "Add Goal to Timeline",
    tlGoalPlaceholder: "Goal title...",
    stepsCountPlaceholder: "Steps required",
    addGoalBtn: "Add Goal",
    filterAll: "All",
    hYearly: "Yearly",
    hSixMonth: "6-Month",
    hThreeMonth: "3-Month",
    hMonthly: "Monthly",
    stepsRequired: "Steps Required",
    stepsDone: "Completed",
    stepsRemaining: "Remaining",
    addStepPlaceholder: "Add named milestone step...",
    noGoalsInFilter: "No goals in this timeline yet.",
    strictLimitBadge: "STRICT LIMIT: MAX 3 GOALS · 365 STEPS",
    top3HeaderTitle: "Top 3 End-of-Year Goals",
    top3Explain: "You can never have more than three End-of-Year Goals. Each goal has 365 daily steps and shows your percentage progress as you check or duplicate its daily task in the To-Do List.",
    top3GoalPlaceholder: "End-of-Year Goal...",
    top3DailyPlaceholder: "Daily task required every day...",
    addTop3Btn: "Add Goal",
    top3LimitReached: "Maximum of 3 End-of-Year Goals reached. Remove one to replace it.",
    dailyTaskLabel: "Daily Task:",
    dataBackupTitle: "Data Backup",
    exportBtn: "Export JSON",
    resetBtn: "Reset Data",
    confirmReset: "Reset all data and return to welcome screen?",
    pageTitles: {
      todo: "To-Do List",
      sleep: "Sleep Settings & Schedule",
      workout: "Weekly Workout Plan",
      goals: "Goals List & Timeline",
      top3: "Top 3 End-of-Year Goals"
    }
  },
  fa: {
    welcomeTitle: "به I CanDo خوش آمدید",
    welcomeSub: "نام خود و اولین هدف مهم پایان سال (۳۶۵ قدم روزانه) را وارد کنید تا برنامه‌ی روزانه‌ی شما ساخته شود.",
    askNameLabel: "نام شما",
    askNamePlaceholder: "نام خود را بنویسید...",
    askTopGoalLabel: "مهم‌ترین هدف پایان سال (۳۶۵ قدم)",
    askTopGoalPlaceholder: "اصلی‌ترین هدف شما تا پایان سال چیست؟",
    askDailyStepLabel: "کار روزانه‌ی مرتبط با این هدف",
    askDailyStepPlaceholder: "هر روز چه کاری برای این هدف انجام می‌دهید؟",
    startBtn: "شروع",
    navigationLabel: "بخش‌های برنامه",
    tab1Nav: "لیست کارها",
    tab2Nav: "تنظیمات و برنامه‌ی خواب",
    tab3Nav: "برنامه‌ی ورزشی هفتگی",
    tab4Nav: "اهداف و زمان‌بندی",
    tab5Nav: "۳ هدف برتر پایان سال",
    tab1Short: "کارها",
    tab2Short: "خواب",
    tab3Short: "ورزش",
    tab4Short: "اهداف",
    tab5Short: "۳ هدف برتر",
    motto: "هر روز، یک قدم.",
    greetingPrefix: "سلام،",
    mandatoryBadge: "۳ هدف برتر پایان سال (۳۶۵ قدم)",
    top3DailyTitle: "اقدامات روزانه‌ی الزامی",
    top3DailySub: "با تیک زدن هر مورد، ۱ قدم از ۳۶۵ قدم ثبت می‌شود. اگر امروز دو بار روی هدفی کار کردید، دکمه‌ی تکرار را بزنید تا ۲ قدم ثبت شود.",
    mainPriorityBadge: "اولویت اصلی",
    goalsInTodoTitle: "لیست اهداف",
    manageGoalsBtn: "مدیریت اهداف ←",
    secondaryBadge: "اولویت فرعی (اهمیت کمتر)",
    secondaryTasksTitle: "سایر کارهای روزمره",
    secondaryPlaceholder: "افزودن کار با اولویت فرعی...",
    addBtn: "افزودن",
    duplicateBtn: "تکرار",
    editBtn: "ویرایش",
    saveBtn: "ذخیره",
    cancelBtn: "انصراف",
    checkStepBtn: "+۱ قدم",
    stepsWord: "قدم",
    noTop3Daily: "هنوز ۳ هدف برتر ثبت نشده است. از تب ۳ هدف برتر اضافه کنید.",
    noActiveGoalsTodo: "هنوز هدفی در لیست اهداف ثبت نشده است.",
    noSecondaryTasks: "کار فرعی ثبت نشده است.",
    sleepSettingsTitle: "تنظیمات و اهداف خواب",
    targetSleepHoursLabel: "ساعت خواب هدف",
    targetBedLabel: "ساعت خواب مطلوب",
    targetWakeLabel: "ساعت بیداری مطلوب",
    saveSettingsBtn: "ذخیره‌ی تنظیمات خواب",
    logSleepTitle: "ثبت خواب دیشب",
    actualBedLabel: "ساعت خواب",
    actualWakeLabel: "ساعت بیداری",
    recordSleepBtn: "ثبت گزارش خواب",
    weeklySleepSchedTitle: "برنامه‌ی خواب هفتگی",
    sleepHistoryTitle: "سوابق خواب",
    noSleepRecords: "هنوز گزارشی از خواب ثبت نشده است.",
    healthStandardsEyebrow: "سطح فعالیت توصیه‌شده برای سلامت و رشد بدنی",
    workoutProgressTitle: "پیشرفت هفتگی و میزان نزدیکی به اهداف",
    aerobicTargetLabel: "دقایق فعالیت (توصیه: ۱۵۰ دقیقه/هفته)",
    strengthTargetLabel: "تمرین قدرتی (توصیه: ۲+ جلسه/هفته)",
    planAdherenceLabel: "پیشرفت برنامه‌ی هفتگی",
    weeklyWorkoutSchedTitle: "برنامه‌ی ورزشی هفتگی",
    checkToCompleteHint: "تیک روزهای انجام‌شده را بزنید",
    addTimelineGoalTitle: "افزودن هدف به زمان‌بندی",
    tlGoalPlaceholder: "عنوان هدف...",
    stepsCountPlaceholder: "تعداد کل قدم‌ها",
    addGoalBtn: "افزودن هدف",
    filterAll: "همه",
    hYearly: "سالانه",
    hSixMonth: "شش‌ماهه",
    hThreeMonth: "سه‌ماهه",
    hMonthly: "ماهانه",
    stepsRequired: "مراحل مورد نیاز",
    stepsDone: "انجام‌شده",
    stepsRemaining: "باقی‌مانده",
    addStepPlaceholder: "افزودن مرحله‌ی نام‌گذاری‌شده...",
    noGoalsInFilter: "هدفی در این بازه‌ی زمانی ثبت نشده است.",
    strictLimitBadge: "حداکثر ۳ هدف · ۳۶۵ قدم",
    top3HeaderTitle: "۳ هدف برتر پایان سال من",
    top3Explain: "شما هرگز نمی‌توانید بیشتر از ۳ هدف پایان سال داشته باشید. هر هدف شامل ۳۶۵ قدم روزانه است و با انجام یا تکرار آن در لیست کارها، درصد پیشرفت افزایش می‌یابد.",
    top3GoalPlaceholder: "عنوان هدف پایان سال...",
    top3DailyPlaceholder: "کار روزانه‌ی الزامی برای این هدف...",
    addTop3Btn: "ثبت هدف برتر",
    top3LimitReached: "حداکثر ۳ هدف پایان سال ثبت شده است. برای تغییر، یکی را حذف کنید.",
    dailyTaskLabel: "کار روزانه:",
    dataBackupTitle: "پشتیبان‌گیری اطلاعات",
    exportBtn: "خروجی فایل",
    resetBtn: "پاک‌سازی اطلاعات",
    confirmReset: "آیا تمام اطلاعات پاک شود و به صفحه‌ی شروع برگردید؟",
    pageTitles: {
      todo: "لیست کارها",
      sleep: "تنظیمات و برنامه‌ی خواب",
      workout: "برنامه‌ی ورزشی هفتگی",
      goals: "اهداف و زمان‌بندی",
      top3: "۳ هدف برتر پایان سال"
    }
  }
};

const DAYS_LIST = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

const WORKOUT_TYPES = [
  { value: "Strength Training (45m)", mins: 45, isStrength: true },
  { value: "Cardio / Running (40m)", mins: 40, isStrength: false },
  { value: "Brisk Walking (30m)", mins: 30, isStrength: false },
  { value: "Cycling / Swimming (45m)", mins: 45, isStrength: false },
  { value: "Mobility & Core (30m)", mins: 30, isStrength: false },
  { value: "Rest & Recovery", mins: 0, isStrength: false }
];

function defaultStepsForHorizon(horizon) {
  if (horizon === "Yearly") return 365;
  if (horizon === "6-Month") return 180;
  if (horizon === "3-Month") return 90;
  return 30;
}

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function formatPct(done, total) {
  if (!total || done <= 0) return "0%";
  if (done >= total) return "100%";
  return `${((done / total) * 100).toFixed(1)}%`;
}

function createInitialState() {
  const defaultSleepWeek = {};
  DAYS_LIST.forEach(d => {
    defaultSleepWeek[d] = { bed: "23:00", wake: "07:00" };
  });

  return {
    onboarded: false,
    userName: "",
    lang: "en",
    theme: "noir",
    // Tab 5: Top 3 End-of-Year Goals (365 steps each)
    top3Goals: [],
    // Daily task instances per date: { "YYYY-MM-DD": [{ instanceId, goalId, done }] }
    top3DailyInstances: {},
    // Tab 4: Goals List & Timeline
    timelineGoals: [],
    // Tab 1: Secondary Priority Tasks
    secondaryTasks: [],
    // Tab 2: Sleep Settings & Schedule
    sleepSettings: {
      targetHours: 8,
      targetBed: "23:00",
      targetWake: "07:00",
      weeklySchedule: defaultSleepWeek
    },
    sleepLogs: [],
    // Tab 3: Weekly Workout Plan
    weeklyWorkouts: {
      Sat: { activity: "Strength Training (45m)", mins: 45, isStrength: true, done: false },
      Sun: { activity: "Brisk Walking (30m)", mins: 30, isStrength: false, done: false },
      Mon: { activity: "Cardio / Running (40m)", mins: 40, isStrength: false, done: false },
      Tue: { activity: "Strength Training (45m)", mins: 45, isStrength: true, done: false },
      Wed: { activity: "Rest & Recovery", mins: 0, isStrength: false, done: false },
      Thu: { activity: "Cycling / Swimming (45m)", mins: 45, isStrength: false, done: false },
      Fri: { activity: "Rest & Recovery", mins: 0, isStrength: false, done: false }
    }
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createInitialState();
    const parsed = JSON.parse(raw);
    const base = createInitialState();
    const merged = {
      ...base,
      ...parsed,
      sleepSettings: {
        ...base.sleepSettings,
        ...(parsed.sleepSettings || {}),
        weeklySchedule: { ...base.sleepSettings.weeklySchedule, ...(parsed.sleepSettings?.weeklySchedule || {}) }
      },
      weeklyWorkouts: { ...base.weeklyWorkouts, ...(parsed.weeklyWorkouts || {}) }
    };

    // Normalize Top 3 Goals for 365 steps
    merged.top3Goals = (merged.top3Goals || []).map(g => ({
      ...g,
      stepsDone: Number(g.stepsDone || 0),
      totalSteps: 365
    }));

    // Normalize Timeline Goals for editable steps & counts
    merged.timelineGoals = (merged.timelineGoals || []).map(g => ({
      ...g,
      totalSteps: Number(g.totalSteps || defaultStepsForHorizon(g.horizon)),
      stepsDone: Number(g.stepsDone || 0),
      steps: Array.isArray(g.steps) ? g.steps : []
    }));

    return merged;
  } catch (_) {
    return createInitialState();
  }
}

let state = loadState();
let currentPage = "todo";
let currentGoalFilter = "All";
let editingGoalId = null;

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

function escapeHtml(str) {
  return String(str || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function calcSleepHours(bedStr, wakeStr) {
  const [bH, bM] = bedStr.split(":").map(Number);
  const [wH, wM] = wakeStr.split(":").map(Number);
  let bedMins = bH * 60 + bM;
  let wakeMins = wH * 60 + wM;
  if (wakeMins <= bedMins) wakeMins += 24 * 60;
  return Math.round(((wakeMins - bedMins) / 60) * 10) / 10;
}

function horizonLabel(h) {
  const map = { "Yearly": "hYearly", "6-Month": "hSixMonth", "3-Month": "hThreeMonth", "Monthly": "hMonthly" };
  return t(map[h] || "hYearly");
}

function setPage(name) {
  currentPage = name;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `page-${name}`));
  document.querySelectorAll("[data-page]").forEach(b => b.classList.toggle("active", b.dataset.page === name));
  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[name] || dict.pageTitles.todo;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// Ensures every Top 3 Goal has at least 1 mandatory task instance on today's To-Do list
function ensureTodayTop3Instances() {
  const tk = todayKey();
  state.top3DailyInstances = state.top3DailyInstances || {};
  let list = state.top3DailyInstances[tk] || [];

  // Remove instances whose goal no longer exists
  const validIds = new Set(state.top3Goals.map(g => g.id));
  list = list.filter(inst => validIds.has(inst.goalId));

  // Ensure each Top 3 goal has at least 1 daily instance today
  state.top3Goals.forEach((g, idx) => {
    if (!list.some(inst => inst.goalId === g.id)) {
      list.push({
        instanceId: Date.now() + idx + Math.floor(Math.random() * 10000),
        goalId: g.id,
        done: false
      });
    }
  });

  state.top3DailyInstances[tk] = list;
  return list;
}

function getGoalStepMetrics(g) {
  const namedSteps = g.steps || [];
  const namedDone = namedSteps.filter(s => s.done).length;
  const total = Math.max(Number(g.totalSteps || 0), namedSteps.length, 1);
  const done = Math.min(total, Number(g.stepsDone || 0) + namedDone);
  const remaining = Math.max(0, total - done);
  const pctStr = formatPct(done, total);
  const pctNum = Math.min(100, (done / total) * 100);
  return { total, done, remaining, pctStr, pctNum };
}

function renderAll() {
  const tk = todayKey();

  // Theme & Language
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";

  document.getElementById("onboarding-modal").classList.toggle("hidden", Boolean(state.onboarded));
  document.getElementById("onboard-lang").value = state.lang;
  document.getElementById("global-lang-select").value = state.lang;
  document.getElementById("global-theme-select").value = state.theme;

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[currentPage];
  document.getElementById("user-greeting").textContent = state.userName ? `${t("greetingPrefix")} ${state.userName}` : "";
  document.getElementById("sidebar-user-name").textContent = state.userName || "";

  // ==================== TAB 1: TO-DO LIST ====================
  const todayInstances = ensureTodayTop3Instances();
  const top3ListEl = document.getElementById("todo-top3-list");
  top3ListEl.innerHTML = "";
  let top3DoneToday = 0;

  if (state.top3Goals.length === 0) {
    top3ListEl.innerHTML = `<div class="empty-text">${t("noTop3Daily")}</div>`;
  } else {
    todayInstances.forEach(inst => {
      const goal = state.top3Goals.find(g => g.id === inst.goalId);
      if (!goal) return;
      if (inst.done) top3DoneToday++;
      const sameGoalCount = todayInstances.filter(x => x.goalId === goal.id).length;
      const pctStr = formatPct(goal.stepsDone, 365);

      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="check-box ${inst.done ? "done" : ""}" data-inst-toggle="${inst.instanceId}">${inst.done ? "✓" : ""}</div>
        <div class="item-body">
          <span class="item-title ${inst.done ? "done" : ""}">${escapeHtml(goal.dailyTask)}</span>
          <span class="item-sub">★ ${escapeHtml(goal.title)} · <strong>${goal.stepsDone} / 365 ${t("stepsWord")} (${pctStr})</strong></span>
        </div>
        <div class="row-actions">
          <button type="button" class="btn btn-outline btn-xs" data-inst-dup="${inst.instanceId}" title="${t("duplicateBtn")}">⧉ ${t("duplicateBtn")}</button>
          ${sameGoalCount > 1 ? `<button type="button" class="del-btn" data-inst-del="${inst.instanceId}">✕</button>` : ""}
        </div>
      `;
      top3ListEl.appendChild(row);
    });
  }
  document.getElementById("top3-daily-counter").textContent = `${top3DoneToday} / ${todayInstances.length}`;

  // 1B. Goals List Incorporated into To-Do List (Main Priority)
  const todoGoalsEl = document.getElementById("todo-goals-list");
  todoGoalsEl.innerHTML = "";
  const activeGoals = state.timelineGoals.filter(g => {
    const m = getGoalStepMetrics(g);
    return m.remaining > 0;
  });

  if (activeGoals.length === 0) {
    todoGoalsEl.innerHTML = `<div class="empty-text">${t("noActiveGoalsTodo")}</div>`;
  } else {
    activeGoals.forEach(g => {
      const m = getGoalStepMetrics(g);
      const nextNamedStep = (g.steps || []).find(s => !s.done);
      const displayTitle = nextNamedStep ? nextNamedStep.text : g.title;

      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="check-box" data-todogoal-step="${g.id}"></div>
        <div class="item-body">
          <span class="item-title">${escapeHtml(displayTitle)}</span>
          <span class="item-sub">${horizonLabel(g.horizon)} · ${escapeHtml(g.title)} (${m.done}/${m.total} · ${m.pctStr})</span>
        </div>
        <div class="row-actions">
          <button type="button" class="btn btn-outline btn-xs" data-todogoal-dup="${g.id}" title="${t("duplicateBtn")}">⧉ +1</button>
        </div>
      `;
      todoGoalsEl.appendChild(row);
    });
  }

  // 1C. Secondary Priority Tasks
  const secListEl = document.getElementById("todo-secondary-list");
  secListEl.innerHTML = "";
  if (state.secondaryTasks.length === 0) {
    secListEl.innerHTML = `<div class="empty-text">${t("noSecondaryTasks")}</div>`;
  } else {
    state.secondaryTasks.forEach(task => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="check-box ${task.done ? "done" : ""}" data-sec-toggle="${task.id}">${task.done ? "✓" : ""}</div>
        <div class="item-body">
          <span class="item-title ${task.done ? "done" : ""}">${escapeHtml(task.title)}</span>
          <span class="item-sub">${t("secondaryBadge")}</span>
        </div>
        <div class="row-actions">
          <button type="button" class="btn btn-outline btn-xs" data-sec-dup="${task.id}">⧉</button>
          <button type="button" class="del-btn" data-sec-del="${task.id}">✕</button>
        </div>
      `;
      secListEl.appendChild(row);
    });
  }

  // ==================== TAB 2: SLEEP SETTINGS & SCHEDULE ====================
  const ss = state.sleepSettings;
  document.getElementById("sleep-target-badge").textContent = `${ss.targetHours}h (${ss.targetBed}–${ss.targetWake})`;
  document.getElementById("set-sleep-hours").value = ss.targetHours;
  document.getElementById("set-sleep-bed").value = ss.targetBed;
  document.getElementById("set-sleep-wake").value = ss.targetWake;

  const sleepWeekEl = document.getElementById("weekly-sleep-schedule-list");
  sleepWeekEl.innerHTML = "";
  DAYS_LIST.forEach(day => {
    const slot = ss.weeklySchedule[day] || { bed: ss.targetBed, wake: ss.targetWake };
    const hrs = calcSleepHours(slot.bed, slot.wake);
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <strong style="width:42px; font-size:13px;">${day}</strong>
      <input type="time" class="input-field sleep-day-bed" data-day="${day}" value="${slot.bed}" style="padding:6px 8px; max-width:115px;" />
      <span>→</span>
      <input type="time" class="input-field sleep-day-wake" data-day="${day}" value="${slot.wake}" style="padding:6px 8px; max-width:115px;" />
      <span class="badge badge-sleep" style="margin-inline-start:auto;">${hrs}h</span>
    `;
    sleepWeekEl.appendChild(row);
  });

  const sleepHistEl = document.getElementById("sleep-history-list");
  sleepHistEl.innerHTML = "";
  if (state.sleepLogs.length === 0) {
    sleepHistEl.innerHTML = `<div class="empty-text">${t("noSleepRecords")}</div>`;
  } else {
    state.sleepLogs.slice().reverse().forEach(log => {
      const metTarget = log.hours >= ss.targetHours;
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${log.hours}h (${log.bed} → ${log.wake})</span>
          <span class="item-sub">${escapeHtml(log.date)}</span>
        </div>
        <span class="badge ${metTarget ? "badge-accent" : "badge-sleep"}">${metTarget ? "✓ Target Met" : `${log.hours} / ${ss.targetHours}h`}</span>
        <button class="del-btn" data-sleep-del="${log.id}">✕</button>
      `;
      sleepHistEl.appendChild(row);
    });
  }

  // ==================== TAB 3: WEEKLY WORKOUT PLAN ====================
  const wkListEl = document.getElementById("weekly-workout-list");
  wkListEl.innerHTML = "";
  let totalCompletedMins = 0;
  let completedStrengthCount = 0;
  let plannedActiveDays = 0;
  let completedActiveDays = 0;

  DAYS_LIST.forEach(day => {
    const entry = state.weeklyWorkouts[day];
    if (entry.mins > 0) {
      plannedActiveDays++;
      if (entry.done) {
        completedActiveDays++;
        totalCompletedMins += entry.mins;
        if (entry.isStrength) completedStrengthCount++;
      }
    }

    const opts = WORKOUT_TYPES.map(w =>
      `<option value="${w.value}" ${w.value === entry.activity ? "selected" : ""}>${w.value}</option>`
    ).join("");

    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <div class="check-box ${entry.done ? "done" : ""}" data-wk-toggle="${day}">${entry.done ? "✓" : ""}</div>
      <strong style="width:40px; font-size:13px;">${day}</strong>
      <select class="input-field wk-type-select" data-day="${day}" style="padding:7px 10px;">
        ${opts}
      </select>
    `;
    wkListEl.appendChild(row);
  });

  const minsPct = Math.min(100, Math.round((totalCompletedMins / 150) * 100));
  const strPct = Math.min(100, Math.round((completedStrengthCount / 2) * 100));
  const planPct = plannedActiveDays ? Math.round((completedActiveDays / plannedActiveDays) * 100) : 0;
  const overallPct = Math.round((minsPct + strPct + planPct) / 3);

  document.getElementById("overall-workout-pct").textContent = `${overallPct}%`;
  document.getElementById("wk-minutes-pct").textContent = `${minsPct}%`;
  document.getElementById("wk-minutes-sub").textContent = `${totalCompletedMins} / 150 mins`;
  document.getElementById("wk-minutes-bar").style.width = `${minsPct}%`;

  document.getElementById("wk-strength-pct").textContent = `${strPct}%`;
  document.getElementById("wk-strength-sub").textContent = `${completedStrengthCount} / 2 sessions`;
  document.getElementById("wk-strength-bar").style.width = `${strPct}%`;

  document.getElementById("wk-plan-pct").textContent = `${planPct}%`;
  document.getElementById("wk-plan-sub").textContent = `${completedActiveDays} / ${plannedActiveDays} workouts done`;
  document.getElementById("wk-plan-bar").style.width = `${planPct}%`;

  // ==================== TAB 4: GOALS LIST & TIMELINE ====================
  document.querySelectorAll("#goal-filter-pills .pill-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.filter === currentGoalFilter);
  });

  const tlContainer = document.getElementById("timeline-goals-container");
  tlContainer.innerHTML = "";
  const filteredGoals = currentGoalFilter === "All"
    ? state.timelineGoals
    : state.timelineGoals.filter(g => g.horizon === currentGoalFilter);

  if (filteredGoals.length === 0) {
    tlContainer.innerHTML = `<div class="card empty-text">${t("noGoalsInFilter")}</div>`;
  } else {
    filteredGoals.forEach(g => {
      const m = getGoalStepMetrics(g);
      const isEditing = editingGoalId === g.id;

      let stepsHtml = "";
      (g.steps || []).forEach(st => {
        stepsHtml += `
          <div class="item-row" style="padding:8px 0;">
            <div class="check-box ${st.done ? "done" : ""}" data-step-toggle="${g.id}:${st.id}">${st.done ? "✓" : ""}</div>
            <div class="item-body"><span class="item-title ${st.done ? "done" : ""}">${escapeHtml(st.text)}</span></div>
            <div class="row-actions">
              <button type="button" class="btn btn-outline btn-xs" data-step-dup="${g.id}:${st.id}" title="${t("duplicateBtn")}">⧉</button>
              <button type="button" class="del-btn" data-step-del="${g.id}:${st.id}">✕</button>
            </div>
          </div>
        `;
      });

      const editPanelHtml = isEditing ? `
        <form class="edit-panel form-stack edit-goal-form" data-gid="${g.id}">
          <div class="form-row">
            <input type="text" class="input-field edit-g-title" value="${escapeHtml(g.title)}" required />
            <select class="input-field edit-g-horizon" style="max-width:155px;">
              <option value="Yearly" ${g.horizon === "Yearly" ? "selected" : ""}>${t("hYearly")}</option>
              <option value="6-Month" ${g.horizon === "6-Month" ? "selected" : ""}>${t("hSixMonth")}</option>
              <option value="3-Month" ${g.horizon === "3-Month" ? "selected" : ""}>${t("hThreeMonth")}</option>
              <option value="Monthly" ${g.horizon === "Monthly" ? "selected" : ""}>${t("hMonthly")}</option>
            </select>
          </div>
          <div class="form-row">
            <div style="flex:1;">
              <label class="eyebrow">${t("stepsRequired")}</label>
              <input type="number" class="input-field edit-g-total" min="1" max="3650" value="${g.totalSteps}" required />
            </div>
            <div style="flex:1;">
              <label class="eyebrow">${t("stepsDone")}</label>
              <input type="number" class="input-field edit-g-done" min="0" max="3650" value="${g.stepsDone || 0}" required />
            </div>
          </div>
          <div class="form-row">
            <button type="submit" class="btn btn-primary btn-sm">${t("saveBtn")}</button>
            <button type="button" class="btn btn-outline btn-sm cancel-edit-btn">${t("cancelBtn")}</button>
          </div>
        </form>
      ` : "";

      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header">
          <span class="badge badge-accent">${horizonLabel(g.horizon)}</span>
          <div class="row-actions">
            <button type="button" class="btn btn-outline btn-xs" data-tlgoal-step1="${g.id}">${t("checkStepBtn")}</button>
            <button type="button" class="btn btn-outline btn-xs" data-tlgoal-dup="${g.id}">⧉ ${t("duplicateBtn")}</button>
            <button type="button" class="btn btn-outline btn-xs" data-tlgoal-edit="${g.id}">${t("editBtn")}</button>
            <button type="button" class="del-btn" data-tlgoal-del="${g.id}">✕</button>
          </div>
        </div>

        ${editPanelHtml}

        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <h4 class="card-title">${escapeHtml(g.title)}</h4>
          <strong style="color:var(--accent); font-size:16px;">${m.pctStr}</strong>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${m.pctNum}%"></div></div>

        <div class="grid-3" style="margin:12px 0;">
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsRequired")}</span>
            <strong style="font-size:18px;">${m.total}</strong>
          </div>
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsDone")}</span>
            <strong style="font-size:18px; color:var(--accent);">${m.done}</strong>
          </div>
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsRemaining")}</span>
            <strong style="font-size:18px; color:var(--exer-color);">${m.remaining}</strong>
          </div>
        </div>

        <form class="form-row add-step-form" data-gid="${g.id}">
          <input type="text" class="input-field step-text-input" placeholder="${t("addStepPlaceholder")}" required />
          <button type="submit" class="btn btn-outline btn-sm">${t("addBtn")}</button>
        </form>
        <div class="item-list">${stepsHtml}</div>
      `;
      tlContainer.appendChild(card);
    });
  }

  // ==================== TAB 5: TOP 3 END-OF-YEAR GOALS (365 STEPS) ====================
  const count = state.top3Goals.length;
  document.getElementById("top3-slots-count").textContent = `${count} / 3`;
  const atLimit = count >= 3;
  document.getElementById("top3-add-btn").disabled = atLimit;
  document.getElementById("top3-goal-input").disabled = atLimit;
  document.getElementById("top3-daily-input").disabled = atLimit;
  document.getElementById("top3-limit-msg").style.display = atLimit ? "block" : "none";

  const top3CardsEl = document.getElementById("top3-cards-container");
  top3CardsEl.innerHTML = "";
  state.top3Goals.forEach((g, idx) => {
    const done = Number(g.stepsDone || 0);
    const pctStr = formatPct(done, 365);
    const pctNum = Math.min(100, (done / 365) * 100);

    const card = document.createElement("article");
    card.className = "card card-primary-goal";
    card.innerHTML = `
      <div class="card-header">
        <span class="badge badge-accent">#${idx + 1} · ${pctStr}</span>
        <button class="del-btn" data-top3-del="${g.id}">✕</button>
      </div>
      <h4 class="card-title" style="margin-bottom:6px;">${escapeHtml(g.title)}</h4>
      <div style="display:flex; justify-content:space-between; font-size:11.5px; color:var(--muted);">
        <span>${done} / 365 ${t("stepsWord")}</span>
        <strong style="color:var(--accent);">${pctStr}</strong>
      </div>
      <div class="progress-track"><div class="progress-fill" style="width:${pctNum}%"></div></div>
      <div style="background:var(--surface-2); padding:10px; border-radius:10px; font-size:12px; margin-top:8px;">
        <span class="eyebrow" style="display:block; margin-bottom:2px;">${t("dailyTaskLabel")}</span>
        <strong>${escapeHtml(g.dailyTask)}</strong>
      </div>
    `;
    top3CardsEl.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // Onboarding
  document.getElementById("onboard-lang").addEventListener("change", e => {
    state.lang = e.target.value;
    saveState();
  });

  document.getElementById("onboarding-form").addEventListener("submit", e => {
    e.preventDefault();
    const userName = document.getElementById("onboard-name").value.trim();
    const topGoal = document.getElementById("onboard-top-goal").value.trim();
    const dailyStep = document.getElementById("onboard-daily-step").value.trim();

    state.userName = userName;
    state.onboarded = true;
    state.top3Goals = [{ id: Date.now(), title: topGoal, dailyTask: dailyStep, stepsDone: 0, totalSteps: 365 }];
    state.timelineGoals = [{
      id: Date.now() + 1,
      title: topGoal,
      horizon: "Yearly",
      totalSteps: 365,
      stepsDone: 0,
      steps: []
    }];
    saveState();
  });

  // Navigation
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.page));
  });
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.goto));
  });

  // Global Language & Theme
  document.getElementById("global-lang-select").addEventListener("change", e => {
    state.lang = e.target.value;
    saveState();
  });
  document.getElementById("global-theme-select").addEventListener("change", e => {
    state.theme = e.target.value;
    saveState();
  });

  // ==================== TAB 1 EVENTS ====================
  // Top 3 Daily Instances: Check / Duplicate / Delete extra duplicate
  document.getElementById("todo-top3-list").addEventListener("click", e => {
    const tk = todayKey();
    const list = state.top3DailyInstances[tk] || [];

    const checkBtn = e.target.closest("[data-inst-toggle]");
    if (checkBtn) {
      const instId = Number(checkBtn.dataset.instToggle);
      const inst = list.find(x => x.instanceId === instId);
      if (inst) {
        const goal = state.top3Goals.find(g => g.id === inst.goalId);
        inst.done = !inst.done;
        if (goal) {
          goal.stepsDone = Math.max(0, Math.min(365, (goal.stepsDone || 0) + (inst.done ? 1 : -1)));
        }
        saveState();
      }
      return;
    }

    const dupBtn = e.target.closest("[data-inst-dup]");
    if (dupBtn) {
      const instId = Number(dupBtn.dataset.instDup);
      const idx = list.findIndex(x => x.instanceId === instId);
      if (idx !== -1) {
        const orig = list[idx];
        const copy = {
          instanceId: Date.now() + Math.floor(Math.random() * 10000),
          goalId: orig.goalId,
          done: false
        };
        list.splice(idx + 1, 0, copy);
        state.top3DailyInstances[tk] = list;
        saveState();
      }
      return;
    }

    const delBtn = e.target.closest("[data-inst-del]");
    if (delBtn) {
      const instId = Number(delBtn.dataset.instDel);
      const inst = list.find(x => x.instanceId === instId);
      if (inst) {
        if (inst.done) {
          const goal = state.top3Goals.find(g => g.id === inst.goalId);
          if (goal) goal.stepsDone = Math.max(0, (goal.stepsDone || 0) - 1);
        }
        state.top3DailyInstances[tk] = list.filter(x => x.instanceId !== instId);
        saveState();
      }
    }
  });

  // Tab 1: Active Goals Check (+1 step) & Duplicate (+1 extra step today)
  document.getElementById("todo-goals-list").addEventListener("click", e => {
    const stepBtn = e.target.closest("[data-todogoal-step]");
    if (stepBtn) {
      const gid = Number(stepBtn.dataset.todogoalStep);
      const goal = state.timelineGoals.find(g => g.id === gid);
      if (goal) {
        const nextNamed = (goal.steps || []).find(s => !s.done);
        if (nextNamed) {
          nextNamed.done = true;
        } else {
          goal.stepsDone = Math.min(goal.totalSteps, (goal.stepsDone || 0) + 1);
        }
        saveState();
      }
      return;
    }

    const dupBtn = e.target.closest("[data-todogoal-dup]");
    if (dupBtn) {
      const gid = Number(dupBtn.dataset.todogoalDup);
      const goal = state.timelineGoals.find(g => g.id === gid);
      if (goal) {
        goal.stepsDone = Math.min(goal.totalSteps, (goal.stepsDone || 0) + 1);
        saveState();
      }
    }
  });

  // Tab 1: Secondary Tasks (Add, Toggle, Duplicate, Delete)
  document.getElementById("add-secondary-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("secondary-task-input");
    if (!input.value.trim()) return;
    state.secondaryTasks.push({ id: Date.now(), title: input.value.trim(), done: false });
    input.value = "";
    saveState();
  });

  document.getElementById("todo-secondary-list").addEventListener("click", e => {
    const box = e.target.closest("[data-sec-toggle]");
    if (box) {
      const task = state.secondaryTasks.find(x => x.id === Number(box.dataset.secToggle));
      if (task) { task.done = !task.done; saveState(); }
      return;
    }
    const dup = e.target.closest("[data-sec-dup]");
    if (dup) {
      const idx = state.secondaryTasks.findIndex(x => x.id === Number(dup.dataset.secDup));
      if (idx !== -1) {
        const orig = state.secondaryTasks[idx];
        state.secondaryTasks.splice(idx + 1, 0, { id: Date.now(), title: orig.title, done: false });
        saveState();
      }
      return;
    }
    const del = e.target.closest("[data-sec-del]");
    if (del) {
      state.secondaryTasks = state.secondaryTasks.filter(x => x.id !== Number(del.dataset.secDel));
      saveState();
    }
  });

  // ==================== TAB 2 EVENTS (SLEEP) ====================
  document.getElementById("sleep-settings-form").addEventListener("submit", e => {
    e.preventDefault();
    const hrs = Number(document.getElementById("set-sleep-hours").value) || 8;
    const bed = document.getElementById("set-sleep-bed").value || "23:00";
    const wake = document.getElementById("set-sleep-wake").value || "07:00";
    state.sleepSettings.targetHours = hrs;
    state.sleepSettings.targetBed = bed;
    state.sleepSettings.targetWake = wake;
    DAYS_LIST.forEach(d => {
      state.sleepSettings.weeklySchedule[d] = { bed, wake };
    });
    saveState();
  });

  document.getElementById("weekly-sleep-schedule-list").addEventListener("change", e => {
    const bedIn = e.target.closest(".sleep-day-bed");
    if (bedIn) {
      state.sleepSettings.weeklySchedule[bedIn.dataset.day].bed = bedIn.value;
      saveState();
    }
    const wakeIn = e.target.closest(".sleep-day-wake");
    if (wakeIn) {
      state.sleepSettings.weeklySchedule[wakeIn.dataset.day].wake = wakeIn.value;
      saveState();
    }
  });

  document.getElementById("log-sleep-form").addEventListener("submit", e => {
    e.preventDefault();
    const bed = document.getElementById("log-bed").value;
    const wake = document.getElementById("log-wake").value;
    const hours = calcSleepHours(bed, wake);
    state.sleepLogs.push({ id: Date.now(), bed, wake, hours, date: new Date().toLocaleDateString() });
    saveState();
  });

  document.getElementById("sleep-history-list").addEventListener("click", e => {
    const del = e.target.closest("[data-sleep-del]");
    if (del) {
      state.sleepLogs = state.sleepLogs.filter(x => x.id !== Number(del.dataset.sleepDel));
      saveState();
    }
  });

  // ==================== TAB 3 EVENTS (WORKOUT) ====================
  document.getElementById("weekly-workout-list").addEventListener("click", e => {
    const box = e.target.closest("[data-wk-toggle]");
    if (box) {
      const day = box.dataset.wkToggle;
      state.weeklyWorkouts[day].done = !state.weeklyWorkouts[day].done;
      saveState();
    }
  });

  document.getElementById("weekly-workout-list").addEventListener("change", e => {
    const sel = e.target.closest(".wk-type-select");
    if (sel) {
      const day = sel.dataset.day;
      const found = WORKOUT_TYPES.find(w => w.value === sel.value) || WORKOUT_TYPES[0];
      state.weeklyWorkouts[day] = {
        activity: found.value,
        mins: found.mins,
        isStrength: found.isStrength,
        done: false
      };
      saveState();
    }
  });

  // ==================== TAB 4 EVENTS (GOALS & TIMELINE) ====================
  // Auto-suggest step count when changing timeline horizon
  document.getElementById("tl-goal-horizon").addEventListener("change", e => {
    document.getElementById("tl-goal-steps").value = defaultStepsForHorizon(e.target.value);
  });

  document.getElementById("add-timeline-goal-form").addEventListener("submit", e => {
    e.preventDefault();
    const titleIn = document.getElementById("tl-goal-title");
    const horizon = document.getElementById("tl-goal-horizon").value;
    const totalSteps = Math.max(1, Number(document.getElementById("tl-goal-steps").value) || defaultStepsForHorizon(horizon));
    if (!titleIn.value.trim()) return;

    state.timelineGoals.push({
      id: Date.now(),
      title: titleIn.value.trim(),
      horizon,
      totalSteps,
      stepsDone: 0,
      steps: []
    });
    titleIn.value = "";
    saveState();
  });

  document.getElementById("goal-filter-pills").addEventListener("click", e => {
    const pill = e.target.closest("[data-filter]");
    if (pill) {
      currentGoalFilter = pill.dataset.filter;
      renderAll();
    }
  });

  document.getElementById("timeline-goals-container").addEventListener("submit", e => {
    // Save Edited Goal
    const editForm = e.target.closest(".edit-goal-form");
    if (editForm) {
      e.preventDefault();
      const gid = Number(editForm.dataset.gid);
      const goal = state.timelineGoals.find(g => g.id === gid);
      if (goal) {
        goal.title = editForm.querySelector(".edit-g-title").value.trim() || goal.title;
        goal.horizon = editForm.querySelector(".edit-g-horizon").value;
        goal.totalSteps = Math.max(1, Number(editForm.querySelector(".edit-g-total").value) || goal.totalSteps);
        goal.stepsDone = Math.max(0, Math.min(goal.totalSteps, Number(editForm.querySelector(".edit-g-done").value) || 0));
        editingGoalId = null;
        saveState();
      }
      return;
    }

    // Add Named Milestone Step
    const stepForm = e.target.closest(".add-step-form");
    if (stepForm) {
      e.preventDefault();
      const goal = state.timelineGoals.find(g => g.id === Number(stepForm.dataset.gid));
      const input = stepForm.querySelector(".step-text-input");
      if (goal && input.value.trim()) {
        goal.steps = goal.steps || [];
        goal.steps.push({ id: Date.now(), text: input.value.trim(), done: false });
        saveState();
      }
    }
  });

  document.getElementById("timeline-goals-container").addEventListener("click", e => {
    // +1 Step on Goal
    const step1Btn = e.target.closest("[data-tlgoal-step1]");
    if (step1Btn) {
      const goal = state.timelineGoals.find(g => g.id === Number(step1Btn.dataset.tlgoalStep1));
      if (goal) {
        goal.stepsDone = Math.min(goal.totalSteps, (goal.stepsDone || 0) + 1);
        saveState();
      }
      return;
    }

    // Duplicate Step on Goal (+1 extra step done)
    const dupGoalBtn = e.target.closest("[data-tlgoal-dup]");
    if (dupGoalBtn) {
      const goal = state.timelineGoals.find(g => g.id === Number(dupGoalBtn.dataset.tlgoalDup));
      if (goal) {
        goal.stepsDone = Math.min(goal.totalSteps, (goal.stepsDone || 0) + 1);
        saveState();
      }
      return;
    }

    // Toggle Edit Panel
    const editBtn = e.target.closest("[data-tlgoal-edit]");
    if (editBtn) {
      const gid = Number(editBtn.dataset.tlgoalEdit);
      editingGoalId = editingGoalId === gid ? null : gid;
      renderAll();
      return;
    }

    if (e.target.closest(".cancel-edit-btn")) {
      editingGoalId = null;
      renderAll();
      return;
    }

    // Delete Goal
    const gDel = e.target.closest("[data-tlgoal-del]");
    if (gDel) {
      state.timelineGoals = state.timelineGoals.filter(g => g.id !== Number(gDel.dataset.tlgoalDel));
      saveState();
      return;
    }

    // Named Step Check / Duplicate / Delete
    const stToggle = e.target.closest("[data-step-toggle]");
    if (stToggle) {
      const [gid, sid] = stToggle.dataset.stepToggle.split(":").map(Number);
      const goal = state.timelineGoals.find(g => g.id === gid);
      const step = goal?.steps?.find(s => s.id === sid);
      if (step) { step.done = !step.done; saveState(); }
      return;
    }

    const stDup = e.target.closest("[data-step-dup]");
    if (stDup) {
      const [gid, sid] = stDup.dataset.stepDup.split(":").map(Number);
      const goal = state.timelineGoals.find(g => g.id === gid);
      const idx = goal?.steps?.findIndex(s => s.id === sid);
      if (goal && idx !== -1) {
        const orig = goal.steps[idx];
        goal.steps.splice(idx + 1, 0, { id: Date.now(), text: orig.text, done: false });
        saveState();
      }
      return;
    }

    const stDel = e.target.closest("[data-step-del]");
    if (stDel) {
      const [gid, sid] = stDel.dataset.stepDel.split(":").map(Number);
      const goal = state.timelineGoals.find(g => g.id === gid);
      if (goal?.steps) {
        goal.steps = goal.steps.filter(s => s.id !== sid);
        saveState();
      }
    }
  });

  // ==================== TAB 5 EVENTS (TOP 3 END-OF-YEAR GOALS) ====================
  document.getElementById("add-top3-form").addEventListener("submit", e => {
    e.preventDefault();
    if (state.top3Goals.length >= 3) return;
    const goalIn = document.getElementById("top3-goal-input");
    const dailyIn = document.getElementById("top3-daily-input");
    if (!goalIn.value.trim() || !dailyIn.value.trim()) return;

    state.top3Goals.push({
      id: Date.now(),
      title: goalIn.value.trim(),
      dailyTask: dailyIn.value.trim(),
      stepsDone: 0,
      totalSteps: 365
    });
    goalIn.value = "";
    dailyIn.value = "";
    saveState();
  });

  document.getElementById("top3-cards-container").addEventListener("click", e => {
    const del = e.target.closest("[data-top3-del]");
    if (del) {
      state.top3Goals = state.top3Goals.filter(g => g.id !== Number(del.dataset.top3Del));
      saveState();
    }
  });

  // Backup & Reset
  document.getElementById("export-json-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "sahand-icando-backup.json";
    a.click();
  });

  document.getElementById("reset-app-btn").addEventListener("click", () => {
    if (confirm(t("confirmReset"))) {
      localStorage.removeItem(STORAGE_KEY);
      state = createInitialState();
      saveState();
    }
  });

  renderAll();
});
