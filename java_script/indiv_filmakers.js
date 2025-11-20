const heather = document.getElementById("heather");
const josh = document.getElementById("josh");
const michael = document.getElementById("michael");

heather.addEventListener("click", () => {
    console.log("heather clicked");
    window.location.href = '../../inividual_filmmakers/Heather/Heather1.html';
})
josh.addEventListener("click", () => {
    console.log("josh clicked");
    window.location.href = '../../inividual_filmmakers/Josh/Josh1.html';
})
michael.addEventListener("click", () => {
    console.log("michael clicked");
    window.location.href = '../../inividual_filmmakers/Micheal/Michael1.html';
})
