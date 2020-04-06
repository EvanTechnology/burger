
const sections = $('.section');
const display = $('.maincontent');
const pagination = $('.pagination__item');
const activemenu = $('.header-menu__list');
const paginationDots = $('.pagination__dot');
const paginationDotsActive = document.querySelectorAll('.pagination__dot::before');
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const firstPageArrow = $('.page-control');

$(firstPageArrow).on('click', e => {
    e.preventDefault();
    scrollSection('next');
});

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
     paginationDots.removeClass('pagination__dot--black');
     if(whiteSectors) {
        paginationDots.css("background-color", '#5e5e5e');
        paginationDots.addClass('pagination__dot--black');
        //paginationDotsActive.css("border-color", "#5e5e5e");
    };
    if(!whiteSectors) {
       paginationDots.css("background-color", '#ffffff');

       //paginationDotsActive.css("border-color", "#ffffff");
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

// toushswipe and mobile-detect libs don't work
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