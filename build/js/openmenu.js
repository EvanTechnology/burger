function openmenu() {

    const menu = document.querySelector('.menu__list');
    const menuElements = document.querySelectorAll('.menu__item');


    menu.addEventListener('click', function(e) {
        if (e.target.classList.contains('menu__name')) {

            if (e.target.parentNode.parentNode.classList.contains('menu__item--active')) {
                e.target.parentNode.parentNode.classList.remove('menu__item--active')

            } else {

                 for (let item of menuElements) {
                
                     if (item.classList.contains('menu__item--active')) {
                         item.classList.remove('menu__item--active');
                     };
                 };
            
            
                 e.target.parentNode.parentNode.classList.add('menu__item--active');
            
        
             };
        };
    });
};
openmenu();