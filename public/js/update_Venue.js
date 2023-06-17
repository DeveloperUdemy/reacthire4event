$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-UpdateVenue").validate({
		rules: {
			"category[]": {
				required: true,
			},
			venue_type: {
				required: true,
			},
			venue_location: {
				required: true,
			},
            venue_heading: {
				required: true,
			},
			venue_title: {
				required: true,
			},
			venue_keyword: {
				required: true,
			},
			venue_description: {
				required: true,
			},
			
		},
		messages: {
			"category[]":{
			  required: "Please checked any one category"
			 },
			 venue_type: "This is required",
			 venue_location: "This is required",
			 venue_heading: "This is required",
			 venue_title: "This is required",
			 venue_keyword: "This is required",
			 venue_description: "This is required",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $('#Hire4event-UpdateVenue')[0];	
		var formData = new FormData(data);			
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/updateVenue_process.php',
			processData: false,
            contentType: false,
			data : formData,
			beforeSend: function(){	
				$("#error_Venue").fadeOut();
				$("#Hire4event_UpdateVenue").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response=="1")
				{									
					$("#error_Venue").fadeIn(1000, function(){						
						$("#error_Venue").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>  Your venue has been updated successfully.</div>');
						$("#Hire4event_UpdateVenue").html('Submit');
					});
				} else {									
					$("#error_Venue").fadeIn(1000, function(){						
						$("#error_Venue").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_UpdateVenue").html('Submit');
					});
				}
			}
		});
		return false;
	}   
});