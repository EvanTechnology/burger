function openmainmenu() {
    const menubtn = document.querySelector('.hamburger__menu');
    const menublock = document.querySelector('.header-menu__list');

    menubtn.addEventListener('click', function() {

        menubtn.classList.toggle('closed');
        menublock.classList.toggle('active');

        
    });

    menublock.addEventListener('click', function(event) {

        if (menublock.classList.contains('active') && event.target.classList.contains('header-menu__link')) {
        
        menubtn.classList.toggle('closed');
        menublock.classList.toggle('active');
        };

    });
};

openmainmenu();