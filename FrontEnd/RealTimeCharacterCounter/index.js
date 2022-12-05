const textAreaEl = document.getElementById('textArea');
const totalCounterEl = document.getElementById('total-counter')
const remainingCounterEl = document.getElementById('remaining-counter');


textAreaEl.addEventListener("keyup", () => {
    updateCounter();
})

updateCounter();

function updateCounter() {
    totalCounterEl.innerText = textAreaEl.value.length;

    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}