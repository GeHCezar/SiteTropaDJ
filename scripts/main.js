const btnMenu = document.querySelector('.navbar-toggler');
const menuMobile = document.querySelector('#navbarText');

function abreFechaMenu () {
    if (menuMobile.classList.contains('show')) {
        menuMobile.classList.remove('show');
    } else {
        menuMobile.classList.add('show');
    }
}

btnMenu.addEventListener('click', abreFechaMenu);
