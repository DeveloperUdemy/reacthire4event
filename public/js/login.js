$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-login").validate({
		rules: {
			user_password: {
				required: true,
			},
			user_email: {
				required: true,
				email:true,
			},
		},
		messages: {
			user_password:{
			  required: "Please enter password!"
			 },
			user_email: "Please enter email address!",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $("#Hire4event-login").serialize();	
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/user-login-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_login").fadeOut();
				$("#Hire4event_login").html('Please wait...');
				
			},
			success : function(response){						
				if(response=="LoggedIn")
				{									
					$("#Hire4event_login").html('Logging In ...');
					window.location.reload(true);
				} else {									
					$("#error_login").fadeIn(1000, function(){						
						$("#error_login").html('<div class="alert alert-danger"><i class="fa fa-info-circle" aria-hidden="true"></i>  &nbsp; '+response+' !</div>');
						$("#Hire4event_login").html('Sign In');
					});
				}
			}
		});
		return false;
	}   
});