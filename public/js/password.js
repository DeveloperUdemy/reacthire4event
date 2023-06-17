$('document').ready(function() { 
	/* handling form validation */
	$("#hire4event-passwordupdate").validate({
		rules: {
			currentpassword: {
				required: true,
			},
			newpassword: {
				required: true,
			},
			confirmpassword: {
				required: true,
			},
		},
		messages: {
			currentpassword:{
			  required: "Enter current password"
			 },
			newpassword: "Enter new password",
			confirmpassword: "Enter confirm password",
		},
		submitHandler: submitForm	
	});	   
	/* Handling Change Password functionality */
	function submitForm() {		
		var data = $("#hire4event-passwordupdate").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/changepassword.php',
			data : data,
			beforeSend: function(){	
				$("#error_password").fadeOut();
				$("#hire4event_passwordupdate").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_password").fadeIn(1000, function(){						
						$("#error_password").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>Success!  Password has been updated successfully.</div>');
						$("#hire4event_passwordupdate").html('Submit');
					    $("#hire4event-passwordupdate")[0].reset(); 
					});
				} else {									
					$("#error_password").fadeIn(1000, function(){						
						$("#error_password").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
						$("#hire4event_passwordupdate").html('Submit');
					});
				}
			}
		});
		return false;
	}   
});