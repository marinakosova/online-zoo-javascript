const asideTrack = document.querySelector('.aside__carousel__container');
// images
const asideItems = document.querySelectorAll('.aside__carousel__item');
// arrow svgs
const controlTop = document.querySelector('.control-top');
const controlBottom = document.querySelector('.control-bottom');
// top, bottom button
const btnTop = document.querySelector('.aside__control_top');
const btnBottom = document.querySelector('.aside__control_bottom');
// setting for slider
let asideContainerHeight = document.querySelector('.aside__carousel__container').offsetHeight;
// get all track height
let lineHeight = 0;

for (let i = 0; i < asideItems.length; i++) {
    lineHeight += asideItems[i].offsetHeight;
}

asideTrack.style.height = lineHeight + 'px';
let itemHeight = asideItems[asideItems.length - 1].offsetHeight;
let asideItemsToDisplay = Math.round(asideContainerHeight / itemHeight) / 2;

let asideSlideNumber = 0;


function updateAsideArrows(n) {
    if (n === asideItems.length) {
        controlBottom.classList.add('slide-disabled');
    } else if (n === 0) {
        controlTop.classList.add('slide-disabled');
    } else {
        controlTop.classList.remove('slide-disabled');
        controlBottom.classList.remove('slide-disabled');
        controlTop.classList.add('control-top-theme');
        controlBottom.classList.add('control-right-theme');
    }
}

function updateAsideItemView(n) {
    asideItems.forEach(item => {

        if (item.classList.contains('aside__item_active')) {
            item.classList.remove('aside__item_active');
        }
    });

    if (asideItems[n]) {
        asideItems[n].classList.add('aside__item_active');

    } else return;
}

function goToAsideSlide(n) {
    if (n > asideItems.length - asideItemsToDisplay) {
        return;
    }

    updateAsideItemView(n);

    let smallItemHeight = asideItems[asideItems.length - 1].offsetHeight;

    let offset3 = smallItemHeight * n;
    asideTrack.style.top = -offset3 + 'px';
}

function slideAsidePrev() {
    if (asideSlideNumber <= 0)
        return;

    asideSlideNumber--;
    updateAsideItemView(asideSlideNumber);
    goToAsideSlide(asideSlideNumber);
    updateAsideArrows(asideSlideNumber);

}

function slideAsideNext() {
    if (asideSlideNumber >= asideItems.length) {
        return;
    }
    updateAsideItemView(asideSlideNumber);
    asideSlideNumber++;
    goToAsideSlide(asideSlideNumber);
    updateAsideArrows(asideSlideNumber);
}

updateAsideItemView(asideSlideNumber);
goToAsideSlide(asideSlideNumber);
updateAsideArrows(asideSlideNumber);


btnTop.addEventListener('click', slideAsidePrev);
btnBottom.addEventListener('click', slideAsideNext);