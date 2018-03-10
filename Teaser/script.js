console.log(11);

window.onload=function()
{
  
  var card = document.getElementsByClassName("card");

  for (var i = 0; i < card.length; i++) 
  {
    
    card[i].addEventListener('click', function(){

      this.classList.toggle("flipped");
    });
      
  }

};