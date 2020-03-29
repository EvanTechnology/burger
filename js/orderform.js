function orderform() {
    const form = document.querySelector('.order__form');
    const sendBtn = document.querySelector('#submitOrder');

    const modal = document.createElement('div');
    const modalText = document.createElement('p');
    const modalBtn = document.createElement('button');
    const modalBtnElement = document.createElement('span');

    modal.classList.add('response');
    modalText.classList.add('modal__name');
    modalBtnElement.classList.add('menu-close-btn__item');
    modalBtn.classList.add('menu-close-btn');

    
    modal.appendChild(modalText);
    modal.appendChild(modalBtn);
    modalBtn.appendChild(modalBtnElement);

    let formData = new FormData(form);
    const url = 'https://webdev-api.loftschool.com/sendmail';
    
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (validateField(form.elements.phone.value)) {

        
       
        
        formData.set('name', form.elements.name.value );
        formData.set('phone', form.elements.phone.value );
        formData.set('comment', form.elements.comment.value );
        formData.set('to', 'evgeniikonkov1@gmail.com');


        fetch(url, {method: 'POST', body: formData})
        .then(response => response.json())
        .then(response => {
            if (response.status == 1) {
                modalText.innerText = "Thank you for your order";
            } else {
                modalText.innerText = "Oops... something goes wrong. Please, repeat."
            }
            form.appendChild(modal);
        });
        
        }
    });
    modal.addEventListener('click', e=> {
        if (e.target.classList.contains('menu-close-btn__item')) {
           form.removeChild(modal);
        }
    });
    
    function validateField(field) {

        if (!isFinite(field)) {
            alert('Please, check your phone number');
            return false
        } else {
            return true
        }
       
    };
    
};

orderform();