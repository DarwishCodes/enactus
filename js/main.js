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

});
    
    
/* banner icons */
    $('.bimg').each(function () {

                    $(this).css('margin-left',($(window).width() / 2) );

                });
    
});


/* smooth scroll */
    
$('.links li a').click(function(){
   
    $('html, body').animate({
        
        scrollTop: $('#' + $(this).data('value')).offset().top
        
    }, 1000);
});





/* chart diagram */
/*
window.onload = function () {

var options = {
	animationEnabled: true,  
	title:{
		text: "Enactus Egypt Growth"
	},
	axisX: {
		valueFormatString: "MMM"
	},
	axisY: {
		title: "enrolled universities",
		prefix: "",
		includeZero: true
	},
	data: [{
		yValueFormatString: "$#,###",
		xValueFormatString: "MMMM",
		type: "spline",
		dataPoints: [
			{ x: new Date(2017, 0), y: 11060 },
			{ x: new Date(2017, 1), y: 27980 },
			{ x: new Date(2017, 2), y: 33800 },
			{ x: new Date(2017, 3), y: 49400 },
			{ x: new Date(2017, 4), y: 40260 },
			{ x: new Date(2017, 5), y: 33900 },
			{ x: new Date(2017, 6), y: 48000 },
			{ x: new Date(2017, 7), y: 31500 },
			{ x: new Date(2017, 8), y: 32300 },
			{ x: new Date(2017, 9), y: 42000 },
			{ x: new Date(2017, 10), y: 52160 },
			{ x: new Date(2017, 11), y: 49400 }
		]
	}]
};
$("#chartContainer").CanvasJSChart(options);

}
*/



var ctx = document.getElementById('myChart');
Chart.defaults.global.defaultFontSize = 30;
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2011', '2013', '2015', '2017', '2019'],
        datasets: [{
            label: 'enrolled universities',
            data: [12, 27, 30, 43, 54],
            backgroundColor: [
                'rgba(13, 13, 13, 0.1)',
                
            ],
            borderColor: [
                'rgba(255, 200, 54, 1)',
                
            ],
            borderWidth: 7
        }]
    },
    options: {
        responsive: true,maintainAspectRatio: false,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    
                }
            }]
        }
    }
});



/* nav bar scroll */


$(document).ready(function(){
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 300) {
	    $('.navbar').css('background' , 'rgba(51, 51, 51, 0.8)');
	  }

	  else{
		  $('.navbar').css('background' , '#333');  	
	  }
  });
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
    $("body").niceScroll({
    cursorcolor:"#ff9600",
    cursorwidth:"20px",
    cursorfixedheight: 250,
    cursorborderradius:0,
    cursorborder:"1px solid #333",
    cursoropacitymax: 0.8,


    });

    
}));