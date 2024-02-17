let slides = document.querySelectorAll(".slide");
    let currentSlide = 4;
    const slideCount = slides.length;

    function slide(n) {
      slides[currentSlide].classList.remove("effect");
      currentSlide = (n + slideCount) % slideCount;
      slides[currentSlide].classList.add("effect");
      let offset = -((currentSlide - 4) *7.7);
      console.log(offset);
      document.querySelector(
        ".sliderbar"
      ).style.transform = `translateX(${offset}%)`;
      let img = document.querySelector('.mainimage img');
      img.src = slides[currentSlide].src;
    }

    function next() {
      slide(currentSlide + 1);
    }

    function back() {
      slide(currentSlide - 1);
    }
