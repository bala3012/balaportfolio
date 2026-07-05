const roles = ['Frontend Developer', 'Java Programmer', 'React Enthusiast', 'ECE Student'];
let roleIdx = 0;
let charIdx = 0;
let deleting = false;
const typingEl = document.getElementById('typingText');

function type() {
  const current = roles[roleIdx];
  if (!deleting) {
    typingEl.textContent = current.slice(0, ++charIdx);
    if (charIdx === current.length) {
      deleting = true;
      setTimeout(type, 1800);
      return;
    }
  } else {
    typingEl.textContent = current.slice(0, --charIdx);
    if (charIdx === 0) {
      deleting = false;
      roleIdx = (roleIdx + 1) % roles.length;
    }
  }
  setTimeout(type, deleting ? 55 : 90);
}

type();

const navbar = document.getElementById('navbar');
const backTop = document.getElementById('backTop');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 20);
  backTop.classList.toggle('visible', window.scrollY > 400);
});

const themeToggle = document.getElementById('themeToggle');
let isDark = true;
themeToggle.addEventListener('click', () => {
  isDark = !isDark;
  document.documentElement.dataset.theme = isDark ? 'dark' : 'light';
  themeToggle.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const navOverlay = document.getElementById('navOverlay');

function toggleMobileNav() {
  mobileNav.classList.toggle('open');
  navOverlay.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMobileNav);
navOverlay.addEventListener('click', toggleMobileNav);
document.querySelectorAll('.mob-link').forEach((a) => a.addEventListener('click', toggleMobileNav));

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
);

reveals.forEach((el) => observer.observe(el));

const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
window.addEventListener(
  'scroll',
  () => {
    let current = '';
    sections.forEach((section) => {
      if (window.scrollY >= section.offsetTop - 120) current = section.id;
    });
    navAs.forEach((a) => {
      a.style.color = a.getAttribute('href') === `#${current}` ? 'var(--accent)' : '';
    });
  },
  { passive: true }
);

setTimeout(() => {
  document.querySelectorAll('#hero .reveal').forEach((el) => el.classList.add('visible'));
}, 100);
