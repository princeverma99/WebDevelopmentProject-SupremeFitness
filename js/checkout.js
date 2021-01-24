var flag=sessionStorage.getItem('flag');

document.addEventListener('DOMContentLoaded', function()

{
var price1, price2, price3, price4;
var qty1, qty2, qty3, qty4;
var total1, total2, total3, total4;
var tax1=0, tax2=0, tax3=0, tax4=0;
var grand_total;
//var flag=sessionStorage.getItem('flag');
/*if(flag==1)
{
	document.getElementByClassName('checkout-products').style.display='none';
	document.getElementById('grand-total').innerHTML = 'Please Select Items from Shop Page';
}*/
var count1=sessionStorage.getItem('count');
			if(sessionStorage.getItem('qty-1') == '')
			{
				sessionStorage.setItem('qty-1',1);
			}
			if(sessionStorage.getItem('qty-2') == '')
			{
				sessionStorage.setItem('qty-2',1);
			}
			if(sessionStorage.getItem('qty-3') == '')
			{
				sessionStorage.setItem('qty-3',1);
			}
			if(sessionStorage.getItem('qty-4') == '')
			{
				sessionStorage.setItem('qty-4',1);
			}


			if(count1==1)
			{
				document.getElementById('product-name-1').innerHTML = sessionStorage.getItem('product-1');
				document.getElementById('price-1').innerHTML = sessionStorage.getItem('price-1');
				price1=sessionStorage.getItem('price-1');
				price1=price1.slice(1,);
				price1=Number(price1);

				document.getElementById('quantity-1').innerHTML = sessionStorage.getItem('qty-1');
				qty1=Number(sessionStorage.getItem('qty-1'));

				total1 = (price1 * qty1)+((price1 * qty1)*15/100);
				document.getElementById('total-1').innerHTML = total1;

				tax1=(price1*qty1)*15/100;
				document.getElementById('tax-1').innerHTML = tax1;
				grand_total=total1;
				document.getElementById('grand-total').innerHTML='$'+grand_total;
			}
			if(count1==2)
			{
				document.getElementById('product-name-1').innerHTML = sessionStorage.getItem('product-1');
				document.getElementById('price-1').innerHTML = sessionStorage.getItem('price-1');
				price1=sessionStorage.getItem('price-1');
				price1=price1.slice(1,);
				price1=Number(price1);	
				document.getElementById('quantity-1').innerHTML = sessionStorage.getItem('qty-1');
				qty1=Number(sessionStorage.getItem('qty-1'));

				total1 = (price1 * qty1)+((price1 * qty1)*15/100);
				document.getElementById('total-1').innerHTML = total1;
				tax1=(price1*qty1)*15/100;
				document.getElementById('tax-1').innerHTML = tax1;

				document.getElementById('product-name-2').innerHTML = sessionStorage.getItem('product-2');
				document.getElementById('price-2').innerHTML = sessionStorage.getItem('price-2');
				price2=sessionStorage.getItem('price-2');
				price2=price2.slice(1,);
				price2=Number(price2);	
				document.getElementById('quantity-2').innerHTML = sessionStorage.getItem('qty-2');
				qty2=Number(sessionStorage.getItem('qty-2'));

				total2 = (price2 * qty2)+((price2 * qty2)*15/100);
				document.getElementById('total-2').innerHTML = total2;
				tax2=(price2*qty2)*15/100;
				document.getElementById('tax-2').innerHTML = tax2;
				grand_total=total1+total2;
				document.getElementById('grand-total').innerHTML='$'+grand_total;
			}
			if(count1==3)
			{
				document.getElementById('product-name-1').innerHTML = sessionStorage.getItem('product-1');
				document.getElementById('price-1').innerHTML = sessionStorage.getItem('price-1');
				price1=sessionStorage.getItem('price-1');
				price1=price1.slice(1,);
				price1=Number(price1);	
				document.getElementById('quantity-1').innerHTML = sessionStorage.getItem('qty-1');
				qty1=Number(sessionStorage.getItem('qty-1'));

				total1 = (price1 * qty1)+((price1 * qty1)*15/100);
				document.getElementById('total-1').innerHTML = total1;
				tax1=(price1*qty1)*15/100;
				document.getElementById('tax-1').innerHTML = tax1;

				document.getElementById('product-name-2').innerHTML = sessionStorage.getItem('product-2');
				document.getElementById('price-2').innerHTML = sessionStorage.getItem('price-2');
				price2=sessionStorage.getItem('price-2');
				price2=price2.slice(1,);
				price2=Number(price2);					
				document.getElementById('quantity-2').innerHTML = sessionStorage.getItem('qty-2');
				qty2=Number(sessionStorage.getItem('qty-2'));

				total2 = (price2 * qty2)+((price2 * qty2)*15/100);
				document.getElementById('total-2').innerHTML = total2;
				tax2=(price2*qty2)*15/100;
				document.getElementById('tax-2').innerHTML = tax2;

				document.getElementById('product-name-3').innerHTML = sessionStorage.getItem('product-3');
				document.getElementById('price-3').innerHTML = sessionStorage.getItem('price-3');
				document.getElementById('quantity-3').innerHTML = sessionStorage.getItem('qty-3');
				price3=sessionStorage.getItem('price-3');
				price3=price3.slice(1,);
				price3=Number(price3);	
				qty3=Number(sessionStorage.getItem('qty-3'));	
				total3 = (price3 * qty3)+((price3 * qty3)*15/100);
				document.getElementById('total-3').innerHTML = total3;	
				tax3=(price3*qty3)*15/100;
				document.getElementById('tax-3').innerHTML = tax3;	
				grand_total=total1+total2+total3;
				document.getElementById('grand-total').innerHTML='$'+grand_total;	
			}
			if(count1==4)
			{
				document.getElementById('product-name-1').innerHTML = sessionStorage.getItem('product-1');
				document.getElementById('price-1').innerHTML = sessionStorage.getItem('price-1');
				price1=sessionStorage.getItem('price-1');
				price1=price1.slice(1,);
				price1=Number(price1);	
				document.getElementById('quantity-1').innerHTML = sessionStorage.getItem('qty-1');
				qty1=Number(sessionStorage.getItem('qty-1'));

				total1 = (price1 * qty1)+((price1 * qty1)*15/100);
				document.getElementById('total-1').innerHTML = total1;
				tax1=(price1*qty1)*15/100;
				document.getElementById('tax-1').innerHTML = tax1;

				document.getElementById('product-name-2').innerHTML = sessionStorage.getItem('product-2');
				document.getElementById('price-2').innerHTML = sessionStorage.getItem('price-2');
				price2=sessionStorage.getItem('price-2');
				price2=price2.slice(1,);
				price2=Number(price2);	
				document.getElementById('quantity-2').innerHTML = sessionStorage.getItem('qty-2');
				qty2=Number(sessionStorage.getItem('qty-2'));

				total2 = (price2 * qty2)+((price2 * qty2)*15/100);
				document.getElementById('total-2').innerHTML = total2;
				tax2=(price2*qty2)*15/100;
				document.getElementById('tax-2').innerHTML = tax2;

				document.getElementById('product-name-3').innerHTML = sessionStorage.getItem('product-3');
				document.getElementById('price-3').innerHTML = sessionStorage.getItem('price-3');
				price3=sessionStorage.getItem('price-3');
				price3=price3.slice(1,);
				price3=Number(price3);	
				document.getElementById('quantity-3').innerHTML = sessionStorage.getItem('qty-3');
				qty3=Number(sessionStorage.getItem('qty-3'));	
				total3 = (price3 * qty3)+((price3 * qty3)*15/100);
				document.getElementById('total-3').innerHTML = total3;
				tax3=(price3*qty3)*15/100;
				document.getElementById('tax-3').innerHTML = tax3;	

				document.getElementById('product-name-4').innerHTML = sessionStorage.getItem('product-4');
				document.getElementById('price-4').innerHTML = sessionStorage.getItem('price-4');
				price4=sessionStorage.getItem('price-4');
				price4=price4.slice(1,);
				price4=Number(price4);	
				document.getElementById('quantity-4').innerHTML = sessionStorage.getItem('qty-4');
				qty4=Number(sessionStorage.getItem('qty-4'));	
				total4 = (price4 * qty4)+((price4 * qty4)*15/100);
				document.getElementById('total-4').innerHTML = total4;
				tax4=(price4*qty4)*15/100;
				document.getElementById('tax-4').innerHTML = tax4;	
				grand_total=total1+total2+total3+total4;
				document.getElementById('grand-total').innerHTML='$'+grand_total;
			}

	//-----------------Validations
	var inputs = document.querySelectorAll('input');	
	var pattern ={
		card_number: /^[0-9]{16,16}$/i,
		cvc: /^[0-9]{3,3}$/i,
		name_on_card: /^[a-zA-Z ]{3,}$/i,
		expire: /^([0-9]{2})[/.]([0-9]{2})$/,
		name: /^[a-zA-Z ]{3,}$/,
		address: /^[a-zA-Z0-9\s,.'-]{3,}$/,
		city: /^[a-zA-Z ]{3,}$/,
		post_code: /^[a-zA-Z0-9 ]{6,6}$/,
		province: /^[a-zA-Z ]{2,}$/,
		country: /^[a-zA-Z ]{3,}$/,
		address_2: /^[a-zA-Z0-9 ]{3,}/
	}
	
	function validate(field,regex){
		if(regex.test(field.value)){
			field.className = 'valid';
		}else{
			field.className = 'invalid';
		}
	}
	

	inputs.forEach((input)=>{
		input.addEventListener('keyup', (e)=>{
			validate(e.target,pattern[e.target.attributes.name.value]);
		})
	})


})

	function tb_clear()
	{
		document.getElementById('card_info').reset();
	}	

	function validate_submit()
	{
		var count=0;
		var box = document.getElementsByName('terms')[0];

		if(flag==1)
		{
				var validate = document.querySelectorAll('input[type="text"]');
				for(var i=0;i<11;i++)
				{
					console.log(validate[i].className);
					if(validate[i].className=='invalid' || validate[i].className=='')
					{
						alert('Please enter all fields correctly');
						break;
					}
					else if(validate[i].className=='valid')
					{
						count++;
					}
				}
		}
		else if(flag==null)
		{
			alert('Please select items from shop');
			document.getElementById('card_info').reset();
			document.getElementById('shipping_info').reset();
		}
		console.log(count);

		if(box.checked && count>=10)
		{
			alert('Thank You for Shopping!');
			document.getElementById('card_info').reset();
			document.getElementById('shipping_info').reset();			
		}
		else if(box.checked==false && count>=10)
		{
			alert('Read Terms Carefully');
		}
	}