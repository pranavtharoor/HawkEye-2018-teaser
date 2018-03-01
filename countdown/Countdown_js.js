
function main()
{
	var start = setInterval(timer,1000);
}
function timer()
{
	var zero_hour = new Date("2018-3-25T00:00:00+05:30");		// date and time when countdown becomes zero
	var today = new Date().getTime();							//date and time on which browser is opened by anyone
	var going_up_date = new Date("2018-3-20T00:00:00+05:30");// date and time on which countdown webpage vgoes up
	var time_total =zero_hour - going_up_date;				// (IMPORT) total time for hourglass to go from full to empty in MILLISECONDS 
	var difference = zero_hour - today;						// (IMPORT) time left for hourglass to become empty from time when webpage is opened by anyone in MILLISECONDS 
	var days = Math.floor(difference/(1000*60*60*24));
	var hours=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
	var minutes=Math.floor((difference%(1000*60*60))/(1000*60));
	var seconds =Math.floor((difference%(1000*60))/(1000));
	document.getElementById('days').innerHTML = days+"d";
	document.getElementById('hours').innerHTML = hours+"h";
	document.getElementById('minutes').innerHTML = minutes+"m";
	document.getElementById('seconds').innerHTML = seconds+"s";
}
main();