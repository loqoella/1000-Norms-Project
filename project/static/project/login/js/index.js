/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/



function cambiar_login() {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_login";  
	document.querySelector('.cont_form_login').style.display = "block";
	document.querySelector('.cont_form_sign_up').style.opacity = "0";               

	setTimeout(function(){  document.querySelector('.cont_form_login').style.opacity = "1"; },400);  
	  
	setTimeout(function(){    
	document.querySelector('.cont_form_sign_up').style.display = "none";
	},200);  
}

function real_logout(){
	console.log('perform ajax');
	$.ajax({
	        url:"/logout", //提交到那里
	        type:"POST", //提交类型
	        data:JSON.stringify({"logout_request":"logout"}), //提交的数据
	        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
	　　　　	console.log('responsed data:');
	        console.log(data);

			sessionStorage.setItem("loginSuccess","false");
			
			document.querySelector('.cont_forms').className = "cont_forms";
			document.querySelector('.col_md_logout').style.display = "none";
		    document.querySelector('.col_md_login').style.display = "block";
			document.querySelector('.col_md_sign_up').style.display = "block";
	    	}
	    })	
	
}

function cambiar_sign_up(at) {
    document.querySelector('.cont_forms').className = "cont_forms cont_forms_active_sign_up";
    document.querySelector('.cont_form_sign_up').style.display = "block";
	document.querySelector('.cont_form_login').style.opacity = "0";
	  
	setTimeout(function(){  document.querySelector('.cont_form_sign_up').style.opacity = "1";
	},100);  

	setTimeout(function(){   document.querySelector('.cont_form_login').style.display = "none";
	},400);  


}    



function ocultar_login_sign_up() {

	document.querySelector('.cont_forms').className = "cont_forms";  
	document.querySelector('.cont_form_sign_up').style.opacity = "0";               
	document.querySelector('.cont_form_login').style.opacity = "0"; 

	setTimeout(function(){
	document.querySelector('.cont_form_sign_up').style.display = "none";
	document.querySelector('.cont_form_login').style.display = "none";
	},500);  
}






function real_sign_up()
{
	var sign_up_email = document.getElementById("sign_up_email");
    var sign_up_user = document.getElementById("sign_up_user");
    var sign_up_password = document.getElementById("sign_up_password");
	var sign_up_confirm_password = document.getElementById("sign_up_confirm_password");
	//var reg = new RegExp("^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$"); 
	if(sign_up_password.value == sign_up_confirm_password.value){
		if(sign_up_email.value.indexOf("@")>=0){
			if(sign_up_password.value.length >= 6){

				$.ajax({
			        url:"/register", //提交到那里
			        type:"POST", //提交类型
			        data:JSON.stringify({"email":sign_up_email.value,"username":sign_up_user.value, "password":sign_up_password.value}), //提交的数据
			        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
				　　　　	console.log('responsed data:');
				        console.log(data);
				        if(data['email_exist'] == 'true'){
				        	alert("Email existed, please enter a new one.")
				    	}
				    	else{
				    		alert("Sign up successfully, please login use this account.")
				    	}
			        }
			    })	

				
			}else{
				
				alert("Password is too short, please choose a password at least 6 numbers.")
			}
		}else{
			alert("Email form incorrect.")
		}
	}else{
		alert("Two passwords are not same.")
	}


}


$("#login_button").click(function() {
        var login_email = document.getElementById("login_email");
	    var login_password = document.getElementById("login_password");
	    //console.log(login_email.value);
	    //var login_data = {'email':login_email, 'password':login_password};
	    var found_email = 'false';
	    var password_match = 'false';
	    $.ajax({
	        url:"/login/validate", //提交到那里
	        type:"POST", //提交类型
	        data:JSON.stringify({"email":login_email.value,"password":login_password.value}), //提交的数据
	        success:function(data){ //success不会直接运行，当服务器有数据传输过来才会触发执行。
	　　　　	console.log('responsed data:');
	        console.log(data);
	        found_email = data['email_found'];
	        password_match = data['password_matched'];
	        perform_login(login_email, found_email, password_match)

	    	}
	    })	


    })




function perform_login(login_email, found_email, password_match)
{
	    if(login_email.value.indexOf("@")>=0){
			//Check to see if the user is registered. 
			console.log(found_email);
			if( found_email == "true" )
			{   
				//Now check to see if the password matches.
				//if( login_password.value ==  resonsed_passowrd)
				if( password_match == "true" )
				{
					
					sessionStorage.setItem("loginSuccess","true");
					
					document.querySelector('.cont_forms').className = "cont_forms";
					document.querySelector('.cont_form_login').style.display = "none";
					document.querySelector('.cont_form_sign_up').style.opacity = "0"; 
					document.querySelector('.col_md_logout').style.display = "block";
					document.querySelector('.col_md_login').style.display = "none";
					document.querySelector('.cont_form_login').style.opacity = "0";
					document.querySelector('.col_md_sign_up').style.display = "block";
					document.querySelector('.cont_form_sign_up').style.display = "none";
					
					//window.location.href = '../Physical outcome measures.html';
					
				
				}
				else
				{
					alert("Password is incorrect.");
				}
			}
			
			else
			{
				alert("User not found!");
				return;
			}
			
		}
		else{
			alert("Email form incorrect.")
		}
	
}





