  /*  VARIABLES */
  let $button = document.getElementById('button');
  let $menu = document.getElementById('menu');
  let $link = document.querySelectorAll('.main-menu__list__items--link');
  let $line = document.querySelector('.main-button__burger--line');

  /* SHOW MENU */
    $button.addEventListener('click', () => {
      $menu.classList.toggle('show');
      $line.classList.toggle('active');
    });

  /* HIDDEN MENU */
    $link.forEach(n => n.addEventListener('click', () => {
      $menu.classList.remove('show');
    }));