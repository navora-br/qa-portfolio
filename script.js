// Subtle section reveal on scroll
const observer = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    }
  },
  { threshold: 0.08 }
);
document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
