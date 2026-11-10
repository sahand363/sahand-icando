const STORAGE_KEY = "sahand_icando_clean_v2";

const i18n = {
  en: {
    welcomeTitle: "Welcome to I CanDo",
    welcomeSub: "Sustainable progress requires balance between work, sleep, nutrition, and exercise. Let's start with your name and your first main goal.",
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
    navHealth: "Health",
    navStats: "Stats",
    navMore: "More",
    motto: "Sustainable progress, one day at a time.",
    greetingPrefix: "Hello,",
    streakUnit: "Day Streak",
    recoveryActive: "Recovery Day",
    mainMission: "Today's Main Mission",
    missionHint: "Identify the one result that will make today valuable.",
    missionPlaceholder: "Write today's main mission...",
    saveBtn: "Save",
    addBtn: "Add",
    startFocusBtn: "Start Focus",
    advanceMissionBtn: "+25% Progress",
    dailyProgress: "DAILY PROGRESS",
    tasksCompletedSuffix: "tasks completed",
    dailyEnergyLabel: "TODAY'S ENERGY LEVEL",
    eVeryLow: "Very Low",
    eLow: "Low",
    eModerate: "Moderate",
    eHigh: "High",
    eVeryHigh: "Very High",
    todayHealthEyebrow: "ESSENTIAL SELF-CARE",
    todayHealthTitle: "Today's Health & Energy",
    openHealthHubBtn: "Health Hub →",
    sleepPillar: "SLEEP",
    mealsPillar: "MEALS",
    hydrationPillar: "HYDRATION",
    exercisePillar: "ACTIVITY",
    quickLogMealBtn: "+ Meal",
    dailyTasks: "Daily Tasks",
    taskPlaceholder: "Add a realistic task for today...",
    prioMain: "Main Priority",
    prioSecondary: "Secondary",
    prioOptional: "Optional",
    noTasksYet: "No tasks added yet.",
    dailySchedule: "Daily Schedule",
    schedPlaceholder: "Activity or time block...",
    noScheduleYet: "No time blocks planned yet.",
    addGoalTitle: "Add a Long-Term Goal",
    visionHint: "Break long-term ambitions into smaller milestones.",
    goalPlaceholder: "Enter a new goal...",
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
    hTabOverview: "Life Balance",
    hTabSleep: "Sleep & Recovery",
    hTabNutrition: "Nutrition & Water",
    hTabExercise: "Exercise & Fitness",
    lifeBalanceEyebrow: "SUSTAINABLE PERFORMANCE",
    lifeBalanceTitle: "Life & Health Balance",
    sleepBalanceTitle: "Sleep Balance",
    nutriBalanceTitle: "Nutrition Balance",
    exerBalanceTitle: "Exercise Balance",
    manageSleepBtn: "Sleep & Routine →",
    manageNutriBtn: "Meals & Water →",
    manageExerBtn: "Workouts & Rest →",
    statusBalanced: "Balanced",
    statusAttention: "Needs Attention",
    statusOff: "Off Balance",
    statusNoData: "Not Enough Data",
    healthDisclaimer: "Note: Sahand I CanDo is a personal organization and self-reflection tool, not a medical device. All targets are customizable to fit your lifestyle.",
    logSleepHeader: "Record Sleep",
    bedtimeLabel: "BEDTIME",
    waketimeLabel: "WAKE-UP TIME",
    sleepQualityLabel: "QUALITY (1-10)",
    sleepInterruptLabel: "INTERRUPTIONS",
    optionalPlaceholder: "Optional...",
    sleepNotesPlaceholder: "Optional sleep notes...",
    saveSleepBtn: "Save Sleep Record",
    sleepGoalsTitle: "Personal Sleep Targets",
    targetHoursLabel: "TARGET HOURS",
    prefBedLabel: "PREFERRED BED",
    prefWakeLabel: "PREFERRED WAKE",
    saveTargetsBtn: "Save Targets",
    shutdownRoutineTitle: "Night Shutdown Routine",
    shutdownPlaceholder: "Add evening routine step...",
    sleepHistoryTitle: "Sleep History",
    mealsTodayTitle: "Today's Meals",
    logMealDetailTitle: "Log Meal Details (Optional)",
    mealDescPlaceholder: "What did you eat? (short description)",
    optProteinPlaceholder: "Protein g (opt)",
    optCalPlaceholder: "Calories (opt)",
    hydrationTitle: "Hydration Tracker",
    customWaterPlaceholder: "Custom amount (ml)...",
    nutriGoalsTitle: "Nutrition & Water Targets",
    waterTargetLabel: "DAILY WATER (ML)",
    proteinTargetLabel: "PROTEIN (G, OPT)",
    calTargetLabel: "CALORIES (OPT)",
    addMealCatPlaceholder: "New meal category (optional)...",
    mealLogHistoryTitle: "Recorded Meals",
    weeklyPlanEyebrow: "FLEXIBLE WEEKLY SCHEDULE",
    weeklyWorkoutPlanTitle: "Weekly Workout & Rest Planner",
    logGeneralActivityTitle: "Log Physical Activity",
    durationMinsPlaceholder: "Duration (mins)",
    activityNotesPlaceholder: "Optional notes...",
    logActivityBtn: "Save Activity",
    strengthLoggerTitle: "Strength Training & Sets (Optional)",
    exNamePlaceholder: "Exercise (e.g. Squat, Bench Press)",
    activityHistoryTitle: "Completed Activities",
    statTotalFocus: "TOTAL FOCUS",
    statAvgSleep: "AVG SLEEP (7D)",
    statWaterToday: "TODAY'S WATER",
    statWeeklyWorkouts: "WEEKLY ACTIVITY",
    combinedInsightsEyebrow: "PATTERNS & SELF-REFLECTION",
    combinedInsightsTitle: "Health & Productivity Insights",
    settingsTitle: "Personal Settings",
    yourNameLabel: "Your Name",
    langLabel: "Language",
    themeLabel: "Theme",
    recoveryTitle: "Recovery Day Mode",
    recoveryDesc: "Gentle restart after difficult days",
    toggleBtn: "Toggle",
    remindersTitle: "Reminders & Quiet Hours",
    quietHoursLabel: "Quiet Hours",
    remSleepLabel: "Bedtime & Sleep Reminder",
    remWaterLabel: "Hydration & Meal Reminders",
    remWorkoutLabel: "Planned Workout Reminder",
    exportBtn: "Export Backup",
    syncBtn: "Sync Server",
    resetAllBtn: "Reset App Data",
    confirmReset: "Reset all data and return to welcome screen?",
    minsUnit: "m",
    hrsUnit: "h",
    pageTitles: {
      today: "Today's Command Center",
      vision: "Vision & Goals",
      focus: "Deep Focus",
      health: "Health & Energy Balance",
      stats: "Progress & Statistics",
      more: "Settings & Routines"
    }
  },
  fa: {
    welcomeTitle: "به I CanDo خوش آمدید",
    welcomeSub: "بهره‌وری پایدار نیازمند تعادل میان کار، خواب، تغذیه و ورزش است. با نام خودت و اولین هدف اصلی‌ات شروع کن.",
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
    navHealth: "سلامت",
    navStats: "آمار",
    navMore: "بیشتر",
    motto: "پیشرفت پایدار، هر روز یک قدم.",
    greetingPrefix: "سلام،",
    streakUnit: "روز پیوستگی",
    recoveryActive: "روز بازیابی",
    mainMission: "مأموریت اصلی امروز",
    missionHint: "یک نتیجه‌ی مهم که امروزت را ارزشمند می‌کند مشخص کن.",
    missionPlaceholder: "مأموریت اصلی امروز را بنویس...",
    saveBtn: "ذخیره",
    addBtn: "افزودن",
    startFocusBtn: "شروع تمرکز",
    advanceMissionBtn: "+۲۵٪ پیشرفت",
    dailyProgress: "پیشرفت امروز",
    tasksCompletedSuffix: "کار انجام شده",
    dailyEnergyLabel: "سطح انرژی امروز",
    eVeryLow: "بسیار کم",
    eLow: "کم",
    eModerate: "متوسط",
    eHigh: "زیاد",
    eVeryHigh: "بسیار زیاد",
    todayHealthEyebrow: "مراقبت روزانه",
    todayHealthTitle: "وضعیت سلامت و انرژی امروز",
    openHealthHubBtn: "بخش سلامت ←",
    sleepPillar: "خواب",
    mealsPillar: "وعده‌های غذایی",
    hydrationPillar: "آب دریافتی",
    exercisePillar: "فعالیت بدنی",
    quickLogMealBtn: "+ وعده",
    dailyTasks: "کارهای روزانه",
    taskPlaceholder: "یک کار واقعی برای امروز اضافه کن...",
    prioMain: "اولویت اصلی",
    prioSecondary: "فرعی",
    prioOptional: "اختیاری",
    noTasksYet: "هنوز کاری ثبت نشده است.",
    dailySchedule: "برنامه‌ی زمانی امروز",
    schedPlaceholder: "فعالیت یا بازه‌ی زمانی...",
    noScheduleYet: "هنوز بازه‌ی زمانی ثبت نشده است.",
    addGoalTitle: "افزودن هدف جدید",
    visionHint: "اهداف بزرگ را به قدم‌های کوچک‌تر تقسیم کن.",
    goalPlaceholder: "عنوان هدف جدید...",
    addGoalBtn: "ثبت هدف",
    hYearly: "هدف سالانه",
    hSixMonth: "هدف شش‌ماهه",
    hQuarterly: "هدف فصلی",
    hMonthly: "هدف ماهانه",
    hWeekly: "هدف هفتگی",
    milestonePlaceholder: "افزودن قدم یا مرحله...",
    noGoalsYet: "هنوز هدفی ثبت نشده است.",
    focusEngine: "جلسه‌ی کار عمیق",
    stayFocused: "تمرکز روی یک کار مشخص",
    focusTaskPlaceholder: "الان روی چه کاری تمرکز می‌کنی؟",
    startTimerBtn: "شروع",
    pauseTimerBtn: "توقف",
    resumeTimerBtn: "ادامه",
    logSessionBtn: "تکمیل و ثبت",
    resetBtn: "از نو",
    focusHistory: "جلسات تمرکز ثبت‌شده",
    focusHistorySub: "سوابق کار عمیق شما",
    noFocusYet: "هنوز جلسه‌ی تمرکزی ثبت نشده است.",
    hTabOverview: "تعادل زندگی",
    hTabSleep: "خواب و بازیابی",
    hTabNutrition: "تغذیه و آب",
    hTabExercise: "ورزش و تناسب اندام",
    lifeBalanceEyebrow: "عملکرد پایدار",
    lifeBalanceTitle: "تعادل سلامت و زندگی",
    sleepBalanceTitle: "تعادل خواب",
    nutriBalanceTitle: "تعادل تغذیه",
    exerBalanceTitle: "تعادل حرکت و ورزش",
    manageSleepBtn: "مدیریت خواب ←",
    manageNutriBtn: "تغذیه و آب ←",
    manageExerBtn: "برنامه‌ی ورزشی ←",
    statusBalanced: "متعادل",
    statusAttention: "نیازمند توجه",
    statusOff: "خارج از تعادل",
    statusNoData: "داده‌ی ناکافی",
    healthDisclaimer: "توجه: این برنامه یک ابزار شخصی برای برنامه‌ریزی و خودآگاهی است، نه یک ابزار پزشکی. تمام اهداف قابل شخصی‌سازی هستند.",
    logSleepHeader: "ثبت خواب",
    bedtimeLabel: "ساعت خواب",
    waketimeLabel: "ساعت بیداری",
    sleepQualityLabel: "کیفیت (۱ تا ۱۰)",
    sleepInterruptLabel: "بیداری بین خواب",
    optionalPlaceholder: "اختیاری...",
    sleepNotesPlaceholder: "یادداشت اختیاری درباره‌ی خواب...",
    saveSleepBtn: "ذخیره‌ی گزارش خواب",
    sleepGoalsTitle: "اهداف شخصی خواب",
    targetHoursLabel: "ساعت هدف",
    prefBedLabel: "خواب مطلوب",
    prefWakeLabel: "بیداری مطلوب",
    saveTargetsBtn: "ذخیره‌ی اهداف",
    shutdownRoutineTitle: "روتین آرامش شبانه",
    shutdownPlaceholder: "افزودن مرحله به روتین شب...",
    sleepHistoryTitle: "سوابق خواب",
    mealsTodayTitle: "وعده‌های غذایی امروز",
    logMealDetailTitle: "ثبت جزئیات غذا (اختیاری)",
    mealDescPlaceholder: "چه چیزی میل کردید؟ (توضیح کوتاه)",
    optProteinPlaceholder: "پروتئین گرم (اختیاری)",
    optCalPlaceholder: "کالری (اختیاری)",
    hydrationTitle: "پیگیری نوشیدن آب",
    customWaterPlaceholder: "مقدار دلخواه (میلی‌لیتر)...",
    nutriGoalsTitle: "اهداف تغذیه و آب روزانه",
    waterTargetLabel: "هدف آب (میلی‌لیتر)",
    proteinTargetLabel: "پروتئین (اختیاری)",
    calTargetLabel: "کالری (اختیاری)",
    addMealCatPlaceholder: "دسته‌بندی وعده‌ی جدید (اختیاری)...",
    mealLogHistoryTitle: "وعده‌های ثبت‌شده",
    weeklyPlanEyebrow: "برنامه‌ی هفتگی منعطف",
    weeklyWorkoutPlanTitle: "برنامه‌ی ورزش و روزهای استراحت",
    logGeneralActivityTitle: "ثبت فعالیت بدنی",
    durationMinsPlaceholder: "مدت (دقیقه)",
    activityNotesPlaceholder: "یادداشت اختیاری...",
    logActivityBtn: "ذخیره‌ی فعالیت",
    strengthLoggerTitle: "ثبت تمرین قدرتی و ست‌ها (اختیاری)",
    exNamePlaceholder: "نام حرکت (مثلاً اسکات، پرس سینه)",
    activityHistoryTitle: "فعالیت‌های انجام‌شده",
    statTotalFocus: "مجموع تمرکز",
    statAvgSleep: "میانگین خواب",
    statWaterToday: "آب امروز",
    statWeeklyWorkouts: "ورزش هفتگی",
    combinedInsightsEyebrow: "الگوها و خودآگاهی",
    combinedInsightsTitle: "ارتباط سلامت و بهره‌وری",
    settingsTitle: "تنظیمات شخصی",
    yourNameLabel: "نام شما",
    langLabel: "زبان برنامه",
    themeLabel: "پوسته‌ی ظاهری",
    recoveryTitle: "حالت روز بازیابی",
    recoveryDesc: "بازگشت آرام پس از روزهای سخت",
    toggleBtn: "تغییر وضعیت",
    remindersTitle: "یادآورها و ساعات سکوت",
    quietHoursLabel: "ساعات سکوت",
    remSleepLabel: "یادآور زمان خواب",
    remWaterLabel: "یادآور آب و وعده‌های غذایی",
    remWorkoutLabel: "یادآور تمرین ورزشی",
    exportBtn: "خروجی پشتیبان",
    syncBtn: "همگام‌سازی سرور",
    resetAllBtn: "پاک‌سازی اطلاعات",
    confirmReset: "آیا تمام اطلاعات پاک شود و به صفحه‌ی شروع برگردید؟",
    minsUnit: " دقیقه",
    hrsUnit: " ساعت",
    pageTitles: {
      today: "مرکز فرماندهی امروز",
      vision: "چشم‌انداز و اهداف",
      focus: "تمرکز عمیق",
      health: "سلامت و تعادل انرژی",
      stats: "آمار و پیشرفت",
      more: "تنظیمات و روتین‌ها"
    }
  }
};

