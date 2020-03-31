$ (function() {

    $('.pagination__link').on('click', function(e) {
        e.preventDefault();

        const $this = $(this),
            container = $this.closest('.wrapper'),
            pages = container.find('.section'),
            activePage = pages.filter('.active'),
            requiredPage = activePage.next(),
            requiredIndex = requiredPage.index(),
            duration = 500,
            pagination = $this.closest('.pagination'),
            dots = pagination.find('.pagination__item'),
            activeDot = dots.filter('.pagination__item--active'),
            activeDotIndex = activeDot.index(),
            requiredDot = $(e.currentTarget.parentNode),
            requiredDotIndex = requiredDot.index();

            console.log(pages);
            console.log(activePage);
            console.log(dots);
            console.log(activeDot);
            console.log(requiredDotIndex);
        
        
            container.animate( {
            'top' : - requiredDotIndex * 100 + '%'
        }, duration, function() {
            activePage.removeClass('active');
            activeDot.removeClass('pagination__item--active');
            requiredPage.addClass('active');
            requiredDot.addClass('pagination__item--active');
        });
        
    });
});