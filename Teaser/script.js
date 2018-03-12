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
              // console.log(e);
              // see the event structure after uncommenting the line above.
              // the "path" definition contains the heirarchy of the element clicked.
              // each of the elements of the "path array" corresponds to parents of the element clicked on.
              if(k==0)
              {           
                var num = parseInt(e.path[1].dataset.key) - 1;
                //to get the corresponding value of i
                card[num].scrollIntoView({behavior: "instant", block: "center", inline: "nearest"}); 
                //simpler way than scrollTo to ensure the element always shows up in the middle of the screen.
                k=1;
               }      
            });
        }
    } 
  }

  function separateCards(e)
  {
    for (var i = 0; i < card.length; i++) 
    {
      card[i].style.top=100*i+'px';
      card[i].style.boxShadow="none";
    }
  }
}