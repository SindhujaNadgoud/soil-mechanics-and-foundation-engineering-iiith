
function myMove() {
  setTimeout(pictureChange,200);
  setTimeout(mudchange,250);
  setTimeout(hidejug,800);
  setTimeout(boxmove,700);

}
function pictureChange()
{
document.getElementById("jug").src="pourresized.png";
}
function mudchange()
{
  document.getElementById("mud").src="mudfinal.png";
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
function hidejug() 
{
   document.getElementById("jug").style.visibility = "hidden";
}



 
 