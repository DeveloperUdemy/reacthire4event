$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-updateProfile").validate({
		rules: {
			user_name: {
				required: true,
			},
			user_mobile: {
				required: true,
			},
			user_address: {
				required: true,
			},
			
		},
		messages: {
			user_name:{
			  required: "Please enter name"
			 },
			 user_mobile: "Please enter mobile number",
			 user_address: "Please enter address",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $('#Hire4event-updateProfile')[0];	
		var formData = new FormData(data);			
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/update-profile-process.php',
			processData: false,
            contentType: false,
			data : formData,
			beforeSend: function(){	
				$("#error_profile").fadeOut();
				$("#Hire4event_updateProfile").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response=="1")
				{									
					$("#error_profile").fadeIn(1000, function(){						
						$("#error_profile").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>  Your profile has been updated.</div>');
						$("#Hire4event_updateProfile").html('Submit');
					});
				} else {									
					$("#error_profile").fadeIn(1000, function(){						
						$("#error_profile").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_updateProfile").html('Submit');
					});
				}
			}
		});
		return false;
	}   
});