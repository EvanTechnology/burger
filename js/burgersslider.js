function burgersslider() {

    const right = document.querySelector('.control__arrow--right');
    const left = document.querySelector('.control__arrow--left');
    const list = document.querySelector('.burgers__list');

    right.addEventListener('click', function(e) {
        e.preventDefault();
        list.appendChild(list.firstElementChild);
    });

    left.addEventListener('click', function(e) {
        e.preventDefault();
        list.insertBefore(list.lastElementChild, list.firstElementChild);
    });

};

burgersslider();
