//little gag thing
console.log('You can really count the pixels in some of them')

//making the overlay video effect
const image = document.querySelector('.clickable-image');
const video = document.getElementById('overlayVideo');

image.addEventListener('click', () => {
    video.style.display = 'block';
    video.currentTime = 0;
    video.play();
});

video.addEventListener('ended', () =>{
    video.style.display = 'none';
})

document.getElementById('clickable_image').addEventListener('click', () => {
    sound.currentTime = 0;
    sound.play();
})