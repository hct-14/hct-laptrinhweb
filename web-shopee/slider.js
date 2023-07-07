    // JavaScript để xử lý slide
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    const dots = document.querySelectorAll('.slider-dot-item');
    const sliderMain = document.querySelector('.slider-main');
  
    let currentIndex = 0;
    const slideCount = dots.length;
  
    function showSlide(index) {
      if (index < 0) {
        index = slideCount - 1;
      } else if (index >= slideCount) {
        index = 0;
      }
  
      currentIndex = index;
  
      // Chuyển đổi vị trí slide chính
      sliderMain.style.transform = `translateX(-${currentIndex * 100}%)`;
  
      // Thay đổi trạng thái của các điểm
      dots.forEach((dot, dotIndex) => {
        if (dotIndex === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      showSlide(currentIndex + 1);
    }
  
    function prevSlide() {
      showSlide(currentIndex - 1);
    }
  
    // Sự kiện click trên nút prev và next
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
  
    // Sự kiện click trên các điểm
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => showSlide(index));
    });
  
    // Hiển thị slide mặc định
    showSlide(currentIndex);
