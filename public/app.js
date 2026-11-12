const STORAGE_KEY = "sahand_icando_v3_rebuilt";

const i18n = {
  en: {
    welcomeTitle: "Welcome to I CanDo",
    welcomeSub: "Enter your name and your #1 End-of-Year Goal to build your daily schedule.",
    askNameLabel: "YOUR NAME",
    askNamePlaceholder: "Your name...",
    askTopGoalLabel: "#1 END-OF-YEAR GOAL",
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
    mandatoryBadge: "MANDATORY DAILY SCHEDULE",
    top3DailyTitle: "Top 3 End-of-Year Goals — Daily Actions",
    top3DailySub: "Tasks linked to your Top 3 Goals are included in your daily schedule every single day.",
    mainPriorityBadge: "MAIN PRIORITY",
    goalsInTodoTitle: "Goals List (Main Priorities)",
    manageGoalsBtn: "Goals →",
    secondaryBadge: "SECONDARY PRIORITY",
    secondaryTasksTitle: "Other Tasks (Less Important)",
    secondaryPlaceholder: "Add secondary priority task...",
    addBtn: "Add",
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
    addGoalBtn: "Add Goal",
    filterAll: "All",
    hYearly: "Yearly",
    hSixMonth: "6-Month",
    hThreeMonth: "3-Month",
    hMonthly: "Monthly",
    stepsRequired: "Steps Required",
    stepsDone: "Completed",
    stepsRemaining: "Remaining",
    addStepPlaceholder: "Add required step...",
    noGoalsInFilter: "No goals in this timeline yet.",
    strictLimitBadge: "STRICT LIMIT: MAX 3 GOALS",
    top3HeaderTitle: "Top 3 End-of-Year Goals",
    top3Explain: "You can never have more than three End-of-Year Goals. Tasks related to these three goals are automatically added to your daily schedule every single day.",
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
    welcomeSub: "نام خود و اولین هدف مهم پایان سال را وارد کنید تا برنامه‌ی روزانه‌ی شما ساخته شود.",
    askNameLabel: "نام شما",
    askNamePlaceholder: "نام خود را بنویسید...",
    askTopGoalLabel: "مهم‌ترین هدف پایان سال",
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
    mandatoryBadge: "الزامی در برنامه‌ی هر روز",
    top3DailyTitle: "کارهای روزانه‌ی ۳ هدف برتر پایان سال",
    top3DailySub: "کارهای مرتبط با ۳ هدف اصلی شما هر روز به‌صورت خودکار در برنامه‌ی روزانه قرار می‌گیرند.",
    mainPriorityBadge: "اولویت اصلی",
    goalsInTodoTitle: "اهداف فعال (اولویت بالا)",
    manageGoalsBtn: "مدیریت اهداف ←",
    secondaryBadge: "اولویت فرعی (اهمیت کمتر)",
    secondaryTasksTitle: "سایر کارهای روزمره",
    secondaryPlaceholder: "افزودن کار با اولویت فرعی...",
    addBtn: "افزودن",
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
    addGoalBtn: "افزودن هدف",
    filterAll: "همه",
    hYearly: "سالانه",
    hSixMonth: "شش‌ماهه",
    hThreeMonth: "سه‌ماهه",
    hMonthly: "ماهانه",
    stepsRequired: "مراحل مورد نیاز",
    stepsDone: "انجام‌شده",
    stepsRemaining: "باقی‌مانده",
    addStepPlaceholder: "افزودن مرحله‌ی جدید...",
    noGoalsInFilter: "هدفی در این بازه‌ی زمانی ثبت نشده است.",
    strictLimitBadge: "حداکثر ۳ هدف",
    top3HeaderTitle: "۳ هدف برتر پایان سال من",
    top3Explain: "شما هرگز نمی‌توانید بیشتر از ۳ هدف پایان سال داشته باشید. کارهای مرتبط با این ۳ هدف هر روز در لیست کارهای شما قرار می‌گیرند.",
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

function todayKey() {
  return new Date().toISOString().slice(0, 10);
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
    // Tab 5: Top 3 End-of-Year Goals (Max 3)
    top3Goals: [],
    top3DailyChecked: {}, // { "YYYY-MM-DD": [goalId1, goalId2] }
    // Tab 4: Goals List & Timeline (Yearly, 6-Month, 3-Month, Monthly)
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
    return {
      ...base,
      ...parsed,
      sleepSettings: {
        ...base.sleepSettings,
        ...(parsed.sleepSettings || {}),
        weeklySchedule: { ...base.sleepSettings.weeklySchedule, ...(parsed.sleepSettings?.weeklySchedule || {}) }
      },
      weeklyWorkouts: { ...base.weeklyWorkouts, ...(parsed.weeklyWorkouts || {}) }
    };
  } catch (_) {
    return createInitialState();
  }
}

let state = loadState();
let currentPage = "todo";
let currentGoalFilter = "All";

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
  return String(str || "").replace(/&/g, "&").replace(/</g, "<").replace(/>/g, ">");
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
  // 1A. Mandatory Daily Tasks from Top 3 End-of-Year Goals
  const top3ListEl = document.getElementById("todo-top3-list");
  top3ListEl.innerHTML = "";
  const checkedToday = state.top3DailyChecked[tk] || [];
  let top3DoneCount = 0;

  if (state.top3Goals.length === 0) {
    top3ListEl.innerHTML = `<div class="empty-text">${t("noTop3Daily")}</div>`;
  } else {
    state.top3Goals.forEach(g => {
      const isDone = checkedToday.includes(g.id);
      if (isDone) top3DoneCount++;
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="check-box ${isDone ? "done" : ""}" data-top3-check="${g.id}">${isDone ? "✓" : ""}</div>
        <div class="item-body">
          <span class="item-title ${isDone ? "done" : ""}">${escapeHtml(g.dailyTask)}</span>
          <span class="item-sub">★ ${escapeHtml(g.title)}</span>
        </div>
      `;
      top3ListEl.appendChild(row);
    });
  }
  document.getElementById("top3-daily-counter").textContent = `${top3DoneCount} / ${state.top3Goals.length}`;

  // 1B. Goals List Incorporated into To-Do List (Main Priority)
  const todoGoalsEl = document.getElementById("todo-goals-list");
  todoGoalsEl.innerHTML = "";
  const activeGoals = state.timelineGoals.filter(g => {
    const steps = g.steps || [];
    return steps.length === 0 || steps.some(s => !s.done);
  });

  if (activeGoals.length === 0) {
    todoGoalsEl.innerHTML = `<div class="empty-text">${t("noActiveGoalsTodo")}</div>`;
  } else {
    activeGoals.forEach(g => {
      const steps = g.steps || [];
      const doneSteps = steps.filter(s => s.done).length;
      const nextStep = steps.find(s => !s.done);
      const pct = steps.length ? Math.round((doneSteps / steps.length) * 100) : 0;

      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        ${nextStep
          ? `<div class="check-box" data-todostep-toggle="${g.id}:${nextStep.id}"></div>`
          : `<span class="badge badge-accent">◎</span>`
        }
        <div class="item-body">
          <span class="item-title">${escapeHtml(nextStep ? nextStep.text : g.title)}</span>
          <span class="item-sub">${horizonLabel(g.horizon)} · ${escapeHtml(g.title)} (${pct}%)</span>
        </div>
        <span class="badge badge-accent">${doneSteps}/${steps.length}</span>
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
        <button class="del-btn" data-sec-del="${task.id}">✕</button>
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
    const isRest = entry.mins === 0;
    if (!isRest) {
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

  // Recommended Physical Health Benchmarks: 150 active mins/week & 2 strength sessions/week
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
      const steps = g.steps || [];
      const totalSteps = steps.length;
      const doneSteps = steps.filter(s => s.done).length;
      const remainingSteps = totalSteps - doneSteps;
      const pct = totalSteps ? Math.round((doneSteps / totalSteps) * 100) : 0;

      let stepsHtml = "";
      steps.forEach(st => {
        stepsHtml += `
          <div class="item-row" style="padding:8px 0;">
            <div class="check-box ${st.done ? "done" : ""}" data-step-toggle="${g.id}:${st.id}">${st.done ? "✓" : ""}</div>
            <div class="item-body"><span class="item-title ${st.done ? "done" : ""}">${escapeHtml(st.text)}</span></div>
            <button class="del-btn" data-step-del="${g.id}:${st.id}">✕</button>
          </div>
        `;
      });

      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header">
          <span class="badge badge-accent">${horizonLabel(g.horizon)}</span>
          <button class="del-btn" data-tlgoal-del="${g.id}">✕</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">
          <h4 class="card-title">${escapeHtml(g.title)}</h4>
          <strong style="color:var(--accent); font-size:15px;">${pct}%</strong>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>

        <div class="grid-3" style="margin:12px 0;">
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsRequired")}</span>
            <strong style="font-size:18px;">${totalSteps}</strong>
          </div>
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsDone")}</span>
            <strong style="font-size:18px; color:var(--accent);">${doneSteps}</strong>
          </div>
          <div class="stat-box" style="padding:10px;">
            <span class="eyebrow">${t("stepsRemaining")}</span>
            <strong style="font-size:18px; color:var(--exer-color);">${remainingSteps}</strong>
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

  // ==================== TAB 5: TOP 3 END-OF-YEAR GOALS ====================
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
    const card = document.createElement("article");
    card.className = "card card-primary-goal";
    card.innerHTML = `
      <div class="card-header">
        <span class="badge badge-accent">#${idx + 1}</span>
        <button class="del-btn" data-top3-del="${g.id}">✕</button>
      </div>
      <h4 class="card-title" style="margin-bottom:8px;">${escapeHtml(g.title)}</h4>
      <div style="background:var(--surface-2); padding:10px; border-radius:10px; font-size:12px;">
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
    state.top3Goals = [{ id: Date.now(), title: topGoal, dailyTask: dailyStep }];
    state.timelineGoals = [{
      id: Date.now() + 1,
      title: topGoal,
      horizon: "Yearly",
      steps: [{ id: Date.now() + 2, text: dailyStep, done: false }]
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

  // Tab 1: Top 3 Daily Checkboxes
  document.getElementById("todo-top3-list").addEventListener("click", e => {
    const box = e.target.closest("[data-top3-check]");
    if (box) {
      const id = Number(box.dataset.top3Check);
      const tk = todayKey();
      const arr = state.top3DailyChecked[tk] || [];
      state.top3DailyChecked[tk] = arr.includes(id) ? arr.filter(x => x !== id) : [...arr, id];
      saveState();
    }
  });

  // Tab 1: Complete Next Step of a Goal from To-Do List
  document.getElementById("todo-goals-list").addEventListener("click", e => {
    const box = e.target.closest("[data-todostep-toggle]");
    if (box) {
      const [gid, sid] = box.dataset.todostepToggle.split(":").map(Number);
      const goal = state.timelineGoals.find(g => g.id === gid);
      const step = goal?.steps?.find(s => s.id === sid);
      if (step) { step.done = true; saveState(); }
    }
  });

  // Tab 1: Secondary Tasks
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
    }
    const del = e.target.closest("[data-sec-del]");
    if (del) {
      state.secondaryTasks = state.secondaryTasks.filter(x => x.id !== Number(del.dataset.secDel));
      saveState();
    }
  });

  // Tab 2: Sleep Settings & Schedule
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

  // Tab 3: Weekly Workout Plan
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

  // Tab 4: Goals List & Timeline
  document.getElementById("add-timeline-goal-form").addEventListener("submit", e => {
    e.preventDefault();
    const titleIn = document.getElementById("tl-goal-title");
    const horizon = document.getElementById("tl-goal-horizon").value;
    if (!titleIn.value.trim()) return;
    state.timelineGoals.push({ id: Date.now(), title: titleIn.value.trim(), horizon, steps: [] });
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
    const form = e.target.closest(".add-step-form");
    if (form) {
      e.preventDefault();
      const goal = state.timelineGoals.find(g => g.id === Number(form.dataset.gid));
      const input = form.querySelector(".step-text-input");
      if (goal && input.value.trim()) {
        goal.steps = goal.steps || [];
        goal.steps.push({ id: Date.now(), text: input.value.trim(), done: false });
        saveState();
      }
    }
  });

  document.getElementById("timeline-goals-container").addEventListener("click", e => {
    const gDel = e.target.closest("[data-tlgoal-del]");
    if (gDel) {
      state.timelineGoals = state.timelineGoals.filter(g => g.id !== Number(gDel.dataset.tlgoalDel));
      saveState();
    }
    const stToggle = e.target.closest("[data-step-toggle]");
    if (stToggle) {
      const [gid, sid] = stToggle.dataset.stepToggle.split(":").map(Number);
      const goal = state.timelineGoals.find(g => g.id === gid);
      const step = goal?.steps?.find(s => s.id === sid);
      if (step) { step.done = !step.done; saveState(); }
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

  // Tab 5: Top 3 End-of-Year Goals (Enforces max 3)
  document.getElementById("add-top3-form").addEventListener("submit", e => {
    e.preventDefault();
    if (state.top3Goals.length >= 3) return;
    const goalIn = document.getElementById("top3-goal-input");
    const dailyIn = document.getElementById("top3-daily-input");
    if (!goalIn.value.trim() || !dailyIn.value.trim()) return;

    state.top3Goals.push({
      id: Date.now(),
      title: goalIn.value.trim(),
      dailyTask: dailyIn.value.trim()
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
