





// Get the modal






// window.alert("Attention you might be not pay your internet bill! PAY IMMEDIATELY");


window.addEventListener('scroll', function() {
  var modal = document.getElementById("myModal2");
  var modal2 = document.getElementById("xd");

 

  // Check if the user has scrolled past the 500th pixel
  if (5 <= window.scrollY) {
      modal.style.display = 'block'; // Megjelenítjük az üzenetet
      
  }

  else if (250 <= window.scrollY) {
    modal2.style.display = 'block';

  }
  
  
  else {
      modal.style.display = 'none'; // Elrejtjük az üzenetet, ha nem érték el az 500. pixelt
      modal2.style.display = 'none';
  
  
    }
    
});


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close2")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  myImg.style.display = "none";
};