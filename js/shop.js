function total()
	{
			var count=0;
			var input = document.getElementsByName("product");
			var sum = 0;

			for (var i = 0; i < input.length; i++) 
				{
				  	if (input[i].checked) 
				  	{
				  		if(count < 4)
				  		{
				  			var qty=document.getElementsByName('quantity')[i].value;
							if(qty==0)
							{
								qty=1;
							}
					    	sum = sum + parseFloat(input[i].value) * parseFloat(qty);
					    	count++;
				   		}
				   		else
				   		{
				   			alert('Sorry, You cannot select more than 4 items');
				   			input[i].checked=false;
				   			break;
				   		}
				    }
				}
			document.getElementsByName("search")[0].value = "$" + sum.toFixed(2);
	}

function passvalue()
{
	var total_amount = document.querySelector('input[type="text"]').value;
	var count=0;
	var flag=0;
	if(total_amount == '' || total_amount=='$0.00')
	{
		alert('Please select items');
		return false;
		flag=0;
	}
	else
	{
		var input = document.getElementsByName('product');
		for (var i = 0; i < input.length; i++) 
		{
			if (input[i].checked) 
			{
			 	var nodes=document.getElementsByTagName('h2');
			 	var price=document.getElementsByTagName('label');
			 	var qty=document.getElementsByClassName('qnty');
			 	count++;
			 	flag=1;
			 	if(count==1)
				{
					sessionStorage.setItem('product-1', nodes[i].textContent);
					sessionStorage.setItem('price-1', price[i].textContent);
					sessionStorage.setItem('qty-1', qty[i].value);
				}
				if(count==2)
				{
					sessionStorage.setItem('product-2', nodes[i].textContent);
					sessionStorage.setItem('price-2', price[i].textContent);
					sessionStorage.setItem('qty-2', qty[i].value);
				}
				if(count==3)
				{
					sessionStorage.setItem('product-3', nodes[i].textContent);
					sessionStorage.setItem('price-3', price[i].textContent);
					sessionStorage.setItem('qty-3', qty[i].value);
				}
				if(count==4)
				{
					sessionStorage.setItem('product-4', nodes[i].textContent);
					sessionStorage.setItem('price-4', price[i].textContent);
					sessionStorage.setItem('qty-4', qty[i].value);
				}
			}
		}
}

		sessionStorage.setItem('count', count)
		sessionStorage.setItem('textvalue', total_amount);
		sessionStorage.setItem('flag', flag);
		return true;
}