document.addEventListener('DOMContentLoaded',function()
{
	var forms=document.forms['login'];

	var inputs = document.querySelectorAll('input');
	
	var pattern ={
		username: /^[a-z0-9]{5,12}$/i,
		password:/^[\w-@]{4,12}$/
		
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


	forms.onsubmit=function(e)
	{
		e.preventDefault();
		var username=forms.querySelector('input[type="text"]').value;
		var password=forms.querySelector('input[type="password"]').value;
		
		if(username=='admin')
		{
			if(password=='12345')
			{
				alert('Welcome to Supreme Fitness');
				window.location.href="main page.html";
			}
			else
			{
				alert('Password is incorrect');
				forms.querySelector('input[type="password"]').value='';
			}
		}
		else
		{
			alert('Username is incorrect');
			forms.querySelector('input[type="text"]').value='';
		}
	}
})