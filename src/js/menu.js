// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('.menu-open-btn'),
//     closeMenuBtn: document.querySelector('.menu-close-btn'),
//     menu: document.querySelector('.burger-menu'),
//     body: document.querySelector('body'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('is-hidden');
//     refs.body.classList.toggle('no-scroll');
//   }
// })();

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open__btn'),
    closeMenuBtn: document.querySelector('.menu-close-btn'),
    menu: document.querySelector('.burger-menu'),
    body: document.querySelector('body'),
    closeMenuLink: document.querySelector('[data-nav-link]'),
    closeMenuLinkAbout: document.querySelector('[data-nav-link-M]'),
    closeMenuLinkHome: document.querySelector('[data-nav-link-H]'),
    closeMenuLinkProduct: document.querySelector('[data-nav-link-P]'),
    closeMenuLinkContact: document.querySelector('[data-nav-link-C]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.addEventListener('click', toggleMenu);
  refs.closeMenuLinkAbout.addEventListener('click', toggleMenu);
  refs.closeMenuLinkHome.addEventListener('click', toggleMenu);
  refs.closeMenuLinkProduct.addEventListener('click', toggleMenu);
  refs.closeMenuLinkContact.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-none');
    refs.menu.classList.toggle('menu-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();
