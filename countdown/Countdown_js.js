
function main()
{
	//alert("yes");
	//alert("1");
	var start = setInterval(timer,1000);
	//alert("yes");
}
function timer()
{
	var zero_hour = new Date("2018-3-25T00:00:00+05:30");
	var today = new Date().getTime();

	var difference = zero_hour - today;
	//var yes = new Date();
	//alert(yes.getHours());
	//alert("1");
	var days = Math.floor(difference/(1000*60*60*24));
	//alert("2");
	var hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
	var minutes=Math.floor((difference%(1000*60*60))/(1000*60));
	var seconds =Math.floor((difference%(1000*60))/(1000));
	document.getElementById('days').innerHTML = days+"d";
	document.getElementById('hours').innerHTML = hours+"h";
	document.getElementById('minutes').innerHTML = minutes+"m";
	document.getElementById('seconds').innerHTML = seconds+"s";
}
main();