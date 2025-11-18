const discovered = document.getElementById('discovered');
const audios = document.getElementById('audios');
const journal = document.getElementById('journal');

discovered.addEventListener("click", () => {
    console.log("discovered clicked");
    window.location.href = '../../legacy.html';
});
audios.addEventListener("click", () => {
    console.log("audio clicked");
    window.location.href = '../../Legacy_sections/Audio/audio.html';
})