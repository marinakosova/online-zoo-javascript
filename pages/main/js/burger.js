const iconMenu = document.querySelector('.menu__icon');
const menuListItem = document.querySelectorAll('.header__list__item');
if (iconMenu) {
    const headerMenu = document.querySelector('.header__menu');
    iconMenu.addEventListener('click', function(e) {
        document.body.classList.toggle('lock-scroll');
        iconMenu.classList.toggle('menu__icon-active');
        headerMenu.classList.toggle('header__menu-active');
    });
    // close burger menu after click on a
    menuListItem.forEach(li => {
        li.addEventListener('click', function(e) {
            headerMenu.classList.remove('header__menu-active');
            iconMenu.classList.remove('menu__icon-active');
            document.body.classList.remove('lock-scroll');
        });
    })
}