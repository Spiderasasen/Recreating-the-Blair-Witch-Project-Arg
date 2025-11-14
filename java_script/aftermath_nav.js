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
    window.location.href = '../../Aftermath_sections/Search/search1.html';
});
interview.addEventListener("click", () => {
    console.log('going to interview');
    window.location.href = '../../Aftermath_sections/Interview/interview1.html';
});
news.addEventListener("click", () => {
    console.log('going to news');
    window.location.href = '../../Aftermath_sections/News/news1.html';
});