setTimeout(function()
{

	

	setTimeout (function()
	{
		var stars=document.getElementById ('stars');
		unfade(stars)
	},500);
	
	setTimeout (function()
	{
		var clouds=document.getElementById ('clouds');
		unfade(clouds);
	},1000);
	
	setTimeout (function()
	{
		var stairs=document.getElementById ('stairs');
		unfade(stairs);
	},1500);
	setTimeout (function()
	{
		var boat=document.getElementById ('boat');
		unfade(boat);
	},2000);
	setTimeout (function()
	{
		var boy=document.getElementById ('boy');
		unfade(boy);
	},2500);
	setTimeout (function()
	{
		var hawk=document.getElementById ('hawk');
		unfade(hawk);
	},3000);
	setTimeout (function()
	{
		var text=document.getElementById ('text');
		unfade(text);
	},3500);
	setTimeout (function()
	{
		var timer=document.getElementById('timer');
		unfade(timer);
		console.log(11);
	},4000);


	function unfade(element) {
    var op = 0.1;  // initial opacity
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);


}
	
},1000);
