console.log("YOU CAN NOW COUNT PIXELS, BUT FROM MORE THEN 1 VIDEO!!!!!!!!!!!!")

document.querySelector('.grid_container').addEventListener('click', function(e) {
    const clicked = e.target;

    if (clicked.classList.contains('clickable-image')) {
        const container = clicked.closest('.video_overlay_container');
        const video = container.querySelector('.overlay-video');
        const videoSrc = clicked.dataset.video;

        video.src = `/assets/Video/${videoSrc}`;
        video.style.display = 'block';
        video.currentTime = 0;
        video.play();

        video.addEventListener('ended', () => {
            video.style.display = 'none';
            video.src = '';
        });
    }
});