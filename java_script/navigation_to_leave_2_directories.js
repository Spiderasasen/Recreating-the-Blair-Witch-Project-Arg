//making the buttons as vars
const myth = document.getElementById("myth");
const filmmaker = document.getElementById("filmmakers");
const aftermath = document.getElementById("aftermath");
const legacy = document.getElementById("legacy");
const recreation = document.getElementById("recreation");
const home = document.getElementById("home");

//navigating to go to the original designated screen
home.addEventListener("click", () => { //going home
    console.log("going home");
    window.location.href = "../../index.html";
});
filmmaker.addEventListener("click", () => {
    console.log("going to the filmmaker section");
    window.location.href = "../../filmmaker.html";
});
aftermath.addEventListener("click", () => {
    console.log("going to the aftermath section");
    window.location.href = "../../aftermath.html";
});
legacy.addEventListener("click", () => {
    console.log("going to the legacy section");
    window.location.href = "../../legacy.html";
});
recreation.addEventListener("click", () => {
    console.log("going to the recreation section");
    window.location.href = "../../recreation.html";
})
myth.addEventListener("click", () => {
    console.log("going to the myth section");
    window.location.href = "../../myth.html";
});