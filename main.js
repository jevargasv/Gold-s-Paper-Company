// All jQuery functions to trigger the image css animations on scroll functions.

(document).ready(function($) { 
    $(window).scroll(function() { 
        var scrollTop = $(window).scrollTop(); 
        var elementTop = $('.main-headline').offset().top;

        if(scrollTop >= elementTop) {
            $('.main-headline img').addClass('scrolled');
        }
    });
});

(document).ready(function($) { 
    $(window).scroll(function() { 
        var scrollTop = $(window).scrollTop(); 
        var elementTop = $('.section1').offset().top;
    
       if(scrollTop >= elementTop) {
            $('.section1 img').addClass('scrolled');
        }
    });
});

(document).ready(function($) { 
    $(window).scroll(function() { 
        var scrollTop = $(window).scrollTop(); 
        var elementTop = $('.section2').offset().top;
    
       if(scrollTop >= elementTop) {
            $('.section2 img').addClass('scrolled');
        }
    });
});

(document).ready(function($) { 
    $(window).scroll(function() { 
        var scrollTop = $(window).scrollTop(); 
        var elementTop = $('.section3').offset().top;
    
       if(scrollTop >= elementTop) {
            $('.section3 img').addClass('scrolled');
        }
    });
});
