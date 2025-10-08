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
