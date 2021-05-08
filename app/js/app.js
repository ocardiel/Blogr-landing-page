var mobileMenus = document.querySelectorAll('.hero__mobilemenu');

mobileMenus.forEach((mobileMenu) => {
    mobileMenu.addEventListener('click', () => {
        var image = mobileMenu.querySelector('img');        
        image.classList.toggle('clicked');
        var menuMobile = mobileMenu.querySelector('.hero__submenu');        
        menuMobile.classList.toggle('open');
    });
});

var hamburgers = document.querySelectorAll('.hero__hamburger');

hamburgers.forEach((hamburger) => {
    hamburger.addEventListener('click', () => {
        hamburgers.forEach((x)=>{ x.classList.toggle('hero__hamburger--close') });
        var menu = document.querySelector('.hero__window');
        menu.classList.toggle('open');
    });
});
    
