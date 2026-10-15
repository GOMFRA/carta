
$(document).ready(function () {

    // Ocultar las cortinas al cargar
    $('.left-curtain').css('width', '0%');
    $('.right-curtain').css('width', '0%');

    $('.valentines-day').click(function () {

        // Animación del sobre
        $('.envelope').css({
            'animation': 'fall 3s linear 1',
            '-webkit-animation': 'fall 3s linear 1'
        });

        $('.envelope').fadeOut(800, function () {

            $('.valentines-day .heart, .valentines-day .text, .valentines-day .front').hide();

            // Mostrar la carta
            var esCelular = window.matchMedia('(max-width: 600px)').matches;

            var escala = esCelular ? 0.40 : 1;

            $('#card').css({
                'visibility': 'visible',
                'opacity': 0,
                'top': '50%',
                'left': '50%',
                'margin': 0,
                'transform': 'translate(-50%, -50%) scale(' + escala + ')',
                'transform-origin': 'center center'
            });

            $('#card').animate({
                'opacity': 1
            }, {
                duration: 1000
            });

        });

    });

});
