document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  const heroEl = document.querySelector('.top-hero');
  const solidThreshold = heroEl ? Math.max(heroEl.offsetHeight - 120, 40) : 40;

  const onScroll = () => {
    if (window.scrollY > solidThreshold) {
      header.classList.add('solid');
    } else {
      header.classList.remove('solid');
    }
  };
  onScroll();
  window.addEventListener('scroll', onScroll);

  if (toggle && navList) {
    toggle.addEventListener('click', () => {
      navList.classList.toggle('open');
    });
    navList.querySelectorAll('a').forEach((a) => {
      a.addEventListener('click', () => navList.classList.remove('open'));
    });
  }

  const serviceBtns = document.querySelectorAll('.service-btn');
  if (serviceBtns.length) {
    serviceBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const wasOpen = btn.classList.contains('is-open');
        serviceBtns.forEach((b) => b.classList.remove('is-open'));
        if (!wasOpen) btn.classList.add('is-open');
      });
    });
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.service-btn')) {
        serviceBtns.forEach((b) => b.classList.remove('is-open'));
      }
    });
  }
});
