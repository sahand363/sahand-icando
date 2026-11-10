// Register PWA Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  });
}

// Translations Dictionary (English default, Persian selectable)
const translations = {
  en: {
    navToday: "Today",
    navVision: "Vision",
    navFocus: "Focus",
    navStats: "Statistics",
    navMore: "More",
    workspace: "WORKSPACE",
    tierPro: "Standard Edition",
    momentumStatus: "High Momentum",
    primaryMission: "Primary Mission",
    missionTitle: "Complete NOIR Core Visual Skeleton",
    missionDesc: "Polish Phase 1 components, typography tokens, responsive layouts, and PWA structure.",
    missionProgress: "Progress",
    startFocus: "Start Focus Session",
    dailyScore: "Daily Completion",
    tasksCount: "5 of 7 Done",
    onTrack: "Optimal Flow State",
    upcomingTasks: "Upcoming Tasks",
    timeline: "Schedule",
    timeBlock1: "Architecture Review",
    timeBlock2: "Deep Focus Session",
    timeBlock2Sub: "Phase 1 Visual Skeleton",
    timeBlock3: "Music Production",
    sleepSummary: "Sleep",
    streakSummary: "Streak",
    streakMeta: "Consistent Flow",
    focusSessionTag: "Deep Work Session",
    focusSessionTitle: "Phase 1 Code Architecture",
    focusSessionSub: "Distraction-free environment. Single task execution.",
    remainingLabel: "MINUTES REMAINING",
    statDeepWork: "Weekly Deep Work",
    statMonthlyWork: "Monthly Work",
    statScore: "Productivity Score",
    focusTrend: "7-Day Consistency",
    focusHoursTitle: "Deep Focus Hours",
    pageTitles: {
      today: "Today's Focus",
      vision: "Vision & Horizons",
      focus: "Deep Work Focus",
      stats: "Productivity Analytics",
      more: "Preferences & System"
    }
  },
  fa: {
    navToday: "امروز",
    navVision: "چشم‌انداز",
    navFocus: "تمرکز عمیق",
    navStats: "آمار و پیشرفت",
    navMore: "بیشتر",
    workspace: "فضای کاری",
    tierPro: "نسخه‌ی استاندارد",
    momentumStatus: "ریتم بهینه",
    primaryMission: "مأموریت اصلی امروز",
    missionTitle: "تکمیل ساختار بصری NOIR",
    missionDesc: "بهینه‌سازی کامپوننت‌های فاز ۱، توکن‌های تایپوگرافی، چیدمان واکنش‌گرا و قابلیت PWA.",
    missionProgress: "پیشرفت مأموریت",
    startFocus: "شروع جلسه‌ی تمرکز",
    dailyScore: "پیشرفت روزانه",
    tasksCount: "۵ از ۷ تسک انجام شده",
    onTrack: "در ریتم ایده‌آل",
    upcomingTasks: "برنامه‌ی روزانه",
    timeline: "جدول زمانی",
    timeBlock1: "بررسی معماری سیستم",
    timeBlock2: "کار عمیق برنامه‌نویسی",
    timeBlock2Sub: "پیاده‌سازی اسکلت بصری",
    timeBlock3: "تولید و میکس موسیقی",
    sleepSummary: "خواب دیشب",
    streakSummary: "استمرار روتین",
    streakMeta: "پیوستگی مداوم",
    focusSessionTag: "جلسه‌ی تمرکز عمیق",
    focusSessionTitle: "معماری کد فاز ۱",
    focusSessionSub: "محیط بدون حواس‌پرتی. تمرکز روی یک خروجی مشخص.",
    remainingLabel: "زمان باقی‌مانده",
    statDeepWork: "کار عمیق این هفته",
    statMonthlyWork: "مجموع کار ماه",
    statScore: "امتیاز بهره‌وری",
    focusTrend: "روند ۷ روز گذشته",
    focusHoursTitle: "ساعات تمرکز عمیق",
    pageTitles: {
      today: "امروز، با تمرکز",
      vision: "چشم‌انداز و مسیر",
      focus: "فضای تمرکز عمیق",
      stats: "آمار و پیشرفت",
      more: "تنظیمات شخصی"
    }
  }
};

// State
let currentLang = localStorage.getItem('noir-lang') || 'en';
let currentTheme = localStorage.getItem('noir-theme') || 'noir';
let activePage = 'today';

// Language Handler
function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('noir-lang', lang);
  
  const isFa = lang === 'fa';
  document.documentElement.lang = isFa ? 'fa' : 'en';
  document.documentElement.dir = isFa ? 'rtl' : 'ltr';

  // Apply translations to all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update Page Title
  const titleEl = document.getElementById('page-title');
  if (titleEl && translations[lang].pageTitles[activePage]) {
    titleEl.textContent = translations[lang].pageTitles[activePage];
  }

  // Update select input value
  const langSelector = document.getElementById('lang-selector');
  if (langSelector) langSelector.value = lang;
}

