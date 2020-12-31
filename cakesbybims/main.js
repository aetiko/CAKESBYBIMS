var slideIndex = 1;
var myTimer;
var myInterval = 2000;
var slideShowContainer;
//setting everything in motion

window.addEventListener("load", function() {
    showSlides(slideIndex);
    myTimer = setInterval(function() {
        plusSlides(1);
    }, myInterval);
    //pauses the slidehow when mouse hovering and upauses when mouse not hovering
    slideShowContainer = document.getElementsByClassName('cbb-container')[0];
    slideShowContainer.addEventListener('mouseenter', pause);
    slideShowContainer.addEventListener('mouseleave', resume);
});
showSlides(slideIndex);
//slideshow initializer determininng whether to go forward or backwards
function plusSlides(n) {
    clearInterval(n);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }
    if (n === -1) {
        myTimer = setInterval(function() {
            plusSlides(n + 2)
        }, myInterval); //get it back to the main index, with a timeout of 4s
    }
}
//determines which slide show to show and which slide to hide when you select next or previous
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("cbbSlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
//slide selector
function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(n + 1);
    }, myInterval);
    showSlides(slideIndex = n);
}

// pause
function pause() {
    clearInterval(myTimer);
}

//resume

function resume() {
    clearInterval(myTimer);
    myTimer = setInterval(function() {
        plusSlides(slideIndex);
    }, myInterval);
}