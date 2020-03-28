function orderform() {
    const form = document.querySelector('.order__form');
    const sendBtn = document.querySelector('#submitOrder');

    let formData = new FormData(form);
    formData.set('name', form.elements.name.value );
    formData.append('phone', form.elements.phone.value );
    formData.append('comment', form.elements.comments.value );
    formData.append('to', 'evgeniikonkov1@gmail.com');

    console.log(formData);

    form.addEventListener('submit', event => {
        event.preventDefault();
        console.log(form.elements.phone.value);

        /*if (validateForm(form)) {

        }*/
       
        
        
        /*const dataForm ={
            name: form.elements.name.value,
            phone: form.elements.phone.value,
            comment: form.elements.comments.value,
            to: 'evgeniikonkov1@gmail.com',
        };*/
        

        const firstRequest = new XMLHttpRequest();
        firstRequest.responseType = 'json';
        firstRequest.open('POST', 'https://webdev-api.loftschool.com/sendmail');
        firstRequest.send(formData);
        /*firstRequest.send(JSON.stringify(dataForm));
        console.log(JSON.stringify(dataForm));*/
        firstRequest.addEventListener('load', ()=> {
            console.log(firstRequest.response);
            console.log('already send');

            /* обработка ответа должна быть здесь*/

        });
        /*const anotherRequest = new XMLHttpRequest();
        anotherRequest.responseType = 'json';
        anotherRequest.open('POST', 'https://webdev-api.loftschool.com/sendmail/fail');
        anotherRequest.send(JSON.stringify(dataForm));
        console.log(JSON.stringify(dataForm));
        anotherRequest.addEventListener('load', ()=> {
            console.log(anotherRequest.response);
            console.log('already send');
        });*/
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