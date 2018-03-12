window.onload=function()
{
  
  var card = document.getElementsByClassName("card");
  for (var i = 0; i < card.length; i++) 
  {
    
    card[i].addEventListener('click', function(){

      this.classList.toggle("flipped");



    });
  }

  //if i remove the code from here onwards, each card will flip when clicked. otherwise
  //some cards are not flipped on clicking

   var x = window.matchMedia("(max-width: 632px)");
  onSizeChange(x) ;
  x.addListener(onSizeChange);
  function onSizeChange(x) 
  {
    if (x.matches) 
    {
    // If media query matches
       for (var i = 0; i < card.length; i++) 
        {

            card[i].style.zIndex=i+1;
            card[i].style.top=-100*i+'px';
        }
        var k=0;
        for (var i = 0; i < card.length; i++)
        {
            card[i].addEventListener('click', separateCards);
            
            card[i].addEventListener('click', function(e)
            {
                 if (k==0)
                {
                  var num = parseInt(e.path[1].dataset.key) - 1;
                  card[num].scrollIntoView({behavior: "instant", block: "center", inline: "nearest"}); 
                  k=1;
                }
            });


        }
    } 
  }

 

  function separateCards()
  {

    for (var i = 0; i < card.length; i++) 
    {
            card[i].style.top=100*i+'px';
            card[i].style.boxShadow="none";
    }
  }
}





  



