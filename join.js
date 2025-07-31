// Fade-in on scroll for "Join Us" page
function handleFadeIn() {
  const fadeEls = document.querySelectorAll('.fade-in');
  const trigger = window.innerHeight - 100;

  fadeEls.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn);