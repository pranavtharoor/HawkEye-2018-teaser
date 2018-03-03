window.onload =function(){

var countDownDate = new Date("Mar 23, 2018 00:00:00").getTime();

// Update the count down every 1 second
var count=1;
var flash=0;
var y = setInterval(function() {
  flash=flash+1;
  var bod_col=["#181818","white"];
  document.getElementById("timer").style.borderColor = bod_col[flash%2];
}, 50);
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("d").innerHTML = days;
  document.getElementById("h").innerHTML = hours ;
  document.getElementById("m").innerHTML = minutes;
  document.getElementById("s").innerHTML = seconds ;
  

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }

  var col =["violet","indigo","blue","green","yellow","orange","red"];
  document.getElementById("hawke7e").style.color=col[count%7];
  document.getElementById("hawke7e").style.borderColor=col[count%7];
  count=count+1;
}, 1000);
var ocean=document.getElementById("ocean");
ocean.style.height=.75*(1/3)+'%';
console.log(11);
};