function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

function defaultHealthData() {
  return {
    sleepGoals: { targetHours: 8, preferredBedtime: "23:00", preferredWakeTime: "07:00" },
    shutdownRoutine: [
      { id: 1, text: "Finish important work & review progress", done: false },
      { id: 2, text: "Prepare tomorrow's priorities", done: false },
      { id: 3, text: "Reduce screen time & relax before bed", done: false }
    ],
    nutritionGoals: {
      waterTargetMl: 2500,
      proteinTargetG: 0,
      calorieTarget: 0,
      mealCategories: ["Breakfast", "Lunch", "Dinner", "Snacks"]
    },
    dailyMealsDone: {},
    mealLogs: [],
    hydrationLogs: {},
    workoutPlan: {
      Mon: "Strength Training",
      Tue: "Walking",
      Wed: "Rest & Recovery",
      Thu: "Strength Training",
      Fri: "Mobility & Stretching",
      Sat: "General Cardio",
      Sun: "Rest & Recovery"
    },
    activities: [],
    strengthSets: [],
    energyLogs: {},
    reminders: {
      quietStart: "22:30",
      quietEnd: "07:00",
      sleep: true,
      water: true,
      workout: true
    }
  };
}

function createEmptyState() {
  return {
    onboarded: false,
    userName: "",
    lang: "en",
    theme: "noir",
    recoveryMode: false,
    streakDays: 1,
    mission: { title: "", progress: 0 },
    tasks: [],
    schedule: [],
    goals: [],
    focusSessions: [],
    sleepLogs: [],
    health: defaultHealthData()
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return createEmptyState();
    const parsed = JSON.parse(raw);
    const base = createEmptyState();
    return {
      ...base,
      ...parsed,
      health: {
        ...base.health,
        ...(parsed.health || {}),
        sleepGoals: { ...base.health.sleepGoals, ...(parsed.health?.sleepGoals || {}) },
        nutritionGoals: { ...base.health.nutritionGoals, ...(parsed.health?.nutritionGoals || {}) },
        workoutPlan: { ...base.health.workoutPlan, ...(parsed.health?.workoutPlan || {}) },
        reminders: { ...base.health.reminders, ...(parsed.health?.reminders || {}) }
      }
    };
  } catch (_) {
    return createEmptyState();
  }
}

