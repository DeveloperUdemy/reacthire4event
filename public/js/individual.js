$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-Registration").validate({
		rules: {
			username: {
				required: true,
			},
			mobile: {
				required: true,
			},
			email: {
				required: true,
				email: true
			},
			password: {
				required: true,
			},
			confirmpassword: {
				required: true,
			},
		},
		messages: {
			 username: {
			 	required: "This is required!"
			 },
			 mobile: "This is required!",
			 email: "This is required!",
			 password: "This is required!",
			 confirmpassword: "This is required!",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $("#Hire4event-Registration").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/registerprocess.php',
			data : data,
			beforeSend: function(){	
				$("#error_Registration").fadeOut();
				$("#Hire4event_Registration").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_Registration").fadeIn(1000, function(){						
						$("#error_Registration").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i> &nbsp;Your registration has been completed successfully.</div>');
						$("#Hire4event_Registration").html('Sign Up');
						$('#Hire4event-Registration')[0].reset();
						window.location.reload(true);
					});
				} else {									
					$("#error_Registration").fadeIn(1000, function(){						
						$("#error_Registration").html('<div class="alert alert-danger"> <i class="fa fa-info-circle" aria-hidden="true"></i> &nbsp; '+response+' !</div>');
						$("#Hire4event_Registration").html('Sign Up');
					});
				}
			}
		});
		return false;
	}   
});