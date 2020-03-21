function openingredients() {
    const menubtn = document.querySelector('.ingredients');
    const menublock = document.querySelector('.ingredients__container');
    const menuinnerbtn = document.querySelector('.ingredients__menu');

    menubtn.addEventListener('click', function() {

        menubtn.classList.toggle('opened');
        menublock.classList.toggle('active');

        
    });
    menuinnerbtn.addEventListener('click', function(e) {
        menublock.classList.toggle('active');
        menubtn.classList.toggle('opened');

    })

   
};

openingredients();