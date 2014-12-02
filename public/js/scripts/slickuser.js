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
});