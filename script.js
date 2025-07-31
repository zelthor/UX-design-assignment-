

// Fade-in on scroll
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

function toggleInfo(cardElement) {
  const allCards = document.querySelectorAll('.team-card');
  allCards.forEach(card => {
    if (card !== cardElement) {
      card.classList.remove('expanded');
    }
  });

  cardElement.classList.toggle('expanded');
}