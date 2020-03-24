function openreview() {

    const page = document.querySelector(".reviews");
    const reviewBlock = document.querySelector('.reviews__list');

    const modal = document.createElement('div');
    const modalBlock = document.createElement('div');
    const modalName = document.createElement('h3');
    const modalText = document.createElement('p');
    const modalBtn = document.createElement('button');
    const modalBtnElement = document.createElement('span');


    modal.classList.add('modal');
    modalBlock.classList.add('modal__block');
    modalName.classList.add('modal__name');
    modalText.classList.add('modal__text');
    modalBtnElement.classList.add('menu-close-btn__item');
    modalBtn.classList.add('menu-close-btn');
    /*modalBtn.classList.add('btn');
    modalBtn.classList.add('btn--black');

    modalBtn.textContent = "Back";*/

    modal.appendChild(modalBlock);
    modalBlock.appendChild(modalName);
    modalBlock.appendChild(modalText);
    modalBlock.appendChild(modalBtn);
    modalBtn.appendChild(modalBtnElement);


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
