function animateBox(day, color) {
  var box = document.getElementById('box');
  
  box.style.backgroundColor = color; // Change the background color of the box
  
  setTimeout(function() {
      box.style.top = '50%';
  }, 100);
}