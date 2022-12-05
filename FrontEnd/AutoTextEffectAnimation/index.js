const containerEl = document.querySelector(".container");

const headingEl = document.getElementsByTagName("h1");

const profession = ["YouTuber", "Freelancer", "Web Devloper", "Instructor"];

let professionIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I am ${profession[professionIndex].slice(0, 1) === "I" ? "an" : "a"} ${profession[professionIndex].slice(0, characterIndex)}</h1>`;


    if (characterIndex === profession[professionIndex].length) {
        professionIndex++;
        characterIndex = 0;
    }

    if (professionIndex === profession.length) {
        professionIndex = 0;
    }
    setTimeout(updateText, 400)
}



