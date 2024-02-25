var images = [
  "images/pictures/1.jpg",
  "images/pictures/2.jpg",
  "images/pictures/3.jpg",
  "images/pictures/4.jpg",
  "images/pictures/5.jpg",
  "images/pictures/6.jpg",
];
var captions = [
  "A PLAINTFUL STORY FROM A SISTERING VALE",
  "BROTHERHOOD IN SISTERING VALE",
  "UPON HER HEAD A PLATTED HIVE OF STRAW",
  "WHICH FORTIFIED HER VISAGE FROM THE SUN",
  "WHEREON THE THOUGHT MIGHT THINK SOMETIME IT SAW",
  "FROM OFF A HILL WHOSE CONCAVE WOMB REWORDED",
];
document.getElementById("fullImage").addEventListener("loadstart", function () {
  document.querySelector(".loading-icon").style.display = "block"; // Show loading icon when the image starts loading
});

document.getElementById("fullImage").addEventListener("load", function () {
  document.querySelector(".loading-icon").style.display = "none"; // Hide loading icon when the image finishes loading
});

document.getElementById("fullImage").addEventListener("error", function () {
  document.querySelector(".loading-icon").style.display = "none"; // Hide loading icon if image fails to load
});

function removeThumbnail() {
  var thumbnail = document.getElementById("thumbnail-container");
  thumbnail.style.display = "none";
}
function displayThumbnail() {
  var thumbnail = document.getElementById("thumbnail-container");
  thumbnail.style.display = "";
}
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

window.onload = generateThumbnails();

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

var currentindex = 0;
function showImage(imageSrc) {
  var fullImage = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  fullImage.src = imageSrc;
  fullImage.style.display = "block";
  currentindex = images.indexOf(imageSrc);
  captionText.innerHTML = captions[currentindex];
  highlight(imageSrc);
}
function previmg() {
  currentindex = (currentindex - 1 + images.length) % images.length;
  var fullImage = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  fullImage.src = images[currentindex];
  captionText.innerHTML = captions[currentindex];
  highlight(fullImage.src);
}

function nextimg() {
  currentindex = (currentindex + 1) % images.length;
  var fullImage = document.getElementById("fullImage");
  var captionText = document.getElementById("caption");
  fullImage.src = images[currentindex];
  captionText.innerHTML = captions[currentindex];
  highlight(fullImage.src);
}
