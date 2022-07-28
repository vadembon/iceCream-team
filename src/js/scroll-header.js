window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop; // Получаем положение скролла
  if (scrolled !== 0) {
    // Если прокрутка есть, то делаем блок прозрачным
    document.querySelector('.header-scroll').style.background =
      'rgba(255, 184, 202, 0.7)';
  } else {
    // Если нет, то делаем его полностью видимым
    document.querySelector('.header-scroll').style.background = 'transparent';
  }
};
