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
