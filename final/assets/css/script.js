// Helpers
const $ = (q, root=document) => root.querySelector(q);
const $$ = (q, root=document) => Array.from(root.querySelectorAll(q));

// Year
$('#year') && ($('#year').textContent = new Date().getFullYear());

// Mobile nav
const navToggle = $('.nav-toggle');
const nav = $('.nav');
navToggle && nav && navToggle.addEventListener('click', () => nav.classList.toggle('open'));

// Back to top
$('.to-top')?.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Reveal on scroll
const io = new IntersectionObserver(entries => {
  for(const e of entries){
    if(e.isIntersecting){
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  }
}, { threshold: 0.15 });
$$('[data-reveal]').forEach(el => io.observe(el));

// Tilt effect
$$('[data-tilt]').forEach(card => {
  let rect = null;
  const maxTilt = 8;
  function update(e){
    rect = rect || card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - .5) * maxTilt * -2;
    const ry = (px - .5) * maxTilt * 2;
    card.style.transform = `rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) translateZ(0)`;
  }
  function reset(){ card.style.transform = 'rotateX(0) rotateY(0)'; rect = null; }
  card.addEventListener('mousemove', update);
  card.addEventListener('mouseleave', reset);
});

// Carousel controls (for blog highlights)
const carousel = document.querySelector('[data-carousel]');
const prevBtn = document.querySelector('.carousel-btn.prev');
const nextBtn = document.querySelector('.carousel-btn.next');
if (carousel && prevBtn && nextBtn){
  const step = 360;
  prevBtn.addEventListener('click', () => carousel.scrollBy({ left: -step, behavior: 'smooth' }));
  nextBtn.addEventListener('click', () => carousel.scrollBy({ left: step, behavior: 'smooth' }));
}

// Fake contact submit
document.querySelector('.contact-form')?.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = e.submitter;
  if(!btn) return;
  const original = btn.textContent;
  btn.disabled = true;
  btn.textContent = 'Sending…';
  setTimeout(() => {
    btn.textContent = 'Sent!';
    setTimeout(() => {
      btn.disabled = false;
      btn.textContent = original;
      e.target.reset();
    }, 1200);
  }, 800);
});

// Scroll progress bar
const progressBar = document.createElement('div');
progressBar.className = 'progress-bar';
document.body.insertBefore(progressBar, document.body.firstChild);

window.addEventListener('scroll', () => {
  const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
  progressBar.style.width = scrolled + '%';
});

// Animated counters (for stats)
$$('[data-counter]').forEach(el => {
  const target = parseInt(el.dataset.value);
  const countEl = el.querySelector('.counter-value');
  let hasAnimated = false;

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting && !hasAnimated){
        hasAnimated = true;
        animateCounter(countEl, 0, target, 1200);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(el);
});

function animateCounter(el, start, end, duration){
  let current = start;
  const range = end - start;
  const increment = range / (duration / 16);
  const timer = setInterval(() => {
    current += increment;
    if(current >= end){
      current = end;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current);
  }, 16);
}
