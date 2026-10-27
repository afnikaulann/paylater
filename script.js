// ==========================================================
// LOGIKA JAVASCRIPT WEBSITE SHOPEEPAY PROMO SINGLE-PAGE
// ==========================================================

// 1. Countdown Timer
let timeLeft = 9 * 60 + 42; // 09:42
const countdownEl = document.getElementById('countdown-timer');

setInterval(() => {
  if (timeLeft > 0) {
    timeLeft--;
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    if (countdownEl) {
      countdownEl.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    }
  }
}, 1000);

// 2. Live Real-Time Toast Notifications (Simulasi Pemenang)
const liveToast = document.getElementById('live-toast');
const toastUser = document.getElementById('toast-user');
const toastReward = document.getElementById('toast-reward');
const toastTime = document.getElementById('toast-time');

const fakeUsers = [
  { phone: '0812***8491', reward: 'Berjaya tebus Baki RM 300.00' },
  { phone: '0857***1022', reward: 'Berjaya tebus Baki RM 300.00' },
  { phone: '0112***7721', reward: 'Berjaya tebus Baki RM 300.00' },
  { phone: '0821***9034', reward: 'Berjaya tebus Baki RM 300.00' },
  { phone: '0896***4419', reward: 'Berjaya tebus Baki RM 300.00' },
  { phone: '0139***6520', reward: 'Berjaya tebus Baki ShopeePay RM 300' }
];

function showToast() {
  if (!liveToast) return;
  const item = fakeUsers[Math.floor(Math.random() * fakeUsers.length)];
  toastUser.textContent = item.phone;
  toastReward.textContent = item.reward;
  toastTime.textContent = `${Math.floor(Math.random() * 5) + 1} saat yang lalu`;

  liveToast.classList.remove('translate-y-32', 'opacity-0');

  setTimeout(() => {
    liveToast.classList.add('translate-y-32', 'opacity-0');
  }, 4000);
}

// Mulai timer live toast
setInterval(showToast, 7000);
setTimeout(showToast, 2000);
