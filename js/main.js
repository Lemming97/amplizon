// ===========================
// AMPLIZON — Main JS
// ===========================

// Sticky nav shadow on scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,0.3)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Fade-in on scroll for cards and sections
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.service-card, .how-step, .hero-panel, .stat-box').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Add fade-in styles dynamically
const style = document.createElement('style');
style.textContent = `
  .fade-in {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease, transform 0.5s ease;
  }
  .fade-in.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);