// Navigation Handler
function setPage(pageId) {
  activePage = pageId;
  document.querySelectorAll('.page').forEach((p) => p.classList.toggle('active', p.id === `page-${pageId}`));
  document.querySelectorAll('[data-page]').forEach((b) => b.classList.toggle('active', b.dataset.page === pageId));

  const titleEl = document.getElementById('page-title');
  if (titleEl && translations[currentLang]?.pageTitles[pageId]) {
    titleEl.textContent = translations[currentLang].pageTitles[pageId];
  }
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Theme Handler
function setTheme(theme) {
  currentTheme = theme;
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('noir-theme', theme);
  const themeSelector = document.getElementById('theme-selector');
  if (themeSelector) themeSelector.value = theme;
}

// Tasks Interactive Mock Data
const tasksData = [
  { id: 1, title: 'Finalize typography tokens & Vazirmatn fallback', tag: 'Core', time: '45m', completed: true },
  { id: 2, title: 'Build responsive bottom bar & desktop sidebar shell', tag: 'UI', time: '60m', completed: true },
  { id: 3, title: 'Configure PWA manifest & Service Worker caching', tag: 'PWA', time: '30m', completed: false },
  { id: 4, title: 'Draft weekly review and milestone roadmap', tag: 'Vision', time: '25m', completed: false }
];

function renderTasks() {
  const container = document.getElementById('task-list-container');
  if (!container) return;
  container.innerHTML = '';

  tasksData.forEach((task) => {
    const item = document.createElement('div');
    item.className = 'task-item';
    item.innerHTML = `
      <div class="custom-checkbox ${task.completed ? 'checked' : ''}" data-id="${task.id}">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div class="task-info">
        <span class="task-title ${task.completed ? 'completed' : ''}">${task.title}</span>
        <div class="task-meta">
          <span>${task.tag}</span>
          <span>·</span>
          <span>${task.time}</span>
        </div>
      </div>
    `;
    container.appendChild(item);
  });

  container.querySelectorAll('.custom-checkbox').forEach((box) => {
    box.addEventListener('click', () => {
      const id = parseInt(box.dataset.id, 10);
      const target = tasksData.find((t) => t.id === id);
      if (target) {
        target.completed = !target.completed;
        renderTasks();
      }
    });
  });
}

// 50-Minute Focus Countdown Timer
let timerSeconds = 50 * 60;
let timerRunning = false;
let timerInterval = null;

function updateTimerDisplay() {
  const minutes = Math.floor(timerSeconds / 60).toString().padStart(2, '0');
  const seconds = (timerSeconds % 60).toString().padStart(2, '0');
  const display = document.getElementById('focus-timer-display');
  if (display) display.textContent = `${minutes}:${seconds}`;
}

function initFocusTimer() {
  const toggleBtn = document.getElementById('focus-start-btn');
  const label = document.getElementById('focus-btn-label');
  const resetBtn = document.getElementById('focus-reset-btn');

  if (!toggleBtn || !resetBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (timerRunning) {
      clearInterval(timerInterval);
      timerRunning = false;
      label.textContent = currentLang === 'fa' ? 'ادامه' : 'Resume';
    } else {
      timerRunning = true;
      label.textContent = currentLang === 'fa' ? 'توقف' : 'Pause';
      timerInterval = setInterval(() => {
        if (timerSeconds > 0) {
          timerSeconds--;
          updateTimerDisplay();
        } else {
          clearInterval(timerInterval);
          timerRunning = false;
          label.textContent = currentLang === 'fa' ? 'پایان' : 'Completed';
        }
      }, 1000);
    }
  });

  resetBtn.addEventListener('click', () => {
    clearInterval(timerInterval);
    timerRunning = false;
    timerSeconds = 50 * 60;
    updateTimerDisplay();
    label.textContent = currentLang === 'fa' ? 'شروع تمرکز' : 'Start Session';
  });
}

// Event Listeners Initialization
document.addEventListener('DOMContentLoaded', () => {
  // Navigation Clicks
  document.querySelectorAll('[data-page]').forEach((btn) => {
    btn.addEventListener('click', () => setPage(btn.dataset.page));
  });

  document.querySelectorAll('[data-action="quick-focus"]').forEach((btn) => {
    btn.addEventListener('click', () => setPage('focus'));
  });

  // Settings dropdowns
  const langSel = document.getElementById('lang-selector');
  if (langSel) {
    langSel.addEventListener('change', (e) => setLanguage(e.target.value));
  }

  const themeSel = document.getElementById('theme-selector');
  if (themeSel) {
    themeSel.addEventListener('change', (e) => setTheme(e.target.value));
  }

  // Vision Horizon Pills
  document.querySelectorAll('.hierarchy-pill').forEach((pill) => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('.hierarchy-pill').forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');
    });
  });

  // Init
  setTheme(currentTheme);
  setLanguage(currentLang);
  renderTasks();
  initFocusTimer();
  updateTimerDisplay();
});
