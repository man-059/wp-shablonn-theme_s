(function($){
    $('.picture-carousel').owlCarousel({
        loop:true,
        dots:false,
        margin:16,
        nav:false,
        center:true,
        autoplayTimeout:5000,
        autoPlay: true,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1
            },
            991:{
                items:3
            }
        }
    });
    $('.pc-btn-next-wrap').click(function() {
        $('.picture-carousel').trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.pc-btn-prev-wrap').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        $('.picture-carousel').trigger('prev.owl.carousel', [300]);
    })
    /*var ce = $('.picture-carousel');
    // Go to the next item
    $('.pc-NextBtn').click(function() {
        ce.trigger('next.owl.carousel');
    });
    // Go to the previous item
    $('.pc-PrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        ce.trigger('prev.owl.carousel', [300]);
    });*/
})(jQuery);

function showText()
{
    $('#so-block').find('.so-block-inner').removeClass('closed');
}

function hideBlock()
{
    $('#so-block').stop(true,true).animate({width:'toggle'});
}

(function (d, w) {
    $('#so-close').on('click', function () {
        if($(this).hasClass('closed'))
        {
            clearTimeout($.data(this,'timer'));
            $(this).removeClass('closed');
            $('#so-block').stop(true,true).animate({width:'toggle'});
            window.setTimeout( showText, 400);

        }
        else
        {
            clearTimeout($.data(this,'timer'));
            $(this).addClass('closed');
            $('#so-block').find('.so-block-inner').addClass('closed');
            window.setTimeout( hideBlock, 400);
        }
        return false;
    });
    $('.btn.harmony').on('click', function () {
        if($(this).hasClass('h-active'))
        {
            /*$(this).closest('.heading').removeClass('h-active');*/
            $(this).removeClass('h-active');
            $(this).parent().prev('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-10').find('.heading').removeClass('h-active');
            /*$(this).parent().closest('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-7').find('.text');*/
            clearTimeout($.data(this,'timer'));
            $(this).parent().prev('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-10').find('.text').stop(true,true).slideUp(400);
        }
        else
        {
            /*$(this).addClass('h-active');
            $(this).closest('.heading').addClass('h-active');*/
            $(this).addClass('h-active');
            $(this).parent().prev('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-10').find('.heading').addClass('h-active');
            clearTimeout($.data(this,'timer'));
            $(this).parent().prev('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-10').find('.text').stop(true,true).slideDown(400);
            var hoff = $('#header').outerHeight();
            $('html,body').animate({ scrollTop: $(this).parent().prev('.offset-lg-2.col-lg-5.offset-1.col-md-8.col-10').find('.text').offset().top - hoff}, 'slow');
        }
        return false;
    });
    $('.phonebtn').on('click', function () {
        if($(this).hasClass('c-pressed'))
        {
            /*$(this).closest('.heading').removeClass('h-active');*/
            $(this).removeClass('c-pressed');
            clearTimeout($.data(this,'timer'));
            $(this).parent().parent().find('.phone-line').stop(true,true).slideUp(400);
        }
        else
        {
            if($('.custom-block.bordered>div').hasClass('c-pressed'))
            {
                $('.mail-line.c-pressed').stop(true,true).slideUp(400);
                $('.phone-line.c-pressed').stop(true,true).slideUp(400);
                $('.mail-line.c-pressed').removeClass('c-pressed');
                $('.phone-line.c-pressed').removeClass('c-pressed');
                $('.phonebtn').removeClass('c-pressed');
                $('.mailbtn').removeClass('c-pressed');
            }
            $(this).addClass('c-pressed');
            clearTimeout($.data(this,'timer'));
            $(this).parent().parent().find('.phone-line').stop(true,true).slideDown(400);
            $(this).parent().parent().find('.phone-line').addClass('c-pressed');
        }
        return false;
    });
    $('#search-btn').on('click', function () {
        $(this).slideUp(400);
        $('#upper-menu').slideUp(400);
        $('#search-block').slideDown(400);
    });
    $('#s-close-btn').on('click', function () {
        $('#search-block').slideUp(400);
        $('#upper-menu').slideDown(400);
        $('#search-btn').slideDown(400);
    });
    $('.mailbtn').on('click', function () {
        if($(this).hasClass('c-pressed'))
        {
            $(this).removeClass('c-pressed');
            clearTimeout($.data(this,'timer'));
            $(this).parent().parent().find('.mail-line').stop(true,true).slideUp(400);

        }
        else
        {
            if($('.custom-block.bordered>div').hasClass('c-pressed'))
            {
                $('.mail-line.c-pressed').stop(true,true).slideUp(400);
                $('.phone-line.c-pressed').stop(true,true).slideUp(400);
                $('.mail-line.c-pressed').removeClass('c-pressed');
                $('.phone-line.c-pressed').removeClass('c-pressed');
                $('.phonebtn').removeClass('c-pressed');
                $('.mailbtn').removeClass('c-pressed');
            }
            $(this).addClass('c-pressed');
            clearTimeout($.data(this,'timer'));
            $(this).parent().parent().find('.mail-line').stop(true,true).slideDown(400);
            $(this).parent().parent().find('.mail-line').addClass('c-pressed');
        }
        return false;
    });
    /*$(window).scroll(function(){
        var docscroll=$(document).scrollTop();
        var offsetheight=$('#header').height();
        if(docscroll>offsetheight)
        {
            $("#h-offset").style.height = offsetheight.toString()+"px";
            $('#header').addClass('scrolled');
        }
        else
        {
            $('#header').removeClass('scrolled');
            $("#h-offset").style.height = 0;
        }
    });*/
}(document, window));
$(document).ready(function () {
    var owl = $('.marquee-carousel');
    owl.owlCarousel({
        items: 3,
        //rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoWidth:true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        smartSpeed: 4000,
        autoplaySpeed: 4000,
        fluidSpeed: 4000,
        slideSpeed: 4000,
        autoplayHoverPause: false,
        dots: false,
        nav: false
    });

});
$(document).on("load",function () {
    var owl = $('.marquee-carousel');
    owl.owlCarousel({
        items: 3,
        //rtl: true,
        loop: true,
        margin: 20,
        autoplay: true,
        autoWidth:true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        dots: false,
        nav: false
    });

});
var paddingheight;
(function ($) {
    $(window).on("pageload",(function () {
        paddingheight=$('#header').outerHeight(true);
    }));
    $(window).scroll(function(){
        var docscroll=$(document).scrollTop();
        var offsetheight=$('#header').outerHeight(true);
        if(docscroll>offsetheight)
        {

            /*$('#first-element').css('padding-top',paddingheight+"px");*/
            /*$("#h-offset").style.height = offsetheight.toString()+"px";*/
            $('#header').addClass('scrolled');
            /*$('#cps').addClass('scrolled');*/
        }
        else
        {
            /*$('#first-element').css('padding-top', 0);*/
            $('#header').removeClass('scrolled');
            /*$('#cps').removeClass('scrolled');*/
            /*$("#h-offset").style.height = '0';*/
        }
    });
    $("#burgerburger").on("click",(function(){
        clearTimeout($.data(this,'timer'));
        $('#menu').stop(true,true).slideDown(400);
    }));
    $("#closeburger").on("click",(function(){
        clearTimeout($.data(this,'timer'));
        $('#menu').stop(true,true).slideUp(400);
    }));
})(jQuery);

new WOW().init();
//SmoothScroll({ stepSize: 30 });