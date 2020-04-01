$ (function(){

    const pagination = $(('.pagination'), $('.wrapper')),
        dots = pagination.find('.pagination__item'),
        activeDot = dots.filter('.pagination__item--active');

    function dotIndication(activeDot, requiredDot) {
        activeDot.removeClass('pagination__item--active');
        requiredDot.classList.add('pagination__item--active');

    };

    $('.header-menu__link').on('click', function(e) {

        const menu = $(('.header-menu__list'), $('.wrapper')),
            requiredSection = $(e.currentTarget.parentNode),
            requiredSectionIndex = requiredSection.index(),

            activeDotIndex = 0,
            requiredDotIndex = requiredSectionIndex,
            requiredDot = dots[requiredDotIndex];
           
        dotIndication(activeDot, requiredDot);
    });

    $('.page-control').on('click', function(e) {

        const 
            activeDotIndex = 0,
            requiredDotIndex = 1,
            requiredDot = dots[requiredDotIndex];
        
        dotIndication(activeDot, requiredDot);
    });

    $('.header__btn').on('click', function(e) {

        const 
            activeDotIndex = 0,
            requiredDotIndex = 6,
            requiredDot = dots[requiredDotIndex];
       
        dotIndication(activeDot, requiredDot);
    });

    $('.order__btn').on('click', function(e) {

        const 
        
            activeDotIndex = 1,
            requiredDotIndex = 6,
            requiredDot = dots[requiredDotIndex];
    
        dotIndication(activeDot, requiredDot);
    });

    const fullpage = $('.section', $('.wrapper'));
    console.log(fullpage);

    //let coordY = 1;

    $('.section').on('wheel', function(e) {
       console.log('jksdbkj');
       const activeSection = $(e.currentTarget);
       console.log(activeSection);
       const direction = e.originalEvent.deltaY;
       console.log(direction);

       //console.log(e.pageY);
       //const differenceY = coordy - e.pageY;
       //console.log(differenceY);
       //activeSection.slideUp();
       //activeSection.scroll;
        
       
        
    //    console.log(direction);
    //     if (e.deltaY > 0) {
    //         console.log("more");
    //     //     $('.section').scrolltop(300);
    //     // }
    //     }
    });

});