export function toggleViewToPhoto() {
    var audioContainer = document.getElementById("audioContainer");
    var choosePhoto = document.getElementById("choosePhoto");    
    audioContainer.style.display = "none";
    choosePhoto.style.display = "flex";
}

export function toggleViewToAudio() {
    var audioContainer = document.getElementById("audioContainer");
    var choosePhoto = document.getElementById("choosePhoto");     
    audioContainer.style.display = "block";
    choosePhoto.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector(".hideAudio");
    button.addEventListener("click", toggleViewToPhoto);
  });