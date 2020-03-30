function openingredients() {
    const burgers = document.querySelector('.burgers__list');
    
    burgers.addEventListener('click', function(e) {
        if (e.target.classList.contains('burgers__ingredients')) {
            let menubtn = e.target.parentNode.querySelector('.ingredients');
            let menublock = e.target.parentNode.querySelector('.ingredients__container')
            menubtn.classList.toggle('opened');
            menublock.classList.toggle('active');

            let menuinnerbtn = e.target.parentNode.querySelector('.ingredients__menu');
            menuinnerbtn.addEventListener('click', function(e) {
                menublock.classList.toggle('active');
                menubtn.classList.toggle('opened');
            });
        }
    });
      
};

openingredients();