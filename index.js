$(document).ready(function(){
   $("#linkedin").hover(function(){
     //$(this).css("background-color", "yellow");
     }, function(){
     //$(this).css("background-color", "pink");
   });
 });
 
 //dark mode toggle
function darkModeToggle() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var modeImg = document.getElementById("mode-image");
  if (modeImg.getAttribute('src') === "./styles/lightmode.svg") {
    modeImg.setAttribute('src', "./styles/darkmode.svg");
}
else {
    modeImg.setAttribute('src', "./styles/lightmode.svg");
}

  
}

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

$(window).scroll(function() {
  if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
  } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
  }
});
$('#return-to-top').click(function() {      // When arrow is clicked
  $('body,html').animate({
      scrollTop : 0                       // Scroll to top of body
  }, 500);
});