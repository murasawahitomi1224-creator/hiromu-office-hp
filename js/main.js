document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.site-header');
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');

  const onScroll = () => {
    if (window.scrollY > 40) {
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
});
