
function myMove() {
  setTimeout(cuprotate,200);
  setTimeout(boxmove,9000);
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

function cuprotate()
{
  document.getElementById("cup").style.transform = "rotate(-45deg)"; 
   setTimeout(showdrop,600);
   setTimeout(colourchane, 8000);
}

function colourchane()
{
    document.getElementById("cup").style.backgroundColor="rgba(0,0,0,0.0)";
}
 
 function showdrop()
 {
   document.getElementById('drop').style.display = "block";
   document.getElementById('mudsample').style.height="145px";
 }