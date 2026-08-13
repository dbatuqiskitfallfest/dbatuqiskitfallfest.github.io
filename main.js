// ===== Mobile nav toggle =====
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

if (burger && navLinks) {
  burger.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===== Countdown to event start =====
// Edit EVENT_START if your dates/timezone change.
const EVENT_START = new Date('2026-10-30T10:00:00+05:30').getTime();
const countdownEl = document.getElementById('countdownValue');

function updateCountdown() {
  if (!countdownEl) return;
  const now = Date.now();
  const diff = EVENT_START - now;

  if (diff <= 0) {
    countdownEl.textContent = 'Happening now';
    return;
  }

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);

  countdownEl.textContent = `${days}d ${hours}h ${mins}m`;
}

updateCountdown();
setInterval(updateCountdown, 60000);

// ===== Footer year =====
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
