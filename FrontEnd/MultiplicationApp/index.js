const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);

// Getting access of html 
const questionEl = document.getElementById('question');
const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');

questionEl.innerText = `What is ${num1} multiply by ${num2}?`;

// let score = 0;
let score = JSON.parse(localStorage.getItem("Score"));


const corectAns = num1 * num2;



if (!score) {
    score = 0;
}

scoreEl.innerText = `score: ${score}`;

//Add enevt listner

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;//But tjhis value is in string we have to make this into integer by adding (+)
    if (userAns === corectAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("Score", JSON.stringify(score));
}

