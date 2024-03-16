

	

// let slideImages = document.querySelectorAll('img');
// let next = document.querySelector('.next');
// let prev = document.querySelector('.prev');

// var counter = 0;


// next.addEventListener('click', slideNext);
// function slideNext(){
// slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
// if(counter >= slideImages.length-1){
// 		counter = 0;
// }
// else{
// 	counter++;
// }
// slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
// indicators();
// }

// prev.addEventListener('click', slidePrev);
// function slidePrev(){
// slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
// if(counter == 0){
// 	counter = slideImages.length-1;
// }
// else{
// 	counter--;
// }
// slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
// indicators();
// }

// function autoSliding(){
// 	deletInterval = setInterval(timer, 1000);
// 	function timer(){
// 		slideNext();
// 		indicators();
// 	}
// }
// autoSliding();

// const container = document.querySelector('.slide-container');
// container.addEventListener('mouseover', function(){
// 	clearInterval(deletInterval);
// });

// container.addEventListener('mouseout', autoSliding);


// function switchImage(currentImage){
// 	currentImage.classList.add('active');
// 	var imageId = currentImage.getAttribute('attr');
// 	if(imageId > counter){
// 	slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
// 	counter = imageId;
// 	slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
// 	}
// 	else if(imageId == counter){
// 		return;
// 	}
// 	else{
// 		slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
// 		counter = imageId;
// 		slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';	
// 	}
// 	indicators();
// 	}




$(document).ready(function() {
    var slideImages = $('img');
    var next = $('.next');
    var prev = $('.prev');
    var counter = 0;
    var deleteInterval;

    next.click(slideNext);
    function slideNext() {
        $(slideImages[counter]).css('animation', 'next1 0.5s ease-in forwards');
        if (counter >= slideImages.length - 1) {
            counter = 0;
        } else {
            counter++;
        }
        $(slideImages[counter]).css('animation', 'next2 0.5s ease-in forwards');
        indicators();
    }

    prev.click(slidePrev);
    function slidePrev() {
        $(slideImages[counter]).css('animation', 'prev1 0.5s ease-in forwards');
        if (counter == 0) {
            counter = slideImages.length - 1;
        } else {
            counter--;
        }
        $(slideImages[counter]).css('animation', 'prev2 0.5s ease-in forwards');
        indicators();
    }

    function autoSliding() {
        deleteInterval = setInterval(timer, 1000);
        function timer() {
            slideNext();
            indicators();
        }
    }
    autoSliding();

    $('.slide-container').mouseenter(function() {
        clearInterval(deleteInterval);
    }).mouseleave(autoSliding);

    $('.slide-container img').click(function() {
        switchImage(this);
    });

    function switchImage(currentImage) {
        $(currentImage).addClass('active');
        var imageId = $(currentImage).attr('attr');
        if (imageId > counter) {
            $(slideImages[counter]).css('animation', 'next1 0.5s ease-in forwards');
            counter = imageId;
            $(slideImages[counter]).css('animation', 'next2 0.5s ease-in forwards');
        } else if (imageId == counter) {
            return;
        } else {
            $(slideImages[counter]).css('animation', 'prev1 0.5s ease-in forwards');
            counter = imageId;
            $(slideImages[counter]).css('animation', 'prev2 0.5s ease-in forwards');
        }
        indicators();
    }

    function indicators() {
        // Your logic to update slide indicators goes here
    }
});
