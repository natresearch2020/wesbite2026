const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('.nav');if(toggle&&nav){toggle.addEventListener('click',()=>{const opened=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});}document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());


// Subtle on-scroll reveal, respecting reduced-motion preferences.
(function () {
  var reduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduced || !('IntersectionObserver' in window)) return;
  var items = document.querySelectorAll('.section-title, .lead, .card, .feature, .service-list li, .download-box, .prose, .info-row, .form-shell');
  if (!items.length) return;
  items.forEach(function (el) { el.classList.add('reveal'); });
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px 35px 0px' });
  items.forEach(function (el) { observer.observe(el); });
  document.documentElement.classList.add('motion-ready');
})();
