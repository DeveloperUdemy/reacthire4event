$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-updateEmail").validate({
		rules: {
			user_email: {
				required: true,
				email:true,
			},
		},
		messages: {
			user_email:{
			  required: "Enter valid E-mail id"
			 },
		},
		submitHandler: submitForm	
	});	   
	/* Handling Change Password functionality */
	function submitForm() {		
		var data = $("#Hire4event-updateEmail").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/email-update-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_email").fadeOut();
				$("#Hire4event_updateEmail").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_email").fadeIn(1000, function(){						
						$("#error_email").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i> Success! This email address has been updated.</div>');
						$("#Hire4event_updateEmail").html('Submit'); 
					});
				} else {									
					$("#error_email").fadeIn(1000, function(){						
						$("#error_email").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-info-sign"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_updateEmail").html('Submit');
					});
				}
			}
		});
		return false;
	}   
});