const btnEl = document.querySelector('.btn');
const closeIconEl = document.querySelector('.close-icon');
const trailerEl = document.querySelector('.trailer-container')
const videoEl = document.querySelector("video");
const headEl = document.querySelector("h1");

//Movei Name:-
headEl.innerText = `MS Dhoni : The Untold Story`;




btnEl.addEventListener("click", () => {
    trailerEl.classList.remove("active");
})

closeIconEl.addEventListener("click", () => {
    trailerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
})