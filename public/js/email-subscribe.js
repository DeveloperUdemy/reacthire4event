$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-Subscribe").validate({
		rules: {
			email: {
				required: true,
				email: true
			},
			
		},
		messages: {
			email:{
			  required: "Please enter email address!"
			 },
			
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $("#Hire4event-Subscribe").serialize();				
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/Email-Subscribe-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_subscribe").fadeOut();
				$("#Hire4event_Subscribe").html('<i class="fa fa-spinner" aria-hidden="true"></i> Wait...');
			},
			success : function(response){						
				if(response==1)
				{									
					$("#error_subscribe").fadeIn(1000, function(){						
						$("#error_subscribe").html('<div class="alert alert-success"> <i class="fa fa-envelope-o" aria-hidden="true"></i> Thankyou, This email has been subscribed with us.</div>');
						$("#Hire4event_Subscribe").html('Subscribe');
						$('#Hire4event-Subscribe')[0].reset();
					});
				} else {									
					$("#error_subscribe").fadeIn(1000, function(){						
						$("#error_subscribe").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_Subscribe").html('Subscribe');
					});
				}
			}
		});
		return false;
	}   
});