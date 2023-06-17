$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-HomeEnquiry").validate({
		rules: {
			name: {
				required: true,
			},
			email: {
				required: true,
				email: true
			},
			phone: {
				required: true,
			},
			subject: {
				required: true,
			},
		},
		messages: {
			name:{
			  required: "This is required"
			 },
			 email: "This is required",
			 phone: "This is required",
			 subject: "This is required",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $("#Hire4event-HomeEnquiry").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/contact-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_HomeEnquiry").fadeOut();
				$("#Hire4event_HomeEnquiry").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_HomeEnquiry").fadeIn(1000, function(){						
						$("#error_HomeEnquiry").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>Thankyou, Your Enquiry has been submitted successfully.</div>');
						$("#Hire4event_HomeEnquiry").html('Submit');
						$('#Hire4event-HomeEnquiry')[0].reset();
					});
				} else {									
					$("#error_HomeEnquiry").fadeIn(1000, function(){						
						$("#error_HomeEnquiry").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_HomeEnquiry").html('Submit');
					});
				}
			}
		});
		return false;
	}   
});