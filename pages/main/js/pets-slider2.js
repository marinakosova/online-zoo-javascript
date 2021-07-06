const track = document.querySelector('.slider__track');
// images
const items = document.querySelectorAll('.slider__item');
// arrow svgs
const controlLeft = document.querySelector('.control-left');
const controlRight = document.querySelector('.control-right');
// left, right button
const btnPrev = document.querySelector('.slider__button__left');
const btnNext = document.querySelector('.slider__button__right');
// setting for slider
let containerWidth = document.querySelector('.slider__container').offsetWidth; // 1200 for width >1365px
// setting for range
let petsRange = document.querySelector('#pets-range');
let petsInputNumbers = document.querySelector('.slider__pagination .section-numbers');
let petsImageNumbers = document.querySelector('.pets-range-length');

// get all track width
let lineWidth = 0;

for (let i = 0; i < items.length; i++) {
    lineWidth += items[i].offsetWidth;
}
track.style.width = lineWidth + 'px';

let itemWidth = items[0].offsetWidth;
let itemsToDisplay = Math.round(containerWidth / itemWidth);
petsRange.max = items.length - itemsToDisplay + 1;
let slideNumber = 0;

function updateRange(n) {
    petsRange.value = n + 1;
    petsInputNumbers.innerHTML = `0${n + 1}\/`;
    petsImageNumbers.innerHTML = `0${items.length - itemsToDisplay + 1}`;
}

function updateArrows(n) {
    if (n === items.length - itemsToDisplay) {
        controlRight.classList.add('slide-disabled');
    } else if (n === 0) {
        controlLeft.classList.add('slide-disabled');
    } else {
        controlLeft.classList.remove('slide-disabled');
        controlRight.classList.remove('slide-disabled');
        controlLeft.classList.add('control-left-theme');
        controlRight.classList.add('control-right-theme');
    }
}

function goToSlide(n) {
    //console.log('going to slide ' + n);
    if (n > items.length - itemsToDisplay) {
        return;
    }

    let offset1 = n * items[0].offsetWidth;
    track.style.left = -offset1 + 'px';
}

function slideNext() {
    if (slideNumber >= items.length - itemsToDisplay) {
        return;
    }

    slideNumber++;
    goToSlide(slideNumber);
    updateRange(slideNumber);
    updateArrows(slideNumber);
}

function slidePrev() {
    if (slideNumber <= 0)
        return;

    slideNumber--;
    goToSlide(slideNumber);
    updateRange(slideNumber);
    updateArrows(slideNumber);
}

goToSlide(slideNumber);
updateRange(slideNumber);
updateArrows(slideNumber);

// listeners for the buttons
btnNext.addEventListener('click', slideNext);
btnPrev.addEventListener('click', slidePrev);

// range event listener
petsRange.addEventListener('change', function(e) { goToSlide(e.target.value - 1); });