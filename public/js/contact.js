$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-Contact").validate({
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
		var data = $("#Hire4event-Contact").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/contact-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_Contact").fadeOut();
				$("#Hire4event_Contact").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_Contact").fadeIn(1000, function(){						
						$("#error_Contact").html('<div class="alert alert-success"> <span class="glyphicon glyphicon-user"></span> &nbsp;Your Enquiry has been sent.</div>');
						$("#Hire4event_Contact").html('Send Message');
						$('#Hire4event-Contact')[0].reset();
					});
				} else {									
					$("#error_Contact").fadeIn(1000, function(){						
						$("#error_Contact").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_Contact").html('<span class="glyphicon glyphicon-refresh"></span> &nbsp; Send Message');
					});
				}
			}
		});
		return false;
	}   
});