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


   

/*     $('.section').on('wheel', function(e) {
       console.log('jksdbkj');
       const activeSection = $(e.currentTarget);
       console.log(activeSection);
       const activeSectionIndex = activeSection.index() - 2;
       console.log(activeSectionIndex);
       let nextSectionIndex = activeSectionIndex;
       const wheelDirection = e.originalEvent.deltaY;
       const sectionHeightPx = activeSection.css('height');
       const sectionHeight = parseFloat(sectionHeightPx);
       console.log(sectionHeight);

       if(wheelDirection > 0) {
           nextSectionIndex +=1;
           
       } else {
           nextSectionIndex -=1
       }
       if(nextSectionIndex !== -1) {
       }
       let scroll = document.querySelector('.wrapper');
       if(-1 < nextSectionIndex && nextSectionIndex < 9) {
        
       console.log(nextSectionIndex);
        let shift = -(nextSectionIndex * sectionHeight)+"px";
        let translateY = 'translateY('+shift+')';
        console.log(translateY);
        console.log(shift);
        console.log(scroll);
        scroll.style.transform = translateY;
         $('.wrapper').css({
          transform: translateY('shift')
         })
        }
 */

 
    });

});