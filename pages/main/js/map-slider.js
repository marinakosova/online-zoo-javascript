const mapSliderTrack = document.querySelector('.favorite__carousel__container');
const mapSliderItems = document.querySelectorAll('.favorite__carousel__item');
let sliderContainerWidth = document.querySelector('.favorite__carousel__container').offsetWidth;
const prevBtn = document.querySelector('.map-carousel .slider__button__left');
const nextBtn = document.querySelector('.map-carousel .slider__button__right');
const leftArrowPath = document.querySelector('.btn-left');
const rightArrowPath = document.querySelector('.btn-right');
const mapRange = document.querySelector('#map-range');
const mapInputNumbers = document.querySelector('.range__carousel__pagination .section-numbers');
let mapImageNumbers = document.querySelector('.map-range-length');
let mapTrackWidth = 0;

for (let i = 0; i < mapSliderItems.length; i++) {
    mapTrackWidth += mapSliderItems[i].offsetWidth;
}
mapSliderTrack.style.width = mapTrackWidth + 'px';

let mapItemWidth = mapSliderItems[mapSliderItems.length - 1].offsetWidth; // 108px
let mapItemsToDisplay = Math.round(sliderContainerWidth / mapItemWidth - 1); // 8

mapRange.max = mapSliderItems.length - mapItemsToDisplay + 1; // 9
let mapSlideNumber = 0;

function updateMapRange(n) {
    mapRange.value = n + 1;

    if (n < 9) {
        mapInputNumbers.innerHTML = `0${n + 1}\/`;
    } else {
        mapInputNumbers.innerHTML = `${n + 1}\/`;
    }

    let totalMapSliderItems = mapSliderItems.length - mapItemsToDisplay + 1;

    if (totalMapSliderItems < 10) {
        mapImageNumbers.innerHTML = `0${totalMapSliderItems}`;
    } else {
        mapImageNumbers.innerHTML = `${totalMapSliderItems}`;
    }
}

function updateMapSliderItemView(n) {
    mapSliderItems.forEach(item => {

        if (item.classList.contains('favorite__item_active')) {
            item.classList.remove('favorite__item_active');
        }
    });

    if (mapSliderItems[n]) {
        mapSliderItems[n].classList.add('favorite__item_active');
    } else return;
}

function updateMapArrows(n) {
    if (n === mapSliderItems.length - mapItemsToDisplay) {
        rightArrowPath.classList.add('slide-disabled');
    } else if (n === 0) {
        leftArrowPath.classList.add('slide-disabled');
    } else {
        leftArrowPath.classList.remove('slide-disabled');
        rightArrowPath.classList.remove('slide-disabled');
        leftArrowPath.classList.add('control-left-theme');
        rightArrowPath.classList.add('control-right-theme');
    }
}

function goToMapSlide(n) {
    if (n > mapSliderItems.length - mapItemsToDisplay) {
        return;
    }

    updateMapSliderItemView(n);

    let offset5 = n * mapSliderItems[0].offsetWidth;
    mapSliderTrack.style.left = -offset5 + 'px';

    // let offset5 = n * mapSliderItems[mapSliderItems.length - 1].offsetWidth;
    // mapSliderTrack.style.left = -offset5 + 'px';
}

function slideMapNext() {
    if (mapSlideNumber >= mapSliderItems.length - mapItemsToDisplay) {
        return;
    }

    mapSlideNumber++;
    updateMapSliderItemView(mapSlideNumber);
    goToMapSlide(mapSlideNumber);
    updateMapRange(mapSlideNumber);
    updateMapArrows(mapSlideNumber);
}

function slideMapPrev() {
    if (mapSlideNumber <= 0)
        return;

    mapSlideNumber--;
    updateMapSliderItemView(mapSlideNumber);
    goToMapSlide(mapSlideNumber);
    updateMapRange(mapSlideNumber);
    updateMapArrows(mapSlideNumber);
}

updateMapSliderItemView(mapSlideNumber);
goToMapSlide(mapSlideNumber);
updateMapRange(mapSlideNumber);
updateMapArrows(mapSlideNumber);

nextBtn.addEventListener('click', slideMapNext);
prevBtn.addEventListener('click', slideMapPrev);

mapRange.addEventListener('change', function(e) {
    goToMapSlide(e.target.value - 1);
    updateMapRange(e.target.value - 1);
    updateMapSliderItemView(e.target.value - 1);
});