function openreview() {

    const page = document.querySelector(".reviews");
    const reviewBlock = document.querySelector('.reviews__list');

    const modal = document.createElement('div');
    const modalName = document.createElement('h3');
    const modalText = document.createElement('p');
    const modalBtn = document.createElement('button');

    modal.classList.add('modal');
    modalName.classList.add('modal__name');
    modalText.classList.add('modal__text');
    modalBtn.classList.add('modal__btn');
    modalBtn.classList.add('btn');
    modalBtn.classList.add('btn--black');

    modalBtn.textContent = "Back";

    modal.appendChild(modalName);
    modal.appendChild(modalText);
    modal.appendChild(modalBtn);


    reviewBlock.addEventListener('click', function(e) {
        e.preventDefault();

        if (e.target.classList.contains('btn--black')) {

            console.log("cnalknc");
            page.appendChild(modal);
            modalName.textContent = 
            e.target.parentNode.querySelector('.review__name').textContent;
            modalText.textContent = 
            e.target.parentNode.querySelector('.review__text').textContent;
        };
    });

    modalBtn.addEventListener('click', function(e) {
        page.removeChild(modal);
        console.log('DONE')
    });
   
}
openreview();
