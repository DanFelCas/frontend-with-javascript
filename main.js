const menuEmail = document.getElementsByClassName('navbar-email');
const menuHamIcon = document.getElementsByClassName('menu')

menuEmail[0].addEventListener('click', toggleDesktopMenu);
menuHamIcon[0].addEventListener('click', toggleMobileMenu);

function toggleDesktopMenu(){
    document.querySelector('.desktop-menu').classList.toggle('inactive');
}
function toggleMobileMenu(){
    document.querySelector('.mobile-menu').classList.toggle('inactive')
}