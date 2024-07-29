// Path to the folder containing the photos
let photoFolder = "../photos/";

// Array of photo filenames
let photoFilenames = [];
for (let i = 1; i <= 88; i++) {
  let number = i.toString().padStart(2, '0');
  number += ".jpg"
  photoFilenames.push(number);
}

let photoWidth = 230

// Shuffle the array of photo filenames using Fisher-Yates algorithm
function shuffle(array) {
    let currentIndex = array.length
    let temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}

function shuffleImages() {

  // Shuffle the photo filenames array
  let shuffledFilenames = shuffle(photoFilenames);

  // Display the shuffled photos
  let right = document.getElementById("right-photos");

  let existingPhotos = right.getElementsByClassName("photo");

  // Remove any existing photos
  while (existingPhotos.length > 0) {
    existingPhotos[0].remove();
  }

  shuffledFilenames.forEach(function (filename) {
    let img = document.createElement("img");
    img.src = photoFolder + filename;
    img.classList.add("photo");
    img.style.width = photoWidth + "px";
    img.style.padding = "5px";
    img.addEventListener("click", function () {
      handleImageClick(filename);
    });
    right.appendChild(img);
  });
}

shuffleImages();

// Reduce image size
let reduceButton = document.getElementById("reduce");
reduceButton.addEventListener("click", function () {
  let images = document.getElementsByClassName("photo");
  if(photoWidth > 10){
    photoWidth = photoWidth - 10; // Reduce the width by 10 pixels
    for (let i = 0; i < images.length; i++) {
      let img = images[i];
      img.style.width = photoWidth + "px"; // Set the new width
    }
  }
});

// Increase image size
let increaseButton = document.getElementById("enlarge");
increaseButton.addEventListener("click", function () {
  let images = document.getElementsByClassName("photo");
  photoWidth = photoWidth + 10; // Reduce the width by 10 pixels
  for (let i = 0; i < images.length; i++) {
    let img = images[i];
    img.style.width = photoWidth + "px"; // Set the new width      
  }
});

// Get the left container and change its image displayed to be the one clicked
let left = document.getElementById("left-panel");
function handleImageClick(filename) {
  console.log("Image clicked:", filename);
  clicked = filename;
  let image = left.querySelector("img");
  if (filename !== "0.png") {
    sessionStorage.setItem("filename", filename);
  }
  if (image) {
    image.src = photoFolder + filename;
  }
}