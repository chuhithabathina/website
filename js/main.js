(function ($) {
    "use strict"

    if ($('.typed-text-output').length==1){
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings:typed_strings.split(','),
            typeSpeed:100,
            backSpeed:20,
            smartBackspace:false,
            loop:true
        });


// portfolio isotope
var portfolioIsotope = $('.portfolio-container').isotope({itemSelector: '.portfolio-item',layoutMode: 'fitRows'});
$('#portfolio-filters li').on('click',function(){
    $("#portfolio-filters li").removeClass('active');
    $(this).addClass('active');

    portfolioIsotope.isotope({filter: $(this).data('filter')});
});

// nnav bar on scrolling

$(window).scroll(function(){
    if ($(this).scrollTop()>200){
        $('.navbar').fadeIn('slow').css('display','flex');
    } else{
        $('.navbar').fadeOut('slow').css('display','none');
        }
});

$('.skill').waypoint(function() {
    $('.progress.progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  });

}
})(jQuery);

//smooth scrolling in the nav bar links
$(".navbar-nav a").on('click',function(event){
    if(this. hash!==""){
        event.preventDefault();
    
        $('html,body').animate({
         scrollTop:$(this.hash).offset().top - 45   
        },1500,'easeInOutExpo');
        if($(this).parents('.navbar-nav').length) {
            $('.navbar-nav .active').removeClass('active');
            $(this).closest('a').addClass('active');
    
        }
}
});

//testimonial
$(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed:1500,
    dots:true,
    iems:1
});
