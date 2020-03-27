function orderform() {
    const form = document.querySelector('.order__form');
    const sendBtn = document.querySelector('#submitOrder');

    sendBtn.addEventListener('click', event => {
        event.preventDefault();
        console.log(form.elements.phone);

        /*if (validateForm(form)) {

        }*/
        
        
        const dataForm ={
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comments.value,
            to: 'evgeniikonkov1@gmail.com',
        };
        console.log(dataForm);

        const firstRequest = new XMLHttpRequest();
        firstRequest.responseType = 'json';
        firstRequest.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        firstRequest.send(JSON.stringify(dataForm));
        console.log(JSON.stringify(dataForm));
        firstRequest.addEventListener('load', ()=> {
            console.log(firstRequest.response);
            console.log('already send');
        });
        const anotherRequest = new XMLHttpRequest();
        anotherRequest.responseType = 'json';
        anotherRequest.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
        anotherRequest.send(JSON.stringify(dataForm));
        console.log(JSON.stringify(dataForm));
        anotherRequest.addEventListener('load', ()=> {
            console.log(anotherRequest.response);
            console.log('already send');
        });
    });
    function validateForm(form) {
        let valid = true;
        if(!validField(form.elements.name)) {
            valid = false;
        }
        if (!validField(form.elements.phone)) {
            valid = false;
        }
        return valid;
    };
    function validField(field) {
       if (!field.checkValidity()) {
           field.nextElementSibling.textContent = field.validationMessage;
           return false;
       } else {
           field.nextElementSibling.textContent = '';
           return true;
       }
    };
    
};

orderform();