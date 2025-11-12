const evidence = document.getElementById("evidence");
const search = document.getElementById("search");
const interview = document.getElementById("interview");
const news = document.getElementById("news");

//navigating to all the first sections of the code
evidence.addEventListener("click", () => {
    console.log('going to aftermath');
    window.location.href = '../../aftermath.html';
});
search.addEventListener("click", () => {
    console.log('going to search');
});
interview.addEventListener("click", () => {
    console.log('going to interview');
});
news.addEventListener("click", () => {
    console.log('going to news');
});