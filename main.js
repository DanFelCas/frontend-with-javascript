const menuEmail = document.getElementsByClassName('navbar-email');

menuEmail[0].addEventListener('click', toggleDesktopMenu);

function toggleDesktopMenu(){
    document.querySelector('.desktop-menu').classList.toggle('inactive');
}