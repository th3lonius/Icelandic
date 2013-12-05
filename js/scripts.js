$(document).ready(function() {
    
/*----- NAVIGATION -----*/
    
 if (!location.hash) {
        $('nav ul li a:first').parent().addClass('currentHash');
    } else {
        $('nav ul li a[href=' + location.hash + ']').parent().addClass('currentHash');
    }
    $('nav ul li a').bind('click', function(event) {
        $('nav ul li a').parent().removeClass('currentHash');
        $(this).parent().addClass('currentHash');
    });    
    
    
/*----- SCROLLING MENU -----*/

    function fade_header() {
    
		if ($(window).width() > 720) {

			winScroll = $('#about article').scrollTop();
            
            console.log(winScroll);

			if (winScroll > 10) {

				$('.topQuote').slideDown('slow');
                 
			} else {
				
				$('.topQuote').fadeOut('fast');
        
			}
            
		} else if ($(window).width() >= 480 && $(this).width() <= 720) {
            
            $('.min').show();
            
        } else {
            
        }

    }
    
    $(window).scroll(function() { fade_header() });

/*----- RESPONSIVENESS -----*/    
    
    sectionFit();
    $(window).resize(function() {
        sectionFit();
    });
    
    function sectionFit() {
        var sectionWidth = $(window).width();
        $('section').css('width',sectionWidth);
    }
    
    function mobileStyling() {
    
    if ($(window).width() <= 1000) {
        
        $('section p').removeClass("col-1 col-2");
        
    } else {}
        
    }
    
    mobileStyling();
    
    $(window).resize(function() {
    /*If browser resized, check width again */
        if ($(window).width() <= 1000) {
            
            $('section p').removeClass("col-1 col-2");
            
    } else {}
        
    });
    
    
/*----- ANIMATIONS -----*/    
    
    $('.modes a').click(function() {
        $('.modes a div').removeClass('active');
        $(this).children("div").addClass('active');
        return false;
    });
    

});
