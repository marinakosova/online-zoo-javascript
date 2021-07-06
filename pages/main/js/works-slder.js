// Slider for landing & How it works section
window.addEventListener('load', function(event) {
    let images = document.querySelectorAll('.works__slider__image');
    let worksSlider = document.querySelector('.works__slider');
    let range = document.querySelector('#works-range');
    let inputNumbers = document.querySelector('.works__pagination .section-numbers');
    let imageNumbers = document.querySelector('.range-length');
    let current = 0;

    function slider() {
        for (let i = 0; i < images.length; i++) {
            images[i].classList.add('works__slider__image_notActive');
        }
        images[current].classList.remove('works__slider__image_notActive');
        if (current + 1 == images.length) {
            current = 0;
        } else {
            current++;
        }
    }

    inputNumbers.innerHTML = `0${range.value}\/`;
    imageNumbers.innerHTML = `0${images.length}`;

    range.addEventListener('change', updateValue);

    function updateValue(e) {
        inputNumbers.innerHTML = `0${e.target.value}\/`;
        slider();
    }

    worksSlider.addEventListener('click', function(e) {
        e.preventDefault();
        slider();
        inputNumbers.innerHTML = `0${current+1}\/`;
        range.value = current + 1;
    });
}, { once: true });