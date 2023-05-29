var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");
var slide = document.getElementsByClassName("mySlides");
var n0;
var minSliderValue = 0;
var maxSliderValue = document.getElementsByClassName("mySlides").length;

function currentSlide(currentSlideArgument) {
    n0 = currentSlideArgument;
    fullImgBox.style.display = "flex";
    fullImg.src = slide[n0].src;
}

const minSlides = (counter) => {
    n0 -= counter;
    n0 = n0 === minSliderValue - 1 ? maxSliderValue : n0;
    n0 = n0 === maxSliderValue + 1 ? minSliderValue : n0;
    fullImgBox.style.display = "flex";
    fullImg.src = slide[n0].src;
}

function closeFullImg() {
    fullImgBox.style.display = "none"
}