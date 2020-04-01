$ (function(){

    $('.header-menu__link').on('click', function(e) {

        const menu = $(('.header-menu__list'), $('.wrapper')),
            requiredSection = $(e.currentTarget.parentNode),
            requiredSectionIndex = requiredSection.index(),

            pagination = $(('.pagination'), $('.wrapper')),
            dots = pagination.find('.pagination__item'),
            activeDot = dots.filter('.pagination__item--active'),
            activeDotIndex = 0,
            requiredDotIndex = requiredSectionIndex,
            requiredDot = dots[requiredDotIndex];
            
           

        activeDot.removeClass('pagination__item--active');
        requiredDot.classList.add('pagination__item--active');
    });
    $('.control__scroll').on('click', function(e) {
        const pagination = $(('.pagination__item'), $('.wrapper')),
            requiredDotIndex = 1,
            requiredDot = dots[requiredDotIndex];

        activeDot.removeClass('pagination__item--active');
        requiredDot.classList.add('pagination__item--active');

        console.log(pagination);
    });
});