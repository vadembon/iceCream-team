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
    closeMenuLinkContact: document.querySelector('[data-nav-linkC]'),
    closeMenuLinkProduct: document.querySelector('[data-nav-linkP]'),
    closeMenuLinkProduct: document.querySelector('[data-nav-linkB]'),
    closeMenuLinkProduct: document.querySelector('[data-nav-linkD]'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuLink.addEventListener('click', toggleMenu);
  refs.closeMenuLinkContact.addEventListener('click', toggleMenu);
  refs.closeMenuLinkProduct.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-none');
    refs.menu.classList.toggle('menu-scroll');
    refs.body.classList.toggle('no-scroll');
  }
})();
