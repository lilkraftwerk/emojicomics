$(document).ready(function(){
    $('.carousel').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        prevArrow: '<img class="slick-button slick-prev" src="img/bwarrowleft.png">',
        nextArrow: '<img class="slick-button slick-next" src="img/bwarrowright.png">',
        speed: 1000,
        infinite: true
    });

    loadNewCatchphrase()
});

var catchphrases = [
    'to err is human; to emoji, divine',
    'an unemoji\'d life is not worth living',
    'fiat emojis',
    'give me emojis or give me death',
    'a man without emojis is a wild beast loosed upon this world',
    'know thy emoji',
    ''
]

function loadNewCatchphrase(){
    var index = Math.floor(Math.random() * catchphrases.length)
    $(".mainquote").text(catchphrases[index])
}