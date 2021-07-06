const mainVideo = document.querySelector('.gallery__main__video');
let videoGalleryTrack = document.querySelector('.gallery__list__track');
let videoTrackWidth = 0;
let videoContainerOffsetWidth = document.querySelector('.video__gallery__list').offsetWidth; // 800px
const secondaryVideosItem = document.querySelectorAll('.video__gallery__item');
const secondaryIframesItem = document.querySelectorAll('.list__item__video');
const arrowRight = document.querySelector('.right-video');
const arrowLeft = document.querySelector('.left-video');
const btnVideoNext = document.querySelector('.video__arrow_right');
const btnVideoPrev = document.querySelector('.video__arrow_left');
const dots = document.querySelectorAll('.dots__item');

for (let j = 0; j < secondaryVideosItem.length; j++) {
    videoTrackWidth += secondaryVideosItem[j].offsetWidth;
}
videoGalleryTrack.style.width = videoTrackWidth + 'px'; // 1476px

let smallVideoWidth = secondaryVideosItem[0].offsetWidth; // 246px
let videosToDisplay = Math.round(videoContainerOffsetWidth / smallVideoWidth); // 3
let videoNumber = 0;

window.addEventListener('click', function(event) {
    event = event || window.event;

    if (event.target.classList.contains('video__gallery__item')) {
        for (let i = 0; i < secondaryVideosItem.length; i++) {
            secondaryIframesItem[i].classList.remove('video__gallery__item-active');
        }

        let smallIframeSrc = event.target.children[0].attributes[3].nodeValue;

        mainVideo.setAttribute('src', smallIframeSrc);

        event.target.children[0].classList.add('video__gallery__item-active');
    }
});

function updateVideoDots(n) {
    if (n === secondaryVideosItem.length - videosToDisplay) {
        dots[2].classList.add('dots__item_active');
        dots[1].classList.remove('dots__item_active');
        dots[0].classList.remove('dots__item_active');
    } else if (n === 0) {
        dots[0].classList.add('dots__item_active');
        dots[1].classList.remove('dots__item_active');
        dots[2].classList.remove('dots__item_active');
    } else {
        dots[1].classList.add('dots__item_active');
        dots[0].classList.remove('dots__item_active');
        dots[2].classList.remove('dots__item_active');
    }
}

function updateVideoArrows(n) {
    if (n === secondaryVideosItem.length - videosToDisplay) {
        arrowRight.classList.add('video_slide-disabled');
    } else if (n === 0) {
        arrowLeft.classList.add('video_slide-disabled');
    } else {
        arrowLeft.classList.remove('video_slide-disabled');
        arrowRight.classList.remove('video_slide-disabled');
        arrowLeft.classList.add('left-video-theme');
        arrowRight.classList.add('right-video-theme');
    }
}

function goToSmallVideo(n) {
    if (n > secondaryVideosItem.length - videosToDisplay) {
        return;
    }

    let offset4 = n * secondaryVideosItem[0].offsetWidth;
    videoGalleryTrack.style.left = -offset4 + 'px';

}

function goVideoNext() {
    if (videoNumber >= secondaryVideosItem.length - videosToDisplay) {
        return;
    }

    videoNumber++;
    goToSmallVideo(videoNumber);
    updateVideoArrows(videoNumber);
    updateVideoDots(videoNumber);
}

function goVideoPrev() {
    if (videoNumber <= 0)
        return;

    videoNumber--;
    goToSmallVideo(videoNumber);
    updateVideoArrows(videoNumber);
    updateVideoDots(videoNumber);
}

goToSmallVideo(videoNumber);
updateVideoArrows(videoNumber);
updateVideoDots(videoNumber);

btnVideoNext.addEventListener('click', goVideoNext);
btnVideoPrev.addEventListener('click', goVideoPrev);