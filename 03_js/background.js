const images = ["test_1.png","test_2.png","test_3.png"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `/04_img/${chosenImage}`;
bgImage.style = "width: 50px; height: 50px;";

const imagesArea = document.querySelector("#randomImg");
imagesArea.appendChild(bgImage);
