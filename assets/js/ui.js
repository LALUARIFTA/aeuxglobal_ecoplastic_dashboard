// UI primitives shared by every view: toast, counters, chart tooltip, scroll.

let toastTimeout = null;

export function showToast(message) {
  const banner = document.getElementById('toastBanner');
  const text = document.getElementById('toastText');
  if (!banner || !text) return;
  text.textContent = message;
  banner.classList.remove('opacity-0', 'translate-y-3');
  banner.classList.add('opacity-100', 'translate-y-0');
  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    banner.classList.add('opacity-0', 'translate-y-3');
    banner.classList.remove('opacity-100', 'translate-y-0');
  }, 2800);
}

export function animateNumericCounters() {
  document.querySelectorAll('.counter-num').forEach(el => {
    const target = parseFloat(el.getAttribute('data-target'));
    if (isNaN(target)) return;
    const duration = 650;
    const startTime = performance.now();

    function tick(now) {
      const progress = Math.min(1, (now - startTime) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = (target * eased).toFixed(2);
      if (progress < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  });
}

export function updateCciTooltip(barIdx, scoreText, totalBars) {
  const badge = document.getElementById('cciFloatingBadge');
  const text = document.getElementById('cciTooltipText');
  if (!badge || !text) return;

  const percentPos = Math.min(92, Math.max(8, ((barIdx + 0.5) / totalBars) * 100));
  badge.style.left = `${percentPos}%`;
  text.textContent = `${scoreText} CCI`;
}

export function scrollToBottomSmooth() {
  const scrollBox = document.getElementById('viewportScrollContainer');
  scrollBox.scrollTo({ top: scrollBox.scrollHeight, behavior: 'smooth' });
}
