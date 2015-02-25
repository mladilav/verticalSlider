$(document).ready(function(){
	
		$(".verticaliSlider").wrap("<div class='verticaliSlider_wrapper'></div>");
		$('.verticaliSlider').draggable({
			axis: "y",
			start: function(){
				//$('.verticaliSlider').addClass('verticaliSliderAnimation');
			},
			drag: function(e) {
				var countVerticaliSlider = $('.verticaliSlider > div').length,
					heightVerticaliSlider = $('.verticaliSlider div:first').outerHeight(),
					topVerticaliSlider = (countVerticaliSlider-3)*heightVerticaliSlider,
					position = $('.verticaliSlider').position();
				if(position.top <= -topVerticaliSlider){					
					$('.verticaliSlider').offset({ top: -topVerticaliSlider+10, left:10});
					return false;
				}
				
				if(position.top > 10){
					$('.verticaliSlider').offset({ top: 10, left:10});
					return false;
				}
				/*console.log(e.clientX);
				console.log(e.clientY);*/
				
			},
			stop: function(){
				var countVerticaliSlider = $('.verticaliSlider > div').length,
					heightVerticaliSlider = $('.verticaliSlider div:first').outerHeight(),
					topVerticaliSlider = (countVerticaliSlider-3)*heightVerticaliSlider,
					position = $('.verticaliSlider').position();
				if(position.top % heightVerticaliSlider != 0){
					var topPosition = Math.round(position.top / heightVerticaliSlider)*heightVerticaliSlider;
					$('.verticaliSlider').offset({ top: topPosition+10, left:10});
					console.log(Math.round(position.top / heightVerticaliSlider));
				}
				//$('.verticaliSlider').removeClass('verticaliSliderAnimation');
			}
		});
	
});

