// Slider for landing & Testimonials section
window.addEventListener('load', function(event) {
    let testimonialImages = document.querySelectorAll('.testimonials__slider__item');
    let testimonialSlider = document.querySelector('.testimonials__slider__track');
    let testimonialRange = document.querySelector('#testimonials-range');
    let testimonialNumbers = document.querySelector('.testimonials__pagination .section-numbers');
    let testimonialSlidesNums = document.querySelector('.testimonial-slides-numbers');
    let testimonialCurrent = 0;

    function testimonialSliderMove() {
        for (let i = 0; i < testimonialImages.length; i++) {
            testimonialImages[i].classList.add('testimonials__slider__item_notActive');
        }
        testimonialImages[testimonialCurrent].classList.remove('testimonials__slider__item_notActive');
        testimonialImages[testimonialCurrent].classList.remove('init-opacity');
        if (testimonialCurrent + 1 == testimonialImages.length) {
            testimonialCurrent = 0;
        } else {
            testimonialCurrent++;
        }
    }

    testimonialNumbers.innerHTML = `0${testimonialRange.value}\/`;
    testimonialSlidesNums.innerHTML = `0${testimonialImages.length}`;

    testimonialRange.addEventListener('change', updateTestimValue);

    function updateTestimValue(e) {
        testimonialNumbers.innerHTML = `0${e.target.value}\/`;
        testimonialSliderMove();
    }

    testimonialSlider.addEventListener('click', function(e) {
        testimonialSliderMove();
        testimonialNumbers.innerHTML = `0${testimonialCurrent+1}\/`;
        testimonialRange.value = testimonialCurrent + 1;
    });
}, { once: true });