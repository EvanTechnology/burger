function openteam() {

    const team = document.querySelector('.team__list');
    const member = document.querySelectorAll('.team__name');
    
    

    team.addEventListener('click', function(e) {

    if (e.target.parentNode.classList.contains('team__item--active')) {
        e.target.parentNode.classList.remove('team__item--active')
    } else {
        for (let item of member) {

            if (item.parentNode.classList.contains('team__item--active')) {
                item.parentNode.classList.remove('team__item--active')
            };

        }

        e.target.parentNode.classList.add('team__item--active');
        
        
    };


      

    });

};

openteam();