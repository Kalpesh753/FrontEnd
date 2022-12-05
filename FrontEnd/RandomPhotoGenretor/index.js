const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
    imageNum = 10;
    addNewImages();
});

function addNewImages() {
    for (let index = 0; index < imageNum; index++) {
        const newImg = document.createElement("img");
        newImg.src = `https://picsum.photos/300?${Math.floor(Math.random() * 2000)}`;

        imageContainerEl.appendChild(newImg);
    }
}
