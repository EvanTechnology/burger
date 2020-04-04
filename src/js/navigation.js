/* $ (function(){

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

 
/*     });

}); */ 


const sections = $('.section');
const display = $('.maincontent');
const pagination = $('.pagination__item');
const activemenu = $('.header-menu__list');
const paginationDots = $('.pagination__dot');
const paginationDotsActive = $('.pagination__dot:before');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

$(window).on('wheel' , e => {
    const deltaY = e.originalEvent.deltaY;

    if( deltaY > 0 ) {
        scrollSection('next');
    };
    if( deltaY < 0 ) {
        scrollSection('prev');
    };
});
let inScroll = false; //the section is not moving now

const performTransition = newSectionNumber => {

    if(inScroll == false) {
        inScroll = true; // the section is moving now
        const newPositionNumber = newSectionNumber* -100;
        const newPositionString = newPositionNumber + "%";
        sections.eq(newSectionNumber).addClass('active').siblings().removeClass('active')
        display.css({
            transform: `translateY(${newPositionNumber}%)`,
        });
        activemenu.css({
            transform: `translateY(${-newPositionNumber}%)`,
        });
        setTimeout(() => {
            inScroll = false;
            paginationColor(newSectionNumber);
            pagination.eq(newSectionNumber).addClass('pagination__item--active').siblings().removeClass('pagination__item--active');
        }, 1300);
    }
};

const scrollSection = direction => {
    const activeSection = sections.filter('.active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();
    
    if(nextSection.length && direction === 'next') {
        performTransition(nextSection.index())
    };
    if(prevSection.length && direction === 'prev') {
        performTransition(prevSection.index())
    };
};

$(document).on('keydown', e => {
    const tagName = e.target.tagName.toLowerCase();
    const userTypingInInputs = tagName === "input" || tagName === "textarea";

  if (userTypingInInputs) return;

  switch (e.keyCode) {
    case 38:
      scrollSection('prev');
      break;
    case 40:
      scrollSection('next');
      break;
  }
});
 const paginationColor = newSectionNumber => {
     const whiteSectors = newSectionNumber === '2'|| newSectionNumber ==="6" || newSectionNumber === "8";

     if(whiteSectors) {
        paginationDots.css("background-color", '#626262');
        paginationDotsActive.css("border-color", "#626262");
    };
    if(!whiteSectors) {
       paginationDots.css("background-color", '#ffffff');
       paginationDotsActive.css("border-color", "#626262");
   };
};
//pagination and menu

$('[data-scroll-to]').on('click', e => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const newSectionNumber = $this.attr('data-scroll-to');

    performTransition(newSectionNumber);
    
    pagination.eq(newSectionNumber).addClass('pagination__item--active').siblings().removeClass('pagination__item--active');

});

// toushswipe lib
if(isMobile) {
    $('body').swipe({
        swipe:(event, direction) => {
            let scrollDirection;
            if(direction === "up") {
                scrollDirection = 'next'
            };
            if(direction === "down") {
                scrollDirection = 'prev'
        };
        scrollSection(scrollDirection);
    }
});
}