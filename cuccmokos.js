// Get the modal
var modal = document.getElementById("myModal2");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById("myImg");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption2");

// Alapértelmezett megjelenítés
window.onload = function() {
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
};

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  myImg.style.display = "none";
};
