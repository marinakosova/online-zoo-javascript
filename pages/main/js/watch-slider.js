window.addEventListener('load', function(event) {
    const watchItems = document.querySelectorAll('.item__description');
    const watchTrack = document.querySelector('.hero-top__carousel__container');

    let watchRange = document.querySelector('#watch-range');
    let watchInputNumbers = document.querySelector('.hero-top__pagination .gallery-range');
    let watchImageNumbers = document.querySelector('.hero-top__pagination .watch-range-length');

    let currentItem = 0;

    function updateItemView(n) {
        watchItems.forEach(item => {
            if (item.classList.contains('item__description_active')) {
                item.classList.remove('item__description_active');
            }
        });

        if (watchItems[n]) {
            watchItems[n].classList.add('item__description_active');

        } else return;
    }

    function updateWatchRange(n) {
        watchRange.value = n + 1;

        if (n < 9) {
            watchInputNumbers.innerHTML = `0${n + 1}\/`;
        } else {
            watchInputNumbers.innerHTML = `${n + 1}\/`;
        }

        if (watchItems.length < 10) {
            watchImageNumbers.innerHTML = `0${watchItems.length}`;
        } else {
            watchImageNumbers.innerHTML = `${watchItems.length}`;
        }
    }

    function goToWatchSlide(n) {
        //console.log('going to slide ' + n);
        if (n > watchItems.length) {
            return;
        }

        let offset2 = n * watchItems[0].offsetWidth;
        watchTrack.style.marginLeft = -offset2 + 'px';
    }

    updateItemView(currentItem);
    goToWatchSlide(currentItem);
    updateWatchRange(currentItem);

    watchRange.addEventListener('change', function(e) {
        goToWatchSlide(e.target.value - 1);
        updateWatchRange(e.target.value - 1);
        updateItemView(e.target.value - 1);
    });
});