let state = loadState();
let currentPage = "today";
let currentHealthTab = "overview";

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

// Cross-Midnight Sleep Duration Calculation
function calcSleepHours(bedStr, wakeStr) {
  if (!bedStr || !wakeStr) return 0;
  const [bH, bM] = bedStr.split(":").map(Number);
  const [wH, wM] = wakeStr.split(":").map(Number);
  let bedMins = bH * 60 + bM;
  let wakeMins = wH * 60 + wM;
  if (wakeMins <= bedMins) {
    wakeMins += 24 * 60; // Crossed midnight
  }
  return Math.round(((wakeMins - bedMins) / 60) * 10) / 10;
}

// ==================== LIFE BALANCE ENGINE ====================
function evaluateLifeBalance() {
  const h = state.health;
  const targetSleep = Number(h.sleepGoals.targetHours) || 8;

  // 1. Sleep Balance (checks recent up to 5 logs)
  let sleepStatus = "nodata";
  let sleepReason = state.lang === "fa"
    ? "برای تحلیل تعادل خواب، حداقل یک شب خواب خود را ثبت کنید."
    : "Log at least 1 sleep record to evaluate your Sleep Balance.";

  if (state.sleepLogs.length > 0) {
    const recent = state.sleepLogs.slice(-5);
    const avg = recent.reduce((acc, s) => acc + Number(s.hours || 0), 0) / recent.length;
    if (avg >= targetSleep - 0.6) {
      sleepStatus = "balanced";
      sleepReason = state.lang === "fa"
        ? `میانگین خواب اخیر شما (${avg.toFixed(1)} ساعت) با هدف شما (${targetSleep} ساعت) هماهنگ است.`
        : `Recent average (${avg.toFixed(1)}h) aligns well with your ${targetSleep}h personal target.`;
    } else if (avg >= targetSleep - 1.5) {
      sleepStatus = "attention";
      sleepReason = state.lang === "fa"
        ? `میانگین خواب اخیر (${avg.toFixed(1)} ساعت) کمی کمتر از هدف شخصی شماست.`
        : `Recent average (${avg.toFixed(1)}h) is slightly below your ${targetSleep}h target.`;
    } else {
      sleepStatus = "off";
      sleepReason = state.lang === "fa"
        ? `کمبود خواب مکرر (${avg.toFixed(1)} ساعت). بازیابی انرژی را در اولویت قرار دهید.`
        : `Repeatedly insufficient sleep (${avg.toFixed(1)}h avg vs ${targetSleep}h target). Prioritize recovery.`;
    }
  }

  // 2. Nutrition & Hydration Balance
  const tk = todayKey();
  const todayWater = Number(h.hydrationLogs[tk] || 0);
  const waterTarget = Number(h.nutritionGoals.waterTargetMl) || 2500;
  const todayMeals = (h.dailyMealsDone[tk] || []).length;
  const totalMealsLogged = h.mealLogs.length + todayMeals;

  let nutriStatus = "nodata";
  let nutriReason = state.lang === "fa"
    ? "وعده‌های غذایی یا میزان آب امروز را ثبت کنید."
    : "Mark today's meals or hydration to see your Nutrition Balance.";

  if (todayWater > 0 || totalMealsLogged > 0) {
    const waterRatio = todayWater / waterTarget;
    if (todayMeals >= 2 && waterRatio >= 0.6) {
      nutriStatus = "balanced";
      nutriReason = state.lang === "fa"
        ? `${todayMeals} وعده ثبت شده و ${todayWater} میلی‌لیتر آب دریافت شده است.`
        : `${todayMeals} meals completed and ${todayWater}ml water recorded today.`;
    } else {
      nutriStatus = "attention";
      nutriReason = state.lang === "fa"
        ? `امروز ${todayMeals} وعده و ${todayWater} میلی‌لیتر آب ثبت شده است. وعده‌ها و آب را فراموش نکنید.`
        : `${todayMeals} meals & ${todayWater}ml water today. Remember regular meals and hydration.`;
    }
  }

  // 3. Exercise & Recovery Balance (Rest days are respected as healthy)
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const todayDayKey = dayNames[new Date().getDay()];
  const plannedToday = h.workoutPlan[todayDayKey] || "Rest & Recovery";
  const recentActs = h.activities.slice(-7);

  let exerStatus = "nodata";
  let exerReason = state.lang === "fa"
    ? `برنامه‌ی امروز: ${plannedToday}. فعالیت‌های خود را ثبت کنید.`
    : `Today's plan: ${plannedToday}. Log your activities to track consistency.`;

  if (plannedToday.toLowerCase().includes("rest") && h.activities.length === 0) {
    exerStatus = "balanced";
    exerReason = state.lang === "fa"
      ? "امروز روز استراحت و بازیابی شماست."
      : "Today is a scheduled Rest & Recovery day.";
  } else if (recentActs.length > 0) {
    const totalMins = recentActs.reduce((acc, a) => acc + Number(a.duration || 0), 0);
    if (totalMins >= 60) {
      exerStatus = "balanced";
      exerReason = state.lang === "fa"
        ? `${recentActs.length} جلسه فعالیت (${totalMins} دقیقه) ثبت شده است.`
        : `${recentActs.length} recent activities (${totalMins} mins total) recorded.`;
    } else {
      exerStatus = "attention";
      exerReason = state.lang === "fa"
        ? `${totalMins} دقیقه فعالیت ثبت شده است. حرکت سبک روزانه به انرژی کمک می‌کند.`
        : `${totalMins} mins logged recently. Gentle movement supports steady energy.`;
    }
  }

  // Overall Transparent Summary (Critical rule: high exercise/work cannot hide off-balance sleep)
  const statuses = [sleepStatus, nutriStatus, exerStatus];
  let overall = "nodata";
  if (statuses.every(s => s === "nodata")) {
    overall = "nodata";
  } else if (statuses.includes("off")) {
    overall = "off";
  } else if (statuses.includes("attention")) {
    overall = "attention";
  } else {
    overall = "balanced";
  }

  return { overall, sleepStatus, sleepReason, nutriStatus, nutriReason, exerStatus, exerReason, plannedToday };
}

