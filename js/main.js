/*global $, alert, console*/

$(function () {
   
    'use strict';
    
// Adjust Header Height
    
    var myHeader = $('.header'),
        
        mySlider = $('.bxslider');
    
    myHeader.height($(window).height() - 60);
    
    $(window).resize(function () {
       
        myHeader.height($(window).height() - 60);
	}
					);
    
    myHeader.width($(window).width());
    
    $(window).resize(function () {
       
        myHeader.width($(window).width());
        
            
/* bxslider  resize centre */

                mySlider.each(function () {

                    $(this).css('paddingTop', ($(window).height() - $('.bxslider div').height()) / 3.5);

                });
        
/* banner  resize icons */
    $('.bimg').each(function () {

                    $(this).css('margin-left',($(window).width() / 2) );

                });
	    

    
    });

    $('')
    
    
/* link active */
    $('.links a').click(function (){
        
        $('.links a').removeClass('active');

        $(this).addClass('active');
    });
    

    
/* bxslider centre */

                mySlider.each(function () {

                    $(this).css('paddingTop', ($(window).height() - $('.bxslider div').height()) / 3.5);

                });
    
/* slider */
	
	$('.bxslider').bxSlider({
  auto: true,
  autoControls: false,
  stopAutoOnClick: false,
  pager: true,
  responsive: true,
  speed: 3000,
  pause:7000,
  preventDefaultSwipeX: true,
  oneToOneTouch: true

});
    
    
/* banner icons */
    $('.bimg').each(function () {

                    $(this).css('margin-left',($(window).width() / 2) );

                });
    
});

// RESPONSIVE



/* nav bar scroll */


$(document).ready(function(){


  $(window).scroll(function(){



      var paper = $(window).scrollTop();
	  if (paper > 200) {
        $('.navbar').css('background' , 'rgba(51, 51, 51, 1)');
        $('.navbar').css('box-shadow' , 'rgba(0, 0, 0, 0.22) 0px 4px 4px 0px');
        
        if (paper <= 300 & $(window).width() >= 900) {
            $('#main').css('transform', 'translateY(-'+paper+'px)');
        }

        

        if($(window).width() <= "900px") {
            $('#main').css('width', '100%');
        } else {
            $('#main').css('width', '100%');
            $('.about').css('border-radius', '0px');
        }

        
        $('.nav-logo').css('width', '150px'); 

    } else {
        $('.navbar').css('background' , 'rgba(51, 51, 51, 0)');

        if($(window).width() >= 900) {
            $('#main').css('transform', 'translateY(-45px)');  
        }
        
        $('.navbar').css('box-shadow' , '0px 2px 10px rgba(1, 1, 1, 0)');
        

        if($(window).width() <= 900) {
            $('#main').css('width', '100%');
        } else {
            $('#main').css('width', '73%');
            $('.nav-logo').css('width', '180px'); 
            $('.about').css('border-radius', '60px');
        }

      }

      if(paper <= 500 & $(window).width() >= 900) {
        var parallex = paper / 3;
        var fade = (paper / -2000) + 0.2;
  
        $('.background-hero').css('background-position-y' , '-'+parallex+'px');
        $('.background-hero').css('filter' , 'brightness(' + fade +')');
      }


      if(paper > 10) {
        $('.navbar').css('background' , 'rgba(51, 51, 51, 0.4)');
      }

      if(paper > 300) {
        $('.navbar').css('background' , 'rgba(51, 51, 51, 1)');
      }

      if(paper > 3800) {
        $('.teams').css('background-color' , '#fec223');
        $('.t-section h2 span').css('color' , 'white');
      }
      
      

  });



  var readPaper = $(window).scrollTop();
  if (readPaper > 10) {
    $('.navbar').css('background' , 'rgba(51, 51, 51, 1)');
    $('.navbar').css('box-shadow' , 'rgba(0, 0, 0, 0.22) 0px 4px 4px 0px');

    if($(window).width() >= 900) {
        $('#main').css('transform', 'translateY(-500px)'); 
    }
     
}

  else{
    $('.navbar').css('background' , 'rgba(51, 51, 51, 0)');

    if($(window).width() >= 900) {
        $('#main').css('transform', 'translateY(-45px)'); 
    }
     
    $('.navbar').css('box-shadow' , '0px 2px 10px rgba(1, 1, 1, 0)');
    
  }

  if($(window).width() <= 900) {

    $("#demo-menu-lower-right").css('display', 'block');
    $("#nav-box-links").css('display', 'none');
} else {
    $("#demo-menu-lower-right").css('display', 'none');
    $("#nav-box-links").css('display', 'block');
}
});





/* counter */

$('.p-info').scroll($('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 2000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
    
    
/* shuffle */
var mixer = mixitup('.proj-g');
 
    $('.lists li').click(function(){
        $('.lists li').removeClass('selected');
    $(this).addClass('selected');
        
    });

/* nice scroll */
    // $("body").niceScroll({
    // cursorcolor:"#ff9600",
    // cursorwidth:"20px",
    // cursorfixedheight: 250,
    // cursorborderradius:0,
    // cursorborder:"1px solid #333",
    // cursoropacitymax: 0.8,


    // });

    
}));