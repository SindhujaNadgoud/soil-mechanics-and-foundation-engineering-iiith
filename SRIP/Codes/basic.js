
function myMove() {
  setTimeout(pictureChange,200);
  setTimeout(boxmove,5);
}
function pictureChange()
{
document.getElementById("jug").src="C:/Desktop/GitBash/Git/SRIP/soil-mechanics-and-foundation-engineering-iiith/SRIP/Codes/Images/JugPour.png";
}
function boxmove()
{
  var elem = document.getElementById("recttop");   
  var pos = 0;
  var id = setInterval(frame, 1);
  function frame() {
    if (pos == 280) {
      clearInterval(id);
    } else {
      pos++; 
      elem.style.top = pos + "px"; 
       
    }
  }
}



 
 