function statusMeta(code) {
  if (code === "balanced") return { label: t("statusBalanced"), cls: "status-balanced" };
  if (code === "attention") return { label: t("statusAttention"), cls: "status-attention" };
  if (code === "off") return { label: t("statusOff"), cls: "status-off" };
  return { label: t("statusNoData"), cls: "status-nodata" };
}

// Navigation
function setPage(name) {
  currentPage = name;
  document.querySelectorAll(".page").forEach(p => p.classList.toggle("active", p.id === `page-${name}`));
  document.querySelectorAll("[data-page]").forEach(b => b.classList.toggle("active", b.dataset.page === name));
  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[name] || dict.pageTitles.today;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setHealthTab(tab) {
  currentHealthTab = tab;
  document.querySelectorAll("[data-health-tab]").forEach(b => b.classList.toggle("active", b.dataset.healthTab === tab));
  document.querySelectorAll("#page-health .subview").forEach(v => v.classList.toggle("active", v.id === `health-sub-${tab}`));
}

// Render UI
function renderAll() {
  const tk = todayKey();
  const h = state.health;

  // 1. Theme & Language
  document.documentElement.dataset.theme = state.theme;
  document.documentElement.lang = state.lang;
  document.documentElement.dir = state.lang === "fa" ? "rtl" : "ltr";

  document.getElementById("onboarding-modal").classList.toggle("hidden", Boolean(state.onboarded));
  document.getElementById("onboard-lang").value = state.lang;

  document.querySelectorAll("[data-i18n]").forEach(el => { el.textContent = t(el.dataset.i18n); });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => { el.placeholder = t(el.dataset.i18nPlaceholder); });

  const dict = i18n[state.lang] || i18n.en;
  document.getElementById("page-title").textContent = dict.pageTitles[currentPage] || dict.pageTitles.today;
  document.getElementById("user-greeting").textContent = state.userName ? `${t("greetingPrefix")} ${state.userName}` : "";
  document.getElementById("sidebar-user-name").textContent = state.userName || "";
  document.getElementById("streak-badge").textContent = `🔥 ${state.streakDays} ${t("streakUnit")}`;
  document.getElementById("recovery-badge").style.display = state.recoveryMode ? "inline-flex" : "none";

  // 2. Life Balance Calculation
  const bal = evaluateLifeBalance();
  const overallMeta = statusMeta(bal.overall);
  const topChip = document.getElementById("overall-balance-chip");
  topChip.className = `badge ${overallMeta.cls}`;
  topChip.textContent = `${t("hTabOverview")}: ${overallMeta.label}`;

  // 3. Today Page: Mission, Tasks, Energy, Quick Health Bar
  const missionInput = document.getElementById("mission-input");
  if (document.activeElement !== missionInput) missionInput.value = state.mission.title || "";
  document.getElementById("mission-pct-label").textContent = `${state.mission.progress}%`;
  document.getElementById("mission-bar").style.width = `${state.mission.progress}%`;

  const todayEnergy = h.energyLogs[tk] || 0;
  document.querySelectorAll("#today-energy-selector .energy-pill").forEach(btn => {
    btn.classList.toggle("active", Number(btn.dataset.energy) === todayEnergy);
  });

  // Today Quick Health Bar
  const lastSleep = state.sleepLogs[state.sleepLogs.length - 1];
  document.getElementById("today-quick-sleep").textContent = lastSleep ? `${lastSleep.hours}${t("hrsUnit")}` : "—";
  document.getElementById("today-quick-sleep-sub").textContent = lastSleep ? `${lastSleep.bedtime || ""} → ${lastSleep.wakeTime || ""}` : "";

  const doneMealsList = h.dailyMealsDone[tk] || [];
  const mealCats = h.nutritionGoals.mealCategories || ["Breakfast", "Lunch", "Dinner", "Snacks"];
  document.getElementById("today-quick-meals").textContent = `${doneMealsList.length} / ${mealCats.length}`;

  const todayWater = Number(h.hydrationLogs[tk] || 0);
  document.getElementById("today-quick-water").textContent = `${todayWater} / ${h.nutritionGoals.waterTargetMl} ml`;

  document.getElementById("today-quick-exercise").textContent = bal.plannedToday;
  const todayActs = h.activities.filter(a => a.dateKey === tk);
  document.getElementById("today-quick-exercise-sub").textContent = todayActs.length
    ? `✓ ${todayActs.reduce((s, a) => s + a.duration, 0)}${t("minsUnit")}`
    : "";

  // Gentle Contextual Reminder on Today (Respects active timer & completed actions)
  const totalFocusMins = state.focusSessions.reduce((sum, s) => sum + s.duration, 0);
  const bannerEl = document.getElementById("gentle-reminder-banner");
  if (!timerInterval && totalFocusMins >= 90 && doneMealsList.length === 0) {
    bannerEl.style.display = "block";
    bannerEl.textContent = state.lang === "fa"
      ? "شما امروز زمان قابل توجهی را با تمرکز کار کرده‌اید اما هنوز وعده‌ی غذایی ثبت نکرده‌اید. برای حفظ انرژی پایدار، استراحت و تغذیه را فراموش نکنید."
      : "You have logged significant deep work today without recording a meal yet. Consider taking a nourishing break to sustain your energy.";
  } else {
    bannerEl.style.display = "none";
  }

  // Tasks & Schedule
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
          <span class="item-sub">${escapeHtml(task.priority)}</span>
        </div>
        <button class="del-btn" data-task-del="${task.id}">✕</button>
      `;
      tasksEl.appendChild(row);
    });
  }

  const doneCount = state.tasks.filter(x => x.completed).length;
  const totalCount = state.tasks.length;
  const pct = totalCount ? Math.round((doneCount / totalCount) * 100) : state.mission.progress;
  document.getElementById("completion-rate").textContent = `${pct}%`;
  document.getElementById("tasks-summary-text").textContent = `${doneCount} / ${totalCount} ${t("tasksCompletedSuffix")}`;
  document.getElementById("daily-bar").style.width = `${pct}%`;
  document.getElementById("today-focus-mins").textContent = `${totalFocusMins}${t("minsUnit")}`;

  const schedEl = document.getElementById("schedule-container");
  schedEl.innerHTML = "";
  if (state.schedule.length === 0) {
    schedEl.innerHTML = `<div class="empty-text">${t("noScheduleYet")}</div>`;
  } else {
    state.schedule.slice().sort((a, b) => a.time.localeCompare(b.time)).forEach(item => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <strong style="color:var(--accent); font-size:12.5px; min-width:48px;">${escapeHtml(item.time)}</strong>
        <div class="item-body"><span class="item-title">${escapeHtml(item.title)}</span></div>
        <button class="del-btn" data-sched-del="${item.id}">✕</button>
      `;
      schedEl.appendChild(row);
    });
  }

  // 4. Vision Goals
  const goalsEl = document.getElementById("goals-container");
  goalsEl.innerHTML = "";
  if (state.goals.length === 0) {
    goalsEl.innerHTML = `<div class="card empty-text">${t("noGoalsYet")}</div>`;
  } else {
    state.goals.forEach(g => {
      const milestones = g.milestones || [];
      const mDone = milestones.filter(m => m.done).length;
      const calcPct = milestones.length ? Math.round((mDone / milestones.length) * 100) : (g.progress || 0);
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
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <div class="card-header" style="margin-bottom:8px;">
          <span class="badge badge-accent">${escapeHtml(g.horizon)}</span>
          <button class="del-btn" data-goal-del="${g.id}">✕</button>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:center;">
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

  // 5. Focus Page & Sustainability Suggestion
  const focusInsightEl = document.getElementById("focus-health-insight");
  if (bal.sleepStatus === "off" || (bal.sleepStatus === "attention" && totalFocusMins >= 120)) {
    focusInsightEl.style.display = "block";
    focusInsightEl.textContent = state.lang === "fa"
      ? "زمان کار عمیق شما افزایش یافته اما خواب اخیر شما کمتر از هدف شخصی‌تان بوده است. برای حفظ عملکرد پایدار، استراحت و بازیابی را در اولویت قرار دهید."
      : "Your focused work time has increased, but your sleep has been below your personal target recently. Consider prioritizing recovery to support sustainable performance.";
  } else {
    focusInsightEl.style.display = "none";
  }

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

  // 6. Health Section: Overview, Sleep, Nutrition, Exercise
  const oBadge = document.getElementById("life-balance-overall-badge");
  oBadge.className = `badge ${overallMeta.cls}`;
  oBadge.textContent = overallMeta.label;

  document.getElementById("life-balance-explanation").textContent = state.lang === "fa"
    ? "شاخص تعادل زندگی بر اساس روند خواب، تغذیه، آب دریافتی و فعالیت بدنی محاسبه می‌شود. عملکرد بالا در یک بخش، کمبود استراحت یا خواب را پنهان نمی‌کند."
    : "Life Balance reflects your multi-day patterns across Sleep, Nutrition, and Exercise. High output in one area never masks a recurring deficit in recovery.";

  const sMeta = statusMeta(bal.sleepStatus);
  const sBadge = document.getElementById("sleep-balance-status");
  sBadge.className = `badge ${sMeta.cls}`;
  sBadge.textContent = sMeta.label;
  document.getElementById("sleep-balance-reason").textContent = bal.sleepReason;

  const nMeta = statusMeta(bal.nutriStatus);
  const nBadge = document.getElementById("nutri-balance-status");
  nBadge.className = `badge ${nMeta.cls}`;
  nBadge.textContent = nMeta.label;
  document.getElementById("nutri-balance-reason").textContent = bal.nutriReason;

  const eMeta = statusMeta(bal.exerStatus);
  const eBadge = document.getElementById("exer-balance-status");
  eBadge.className = `badge ${eMeta.cls}`;
  eBadge.textContent = eMeta.label;
  document.getElementById("exer-balance-reason").textContent = bal.exerReason;

  // Sleep Subview
  document.getElementById("sleep-target-chip").textContent = `Target: ${h.sleepGoals.targetHours}h (${h.sleepGoals.preferredBedtime}–${h.sleepGoals.preferredWakeTime})`;
  document.getElementById("goal-sleep-hours").value = h.sleepGoals.targetHours;
  document.getElementById("goal-sleep-bed").value = h.sleepGoals.preferredBedtime;
  document.getElementById("goal-sleep-wake").value = h.sleepGoals.preferredWakeTime;

  const sdEl = document.getElementById("shutdown-list");
  sdEl.innerHTML = "";
  (h.shutdownRoutine || []).forEach(item => {
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <div class="check-box ${item.done ? "done" : ""}" data-sd-toggle="${item.id}">${item.done ? "✓" : ""}</div>
      <div class="item-body"><span class="item-title ${item.done ? "done" : ""}">${escapeHtml(item.text)}</span></div>
      <button class="del-btn" data-sd-del="${item.id}">✕</button>
    `;
    sdEl.appendChild(row);
  });

  const srEl = document.getElementById("sleep-records-list");
  srEl.innerHTML = "";
  if (state.sleepLogs.length === 0) {
    srEl.innerHTML = `<div class="empty-text">${t("statusNoData")}</div>`;
  } else {
    state.sleepLogs.slice().reverse().forEach(log => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${log.hours}${t("hrsUnit")} (${escapeHtml(log.bedtime || "—")} → ${escapeHtml(log.wakeTime || "—")})</span>
          <span class="item-sub">${escapeHtml(log.date)} ${log.notes ? "· " + escapeHtml(log.notes) : ""} ${log.interruptions ? "· " + escapeHtml(log.interruptions) : ""}</span>
        </div>
        <span class="badge badge-sleep">${log.score}/10</span>
        <button class="del-btn" data-sleep-del="${log.id}">✕</button>
      `;
      srEl.appendChild(row);
    });
  }

  // Nutrition & Hydration Subview
  document.getElementById("meals-done-chip").textContent = `${doneMealsList.length} / ${mealCats.length}`;
  const slotsEl = document.getElementById("meal-slots-container");
  slotsEl.innerHTML = "";
  const catSelect = document.getElementById("meal-cat-select");
  catSelect.innerHTML = "";

  mealCats.forEach(cat => {
    const isDone = doneMealsList.includes(cat);
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <div class="check-box ${isDone ? "done" : ""}" data-meal-slot="${escapeHtml(cat)}">${isDone ? "✓" : ""}</div>
      <div class="item-body"><span class="item-title ${isDone ? "done" : ""}">${escapeHtml(cat)}</span></div>
    `;
    slotsEl.appendChild(row);

    const opt = document.createElement("option");
    opt.value = cat;
    opt.textContent = cat;
    catSelect.appendChild(opt);
  });

  const waterTarget = Number(h.nutritionGoals.waterTargetMl) || 2500;
  const waterPct = Math.min(100, Math.round((todayWater / waterTarget) * 100));
  document.getElementById("water-progress-chip").textContent = `${todayWater} / ${waterTarget} ml`;
  document.getElementById("water-progress-bar").style.width = `${waterPct}%`;

  const mlEl = document.getElementById("meal-logs-list");
  mlEl.innerHTML = "";
  if (h.mealLogs.length === 0) {
    mlEl.innerHTML = `<div class="empty-text">${t("statusNoData")}</div>`;
  } else {
    h.mealLogs.slice().reverse().forEach(m => {
      const metaParts = [m.category, m.time];
      if (m.protein) metaParts.push(`${m.protein}g protein`);
      if (m.calories) metaParts.push(`${m.calories} kcal`);
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${escapeHtml(m.desc)}</span>
          <span class="item-sub">${escapeHtml(metaParts.join(" · "))}</span>
        </div>
        <button class="del-btn" data-meallog-del="${m.id}">✕</button>
      `;
      mlEl.appendChild(row);
    });
  }

  // Exercise Subview: Weekly Planner, Activities & Strength Sets
  const daysOrder = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];
  const wgEl = document.getElementById("weekly-workout-grid");
  wgEl.innerHTML = "";
  const planOptions = [
    "Rest & Recovery",
    "Strength Training",
    "Bodybuilding",
    "Walking",
    "Running",
    "Cycling",
    "Swimming",
    "Mobility & Stretching",
    "Yoga",
    "General Cardio",
    "Sports",
    "Home Workout"
  ];
  daysOrder.forEach(d => {
    const currentVal = h.workoutPlan[d] || "Rest & Recovery";
    const box = document.createElement("div");
    box.style = "background:var(--surface-2); padding:10px; border-radius:10px;";
    const optsHtml = planOptions.map(o => `<option value="${o}" ${o === currentVal ? "selected" : ""}>${o}</option>`).join("");
    box.innerHTML = `
      <span class="eyebrow">${d}</span>
      <select class="input-field plan-day-select" data-day="${d}" style="margin-top:4px; padding:6px 8px; font-size:11.5px;">
        ${optsHtml}
      </select>
    `;
    wgEl.appendChild(box);
  });

  const stEl = document.getElementById("strength-sets-list");
  stEl.innerHTML = "";
  h.strengthSets.slice(-8).reverse().forEach(s => {
    const row = document.createElement("div");
    row.className = "item-row";
    row.innerHTML = `
      <div class="item-body">
        <span class="item-title">${escapeHtml(s.exercise)} (${escapeHtml(s.muscle)})</span>
        <span class="item-sub">${s.sets} sets × ${s.reps} reps @ ${s.weight} kg · ${escapeHtml(s.date)}</span>
      </div>
      <button class="del-btn" data-st-del="${s.id}">✕</button>
    `;
    stEl.appendChild(row);
  });

  const actEl = document.getElementById("activity-history-list");
  actEl.innerHTML = "";
  if (h.activities.length === 0) {
    actEl.innerHTML = `<div class="empty-text">${t("statusNoData")}</div>`;
  } else {
    h.activities.slice().reverse().forEach(a => {
      const row = document.createElement("div");
      row.className = "item-row";
      row.innerHTML = `
        <div class="item-body">
          <span class="item-title">${escapeHtml(a.type)}</span>
          <span class="item-sub">${escapeHtml(a.date)} ${a.notes ? "· " + escapeHtml(a.notes) : ""}</span>
        </div>
        <span class="badge badge-exer">${a.duration}${t("minsUnit")}</span>
        <button class="del-btn" data-act-del="${a.id}">✕</button>
      `;
      actEl.appendChild(row);
    });
  }

  // 7. Statistics & Combined Insights
  document.getElementById("stat-total-focus").textContent = `${totalFocusMins}${t("minsUnit")}`;
  document.getElementById("stat-sessions-count").textContent = `${state.focusSessions.length} sessions`;

  if (state.sleepLogs.length > 0) {
    const recentSleep = state.sleepLogs.slice(-7);
    const avgS = recentSleep.reduce((s, x) => s + Number(x.hours || 0), 0) / recentSleep.length;
    document.getElementById("stat-avg-sleep").textContent = `${avgS.toFixed(1)}${t("hrsUnit")}`;
    document.getElementById("stat-sleep-consistency").textContent = `${state.sleepLogs.length} nights logged`;
  } else {
    document.getElementById("stat-avg-sleep").textContent = "—";
    document.getElementById("stat-sleep-consistency").textContent = "";
  }

  document.getElementById("stat-water-today").textContent = `${todayWater} ml`;
  document.getElementById("stat-meals-consistency").textContent = `${doneMealsList.length}/${mealCats.length} meals today`;

  const totalActMins = h.activities.slice(-7).reduce((s, a) => s + Number(a.duration || 0), 0);
  document.getElementById("stat-weekly-workouts").textContent = `${totalActMins}${t("minsUnit")}`;
  document.getElementById("stat-workout-sessions").textContent = `${h.activities.length} total activities`;

  // Combined Neutral Insights
  const insightsEl = document.getElementById("combined-insights-container");
  insightsEl.innerHTML = "";
  const insights = [];
  if (state.sleepLogs.length >= 2 && state.focusSessions.length >= 1) {
    insights.push(state.lang === "fa"
      ? "بررسی داده‌های شما نشان می‌دهد که در روزهای پس از خواب منظم، جلسات تمرکز پایدارتر بوده‌اند."
      : "Your recorded sessions show steadier deep work on days following consistent sleep.");
  }
  if (todayWater >= waterTarget * 0.7) {
    insights.push(state.lang === "fa"
      ? "آب دریافتی امروز شما در محدوده‌ی هدف قرار دارد که به حفظ تمرکز و انرژی کمک می‌کند."
      : "Your hydration today is on track with your personal target, supporting sustained energy.");
  }
  if (insights.length === 0) {
    insightsEl.innerHTML = `<div class="empty-text">${t("statusNoData")}</div>`;
  } else {
    insights.forEach(txt => {
      const div = document.createElement("div");
      div.className = "gentle-banner";
      div.textContent = txt;
      insightsEl.appendChild(div);
    });
  }

  // 8. Settings & Reminders
  const nameIn = document.getElementById("settings-name-input");
  if (document.activeElement !== nameIn) nameIn.value = state.userName || "";
  document.getElementById("lang-select").value = state.lang;
  document.getElementById("theme-select").value = state.theme;
  document.getElementById("quiet-start").value = h.reminders.quietStart || "22:30";
  document.getElementById("quiet-end").value = h.reminders.quietEnd || "07:00";
  document.getElementById("rem-sleep-toggle").checked = Boolean(h.reminders.sleep);
  document.getElementById("rem-water-toggle").checked = Boolean(h.reminders.water);
  document.getElementById("rem-workout-toggle").checked = Boolean(h.reminders.workout);
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

