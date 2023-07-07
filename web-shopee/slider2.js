var slideIndex = 0;
    
function slideLeft() {
  var sliderImages = document.querySelector('.slider-images');
  var imageWidth = document.querySelector('.slider-image1').offsetWidth;
  
  slideIndex = (slideIndex - 1 + 4) % 4;
  var leftOffset = -slideIndex * imageWidth;
  
  sliderImages.style.left = leftOffset + 'px';
}

function slideRight() {
  var sliderImages = document.querySelector('.slider-images');
  var imageWidth = document.querySelector('.slider-image1').offsetWidth;
  
  slideIndex = (slideIndex + 1) % 4;
  var leftOffset = -slideIndex * imageWidth;
  
  sliderImages.style.left = leftOffset + 'px';
}