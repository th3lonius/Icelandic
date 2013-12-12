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
    
/*RIGHT ANIMATIONS*/   
    $("body").on('click', '.info-toggle', function(event) {
        $('#sights article').animate({
            bottom: 0,
            backgroundColor: 'rgba(255,255,255,0.8)'
        },200),
        $('#main').animate({right: 300}),
        $('#main-menu, #right-tog, .bkgd-desc').fadeOut(300);
    }); 
    
    $("body").on('click', 'section, .info-toggle', function(event) {    
        var divpos = parseInt($('#sights article').css('bottom'));
        
        if (divpos == 0) {
            $('#sights article').animate({
                bottom: -250,
                backgroundColor: 'rgba(255,255,255,0.99)'
            },300),
            $('#main').animate({right: 0}),
            $('#main-menu, #right-tog, .bkgd-desc').fadeIn(300);
        };
    });
    

});
