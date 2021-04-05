// $(document).ready(function () {
//     $('.list-item:first').hover(function () {
//         $(this).toggleClass('active');
//     });
//     $('.list-item:eq(2)').on('click', function () {
//         $('.image:even').fadeToggle('slow');
//     });
//     $('.list-item:eq(4)').on('click', function () {
//         $('.image:odd').animate({
//             opacity: 'toggle',
//             height: 'toggle'
//         }, 3000);
//     });
// });



$(document).ready(function () {

    $('.main_btna, .main_btn, a[href="#sheldure"]').on('click', function () {
        $('.overlay').fadeIn(1000);
        $('.modal').slideDown(1000);
    });

    $('.close').on('click', function () {
        $('.overlay').fadeOut(1000);
        $('.modal').slideUp(1000);
    });
});