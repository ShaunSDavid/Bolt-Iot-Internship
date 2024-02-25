function toggleNav() {
  var x = document.getElementById("myToggledNav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function darkMode() {
  var body = document.querySelector("body");
  var award = document.getElementById("awards");
  var title = document.getElementById("award1-title");

  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    award.classList.remove("dark-mode");
    title.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
    award.classList.add("dark-mode");
    title.classList.add("dark-mode");
  }
}
