jQuery(($) => {
    $(".js-phone").mask("+7 (999) 999-99-99");
});

if($('.js-send')) {
    $(() => {
        $('.js-send').click((event) => {
            event.preventDefault();

            $('.consultation__left').addClass('consultation__left_inactive');
            $('.consultation__thanks').addClass('consultation__thanks_active');
        })
    })
}

if($('.js-ask')) {
    $(() => {
        $('.js-ask').click((event) => {
            event.preventDefault();

            $('.emergency__request').addClass('emergency__request_inactive');
            $('.emergency__thanks').addClass('emergency__thanks_active');
        })
    })
}

if($('.emergency__wrapper')) {
    $(() => {
        $('.emergency__triger').click(function() {
            const parent = $(this).parent();

            if(parent.hasClass('emergency__item_active')) {
                parent.removeClass('emergency__item_active')
            } else {
                $('.emergency__item').removeClass('emergency__item_active')
                parent.addClass('emergency__item_active')
            }
        })
    })

    $(() => {
        $('.input__accordion').on('keyup', function() {
            const value = $(this).val().toLowerCase();
            
            $('.emergency__line').filter(function() {
                $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            });
        });
    });

    if($('.emergency__more')) {
        $(() => {
            $('.emergency__more').click((event) => {
                event.preventDefault();

                $('.emergency__line').removeClass('emergency__line_none');
                $('.emergency__more').addClass('emergency__more_none')
            })
        })
    }
}


