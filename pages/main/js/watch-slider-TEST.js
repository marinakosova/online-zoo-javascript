document.addEventListener('DOMContentLoaded', function() {
    let stream = document.querySelector('.gallery__stream');
    let items = document.querySelectorAll('.gallery__item');
    let itemsOverlay = document.querySelectorAll('.carousel__item__overlay');
    //itemsOverlay.style.opacity = 1;

    let galleryContainerWidth = document.querySelector('.gallery').offsetWidth; // 822
    //console.log(galleryContainerWidth); // 822

    let galleryItemWidth = items[0].offsetWidth;
    //console.log(galleryItemWidth); // 411
    let galleryItemsToDisplay = Math.round(galleryContainerWidth / galleryItemWidth);
    //console.log(galleryItemsToDisplay); // 2

    let watchRange = document.querySelector('#watch-range');
    let watchInputNumbers = document.querySelector('.hero-top__pagination .gallery-range');
    let watchImageNumbers = document.querySelector('.watch-range-length');

    watchRange.max = items.length - galleryItemsToDisplay + 1;
    let watchSlideNumber = 0;

    // function updateWatchRange(n) {
    //     watchRange.value = n + 1;
    //     watchInputNumbers.innerHTML = `0${n + 1}\/`;
    //     watchImageNumbers.innerHTML = `0${items.length - itemsToDisplay + 1}`;
    // }

    // updateWatchRange(watchSlideNumber);




    let prev = document.querySelector('.gallery__prev');
    prev.addEventListener('click', function() {
        stream.insertBefore(items[items.length - 1], items[0]);

        itemsOverlay.forEach((overlay, index) => {
            console.log(index);
            //overlay.style.opacity = 1;
        })

        items = document.querySelectorAll('.gallery__item');
    });

    let next = document.querySelector('.gallery__next');
    next.addEventListener('click', function() {
        stream.appendChild(items[0]);
        console.log(items[0]);

        items[0].classList.add('carousel__item__overlay')
        items = document.querySelectorAll('.gallery__item');
    });
});