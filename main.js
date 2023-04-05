const menuEmail = document.getElementsByClassName('navbar-email');
const menuHamIcon = document.getElementsByClassName('menu')
const menuCarIcon = document.getElementsByClassName('navbar-shopping-cart')

menuEmail[0].addEventListener('click', toggleDesktopMenu);
menuHamIcon[0].addEventListener('click', toggleMobileMenu);
menuCarIcon[0].addEventListener('click', toggleCarAside);

function toggleDesktopMenu(){
    document.querySelector('.desktop-menu').classList.toggle('inactive');
}
function toggleMobileMenu(){
    document.querySelector('.mobile-menu').classList.toggle('inactive')
}
function toggleCarAside(){
    document.querySelector('.product-detail').classList.toggle('inactive')
}