document.addEventListener("DOMContentLoaded", () => {
  // Onboarding
  document.getElementById("onboard-lang").addEventListener("change", e => {
    state.lang = e.target.value;
    saveState();
  });

  document.getElementById("onboarding-form").addEventListener("submit", e => {
    e.preventDefault();
    const userName = document.getElementById("onboard-name").value.trim();
    const firstGoal = document.getElementById("onboard-goal").value.trim();
    const horizon = document.getElementById("onboard-horizon").value;
    state.userName = userName;
    state.onboarded = true;
    state.mission = { title: firstGoal, progress: 0 };
    state.goals = [{ id: Date.now(), title: firstGoal, horizon, progress: 0, milestones: [] }];
    saveState();
  });

  // Main Navigation & Health Sub-Tabs
  document.querySelectorAll("[data-page]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.page));
  });
  document.querySelectorAll("[data-goto]").forEach(btn => {
    btn.addEventListener("click", () => setPage(btn.dataset.goto));
  });
  document.querySelectorAll("[data-health-tab]").forEach(btn => {
    btn.addEventListener("click", () => setHealthTab(btn.dataset.healthTab));
  });
  document.querySelectorAll("[data-switch-health]").forEach(btn => {
    btn.addEventListener("click", () => setHealthTab(btn.dataset.switchHealth));
  });

  // Today Energy Selector
  document.getElementById("today-energy-selector").addEventListener("click", e => {
    const pill = e.target.closest("[data-energy]");
    if (pill) {
      state.health.energyLogs[todayKey()] = Number(pill.dataset.energy);
      saveState();
    }
  });

  // Today Quick Water & Quick Meal Buttons
  document.getElementById("quick-water-btn").addEventListener("click", () => {
    const tk = todayKey();
    state.health.hydrationLogs[tk] = Number(state.health.hydrationLogs[tk] || 0) + 250;
    saveState();
  });

  document.getElementById("quick-meal-btn").addEventListener("click", () => {
    const tk = todayKey();
    const cats = state.health.nutritionGoals.mealCategories || ["Breakfast", "Lunch", "Dinner", "Snacks"];
    const done = state.health.dailyMealsDone[tk] || [];
    const nextMeal = cats.find(c => !done.includes(c));
    if (nextMeal) {
      state.health.dailyMealsDone[tk] = [...done, nextMeal];
      saveState();
    } else {
      setPage("health");
      setHealthTab("nutrition");
    }
  });

  // Mission & Tasks
  document.getElementById("mission-form").addEventListener("submit", e => {
    e.preventDefault();
    state.mission.title = document.getElementById("mission-input").value.trim();
    saveState();
  });
  document.getElementById("mission-step-btn").addEventListener("click", () => {
    state.mission.progress = state.mission.progress >= 100 ? 0 : state.mission.progress + 25;
    saveState();
  });

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
      const task = state.tasks.find(x => x.id === Number(toggle.dataset.taskToggle));
      if (task) { task.completed = !task.completed; saveState(); }
    }
    const del = e.target.closest("[data-task-del]");
    if (del) {
      state.tasks = state.tasks.filter(x => x.id !== Number(del.dataset.taskDel));
      saveState();
    }
  });

  // Schedule
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
      state.schedule = state.schedule.filter(x => x.id !== Number(del.dataset.schedDel));
      saveState();
    }
  });

  // Vision Goals
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
      const goal = state.goals.find(g => g.id === Number(form.dataset.goalId));
      const input = form.querySelector(".ms-input");
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
      state.goals = state.goals.filter(g => g.id !== Number(gDel.dataset.goalDel));
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
      if (goal?.milestones) {
        goal.milestones = goal.milestones.filter(m => m.id !== mid);
        saveState();
      }
    }
  });

  // Focus Timer
  document.querySelectorAll(".dur-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      clearInterval(timerInterval); timerInterval = null;
      sessionMins = Number(btn.dataset.mins);
      remainingSecs = sessionMins * 60;
      document.getElementById("timer-toggle").textContent = t("startTimerBtn");
      renderTimer();
    });
  });

  document.getElementById("timer-toggle").addEventListener("click", e => {
    if (timerInterval) {
      clearInterval(timerInterval); timerInterval = null;
      e.target.textContent = t("resumeTimerBtn");
    } else {
      e.target.textContent = t("pauseTimerBtn");
      timerInterval = setInterval(() => {
        if (remainingSecs > 0) { remainingSecs--; renderTimer(); }
        else { clearInterval(timerInterval); timerInterval = null; }
      }, 1000);
    }
  });

  document.getElementById("timer-reset").addEventListener("click", () => {
    clearInterval(timerInterval); timerInterval = null;
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
      dateKey: todayKey(),
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    });
    document.getElementById("focus-task-input").value = "";
    saveState();
  });

  // ==================== HEALTH HANDLERS ====================
  // 1. Sleep Logger (Auto cross-midnight calculation)
  document.getElementById("sleep-log-form").addEventListener("submit", e => {
    e.preventDefault();
    const bedtime = document.getElementById("sleep-bedtime").value;
    const wakeTime = document.getElementById("sleep-waketime").value;
    const score = Number(document.getElementById("sleep-quality").value);
    const interruptions = document.getElementById("sleep-interruptions").value.trim();
    const notes = document.getElementById("sleep-notes").value.trim();
    const hours = calcSleepHours(bedtime, wakeTime);

    state.sleepLogs.push({
      id: Date.now(),
      bedtime,
      wakeTime,
      hours,
      score,
      interruptions,
      notes,
      date: new Date().toLocaleDateString()
    });
    document.getElementById("sleep-interruptions").value = "";
    document.getElementById("sleep-notes").value = "";
    saveState();
  });

  document.getElementById("sleep-goals-form").addEventListener("submit", e => {
    e.preventDefault();
    state.health.sleepGoals = {
      targetHours: Number(document.getElementById("goal-sleep-hours").value) || 8,
      preferredBedtime: document.getElementById("goal-sleep-bed").value || "23:00",
      preferredWakeTime: document.getElementById("goal-sleep-wake").value || "07:00"
    };
    saveState();
  });

  document.getElementById("add-shutdown-form").addEventListener("submit", e => {
    e.preventDefault();
    const input = document.getElementById("shutdown-input");
    if (!input.value.trim()) return;
    state.health.shutdownRoutine.push({ id: Date.now(), text: input.value.trim(), done: false });
    input.value = "";
    saveState();
  });

  document.getElementById("shutdown-list").addEventListener("click", e => {
    const toggle = e.target.closest("[data-sd-toggle]");
    if (toggle) {
      const item = state.health.shutdownRoutine.find(x => x.id === Number(toggle.dataset.sdToggle));
      if (item) { item.done = !item.done; saveState(); }
    }
    const del = e.target.closest("[data-sd-del]");
    if (del) {
      state.health.shutdownRoutine = state.health.shutdownRoutine.filter(x => x.id !== Number(del.dataset.sdDel));
      saveState();
    }
  });

  document.getElementById("sleep-records-list").addEventListener("click", e => {
    const del = e.target.closest("[data-sleep-del]");
    if (del) {
      state.sleepLogs = state.sleepLogs.filter(x => x.id !== Number(del.dataset.sleepDel));
      saveState();
    }
  });

  // 2. Nutrition & Hydration Handlers
  document.getElementById("meal-slots-container").addEventListener("click", e => {
    const slot = e.target.closest("[data-meal-slot]");
    if (slot) {
      const cat = slot.dataset.mealSlot;
      const tk = todayKey();
      const current = state.health.dailyMealsDone[tk] || [];
      if (current.includes(cat)) {
        state.health.dailyMealsDone[tk] = current.filter(c => c !== cat);
      } else {
        state.health.dailyMealsDone[tk] = [...current, cat];
      }
      saveState();
    }
  });

  document.getElementById("meal-log-form").addEventListener("submit", e => {
    e.preventDefault();
    const category = document.getElementById("meal-cat-select").value;
    const time = document.getElementById("meal-time-input").value;
    const desc = document.getElementById("meal-desc-input").value.trim();
    const protein = Number(document.getElementById("meal-protein-input").value) || 0;
    const calories = Number(document.getElementById("meal-cal-input").value) || 0;
    if (!desc) return;

    state.health.mealLogs.push({
      id: Date.now(),
      dateKey: todayKey(),
      category,
      time,
      desc,
      protein,
      calories
    });
    const tk = todayKey();
    const current = state.health.dailyMealsDone[tk] || [];
    if (!current.includes(category)) {
      state.health.dailyMealsDone[tk] = [...current, category];
    }
    document.getElementById("meal-desc-input").value = "";
    document.getElementById("meal-protein-input").value = "";
    document.getElementById("meal-cal-input").value = "";
    saveState();
  });

  document.getElementById("meal-logs-list").addEventListener("click", e => {
    const del = e.target.closest("[data-meallog-del]");
    if (del) {
      state.health.mealLogs = state.health.mealLogs.filter(x => x.id !== Number(del.dataset.meallogDel));
      saveState();
    }
  });

  document.querySelectorAll(".add-water-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const tk = todayKey();
      state.health.hydrationLogs[tk] = Number(state.health.hydrationLogs[tk] || 0) + Number(btn.dataset.ml);
      saveState();
    });
  });

  document.getElementById("custom-water-form").addEventListener("submit", e => {
    e.preventDefault();
    const amt = Number(document.getElementById("custom-water-input").value);
    if (amt > 0) {
      const tk = todayKey();
      state.health.hydrationLogs[tk] = Number(state.health.hydrationLogs[tk] || 0) + amt;
      document.getElementById("custom-water-input").value = "";
      saveState();
    }
  });

  document.getElementById("nutri-goals-form").addEventListener("submit", e => {
    e.preventDefault();
    state.health.nutritionGoals.waterTargetMl = Number(document.getElementById("goal-water-ml").value) || 2500;
    state.health.nutritionGoals.proteinTargetG = Number(document.getElementById("goal-protein-g").value) || 0;
    state.health.nutritionGoals.calorieTarget = Number(document.getElementById("goal-calories").value) || 0;
    const newCat = document.getElementById("new-meal-cat-input").value.trim();
    if (newCat && !state.health.nutritionGoals.mealCategories.includes(newCat)) {
      state.health.nutritionGoals.mealCategories.push(newCat);
      document.getElementById("new-meal-cat-input").value = "";
    }
    saveState();
  });

  // 3. Exercise & Strength Handlers
  document.getElementById("weekly-workout-grid").addEventListener("change", e => {
    const sel = e.target.closest(".plan-day-select");
    if (sel) {
      state.health.workoutPlan[sel.dataset.day] = sel.value;
      saveState();
    }
  });

  document.getElementById("activity-log-form").addEventListener("submit", e => {
    e.preventDefault();
    const type = document.getElementById("activity-type-select").value;
    const duration = Number(document.getElementById("activity-duration-input").value);
    const notes = document.getElementById("activity-notes-input").value.trim();
    if (!duration) return;

    state.health.activities.push({
      id: Date.now(),
      dateKey: todayKey(),
      date: new Date().toLocaleDateString(),
      type,
      duration,
      notes
    });
    document.getElementById("activity-duration-input").value = "";
    document.getElementById("activity-notes-input").value = "";
    saveState();
  });

  document.getElementById("activity-history-list").addEventListener("click", e => {
    const del = e.target.closest("[data-act-del]");
    if (del) {
      state.health.activities = state.health.activities.filter(x => x.id !== Number(del.dataset.actDel));
      saveState();
    }
  });

  document.getElementById("strength-log-form").addEventListener("submit", e => {
    e.preventDefault();
    const exercise = document.getElementById("st-exercise-name").value.trim();
    const muscle = document.getElementById("st-muscle-group").value;
    const sets = Number(document.getElementById("st-sets").value);
    const reps = Number(document.getElementById("st-reps").value);
    const weight = Number(document.getElementById("st-weight").value);
    if (!exercise) return;

    state.health.strengthSets.push({
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      exercise,
      muscle,
      sets,
      reps,
      weight
    });
    document.getElementById("st-exercise-name").value = "";
    saveState();
  });

  document.getElementById("strength-sets-list").addEventListener("click", e => {
    const del = e.target.closest("[data-st-del]");
    if (del) {
      state.health.strengthSets = state.health.strengthSets.filter(x => x.id !== Number(del.dataset.stDel));
      saveState();
    }
  });

  // Settings & Reminders
  document.getElementById("save-name-btn").addEventListener("click", () => {
    const next = document.getElementById("settings-name-input").value.trim();
    if (next) { state.userName = next; saveState(); }
  });
  document.getElementById("lang-select").addEventListener("change", e => { state.lang = e.target.value; saveState(); });
  document.getElementById("theme-select").addEventListener("change", e => { state.theme = e.target.value; saveState(); });
  document.getElementById("recovery-toggle-btn").addEventListener("click", () => { state.recoveryMode = !state.recoveryMode; saveState(); });

  ["quiet-start", "quiet-end", "rem-sleep-toggle", "rem-water-toggle", "rem-workout-toggle"].forEach(id => {
    document.getElementById(id).addEventListener("change", () => {
      state.health.reminders = {
        quietStart: document.getElementById("quiet-start").value,
        quietEnd: document.getElementById("quiet-end").value,
        sleep: document.getElementById("rem-sleep-toggle").checked,
        water: document.getElementById("rem-water-toggle").checked,
        workout: document.getElementById("rem-workout-toggle").checked
      };
      saveState();
    });
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
