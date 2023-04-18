$(document).ready(function(){
   $("#linkedin").hover(function(){
     //$(this).css("background-color", "yellow");
     }, function(){
     //$(this).css("background-color", "pink");
   });
 });

 // code coach page carousel behavior

var slideshowContainers = document.getElementsByClassName("slideshow-container");
var slideIndex = 0;

for(let s = 0; s < slideshowContainers.length; s++) {
	var cycle = slideshowContainers[s].dataset.cycle;
	var slides = slideshowContainers[s].querySelectorAll('.mySlides');
  let dots = slideshowContainers[s].querySelectorAll('.dot');
	showSlides(slides, slideIndex, cycle, dots);
};

function showSlides(slides, slideIndex, cycle, dots) {
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    };
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    };
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex-1].className += " active";
    setTimeout(function() {
		showSlides(slides, slideIndex, cycle, dots)
	}, cycle);
};

showSlides();