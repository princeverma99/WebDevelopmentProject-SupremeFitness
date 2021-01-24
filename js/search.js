document.addEventListener('DOMContentLoaded', function()
{
	var search=document.querySelector('input[type="text"]');
	
	search.onkeyup=function(e)
	{
		var filter=search.value.toLowerCase();
		var divs=document.getElementsByClassName('product');
		var nodes=document.getElementsByTagName('h2');

		for(var i=0 ; i < divs.length; i++)
		{
			if(nodes[i].textContent.toLowerCase().includes(filter))
			{
				divs[i].style.display = "inline-block";
			}
			else
			{
				divs[i].style.display="none";
			}
		}
	}
})