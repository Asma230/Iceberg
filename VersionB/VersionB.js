import { toggleViewToPhoto, toggleViewToAudio} from '../toggleView.js';

// Declare global variables
let toselect = document.getElementById('ToSelect') // text displayed
// progress starts from 0 and ends at 9. 10 is error.
let currentProgress = 0; 
let audioElement = document.getElementById('myAudio');

document.getElementById('submit').addEventListener('click', function() {
    var clientEmail = sessionStorage.getItem("clientEmail");
    console.log(clientEmail);

    var filename = sessionStorage.getItem("filename");
    console.log(filename);

    let image = left.querySelector("img");
    if (image.src.endsWith("/0.png")) {
      alert('Please select an image!');
      console.log("is 0.png submitted");
      return;
    }

    shuffleImages();
    handleImageClick("0.png");

    currentProgress = currentProgress + 1

    if (currentProgress === 1) {
        toselect.textContent = '情緒';
        left.style.backgroundColor = '#64bbb3';
      } 
      else if (currentProgress === 2) {
        toselect.textContent = '期望';
        left.style.backgroundColor = '#20a8a4';
      } 
      else if (currentProgress === 3) {
        toselect.textContent = '信念';
        left.style.backgroundColor = '#1a9291';
      } 
      else if (currentProgress === 4) {
        toselect.textContent = '自我價值';
        left.style.backgroundColor = '#127f7c';
      }
      else if (currentProgress === 5) {
        toselect.textContent = '行為';
        toggleViewToAudio();
        audioElement.src = '../Audio/Audio1.mp3';
        left.style.backgroundColor = '#81ccc8';
      } else if (currentProgress === 6) {
        toselect.textContent = '情緒';
        left.style.backgroundColor = '#64bbb3';
      } 
      else if (currentProgress === 7) {
        toselect.textContent = '期望';
        left.style.backgroundColor = '#20a8a4';
      } 
      else if (currentProgress === 8) {
        toselect.textContent = '信念';
        left.style.backgroundColor = '#1a9291';
      } 
      else if (currentProgress === 9) {
        toselect.textContent = '自我價值';
        left.style.backgroundColor = '#127f7c';
      }
      else if(currentProgress > 9){
        toggleViewToPhoto();
        // hide all the buttons
        left.style.display = "none";
        let right = document.getElementById("right-panel");
        right.style.display = "none";    
        var container = document.querySelector(".container");
        container.style.display = "block";
        let pElement0 = document.createElement("p");
        // add text to signal the
        pElement0.textContent = "You could only finish the exercise once";
        container.appendChild(pElement0);
        let pElement1 = document.createElement("p");
        pElement1.textContent = "Please do not press the back button.";
        container.appendChild(pElement1);
        let pElement2 = document.createElement("p");
        let linkElement = document.createElement("a");
        linkElement.textContent = "Click here to go to review your results and receive the email";
        linkElement.href = "#"; // Set initial href to "#" to prevent page reload
        linkElement.onclick = function() {
          window.location.href = "../FinishVersionB/RetrievePhoto.html";
        };
        pElement2.appendChild(linkElement);
        container.appendChild(pElement2);
        let pElement3 = document.createElement("p");
        pElement3.textContent = "Press 'redo' if you really need to redo the exercise, but we do not recommend that as the first time you do the exercise provides the most accurate results.";
        container.appendChild(pElement3);
      }

    // Use AJAX to send the clientEmail, photo chosen and current progress to the PHP file
    $.ajax({
        type: "POST",
        url: "VersionB.php",
        data: { clientEmail: clientEmail, filename:filename, currentProgress:currentProgress},
        success: function(response) {
            console.log("Response from PHP file:", response);
            if (currentProgress == '10') {
                window.location.href = '../FinishVersionB/RetrievePhoto.html';
            }
        },
        error: function(xhr, status, error) {
            console.error("Error:", error);
        }
    });
});