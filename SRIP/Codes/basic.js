
function myMove() {
  var elem = document.getElementById("recttop");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 210) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
       
    }
  }
}