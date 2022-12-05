const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (event) => {
    const xPos = event.offsetX;
    const yPos = event.offsetY;

    const spanEl = document.createElement("span");

    spanEl.style.left = xPos + "px";
    spanEl.style.top = yPos + "px";

    //Use this random number function to change the height of span means heart img.
    const size = Math.random() * 100;
    spanEl.style.width = size + "px";
    spanEl.style.height = size + "px";

    bodyEl.appendChild(spanEl);

    //To remove the remainging heart and give clean UI expricences use SetTimeOut

    setTimeout(() => {
        spanEl.remove();
    }, 3000)
})