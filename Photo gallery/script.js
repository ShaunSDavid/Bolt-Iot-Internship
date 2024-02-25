// Array containing image paths
var images = [
  "images/pictures/1.jpg",
  "images/pictures/2.jpg",
  "images/pictures/3.jpg",
  "images/pictures/4.jpg",
  "images/pictures/5.jpg",
  "images/pictures/6.jpg",
];
// Array containing captions for images
var captions = [
  "A PLAINTFUL STORY FROM A SISTERING VALE",
  "BROTHERHOOD IN SISTERING VALE",
  "UPON HER HEAD A PLATTED HIVE OF STRAW",
  "WHICH FORTIFIED HER VISAGE FROM THE SUN",
  "WHEREON THE THOUGHT MIGHT THINK SOMETIME IT SAW",
  "FROM OFF A HILL WHOSE CONCAVE WOMB REWORDED",
];

// Event listener to show loading icon when image starts loading
document.getElementById("fullImage").addEventListener("loadstart", function () {
  document.querySelector(".loading-icon").style.display = "block";
});

// Event listener to hide loading icon when image finishes loading
document.getElementById("fullImage").addEventListener("load", function () {
  document.querySelector(".loading-icon").style.display = "none";
});

// Event listener to hide loading icon if image fails to load
document.getElementById("fullImage").addEventListener("error", function () {
  document.querySelector(".loading-icon").style.display = "none";
});

// Function to remove thumbnail section
function removeThumbnail() {
  var thumbnail = document.getElementById("thumbnail-container");
  thumbnail.style.display = "none";
}

// Function to display thumbnail section
function displayThumbnail() {
  var thumbnail = document.getElementById("thumbnail-container");
  thumbnail.style.display = "";
}

// Function to dynamically generate thumbnails
function generateThumbnails() {
  var thumbnailContainer = document.querySelector(".thumbnail-images");
  thumbnailContainer.innerHTML = ""; // Clear existing thumbnails

  for (var i = 0; i < images.length; i++) {
    var img = document.createElement("img");
    img.src = images[i];
    img.alt = "Thumbnail " + (i + 1);
    img.onclick = function () {
      showImage(this.src);
      highlight(this.src);
    };
    thumbnailContainer.appendChild(img);
  }
}

// Call generateThumbnails function when the window loads
window.onload = generateThumbnails();

// Function to highlight selected thumbnail
function highlight(imageSrc) {
  var thumbnailContainer = document.querySelector(".thumbnail-images");
  var thumbNails = thumbnailContainer.getElementsByTagName("img");
  var captionText = document.getElementById("caption");
  for (let i = 0; i < thumbNails.length; i++) {
    if (thumbNails[i].src === imageSrc) {
      captionText.innerHTML = captions[i];
      thumbNails[i].style.opacity = "1";
      thumbNails[i].scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
    } else {
      thumbNails[i].style.opacity = ".2";
    }
  }
}

// Variable to keep track of current image index
var currentindex = 0;

// Function to display previous image
function previmg() {
  currentindex = (currentindex - 1 + images.length) % images.length;
  var fullImage = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  fullImage.src = images[currentindex];
  captionText.innerHTML = captions[currentindex];
  highlight(fullImage.src);
}

// Function to display next image
function nextimg() {
  currentindex = (currentindex + 1) % images.length;
  var fullImage = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  fullImage.src = images[currentindex];
  captionText.innerHTML = captions[currentindex];
  highlight(fullImage.src);
}
