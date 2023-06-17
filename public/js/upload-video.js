$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-uploadVideo").validate({
		rules: {
			upload_embeded_code: {
				required: true,
			},
			
		},
		messages: {
			upload_embeded_code:{
			  required: "Please enter youtube url"
			 },
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $('#Hire4event-uploadVideo')[0];	
		var formData = new FormData(data);			
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/upload-video-process.php',
			processData: false,
            contentType: false,
			data : formData,
			beforeSend: function(){	
				$("#error_artistVideo").fadeOut();
				$("#Hire4event_uploadVideo").html('<i class="fa fa-spinner" aria-hidden="true"></i>Wait...');
			},
			success : function(response){						
				if(response=="1")
				{									
					$("#error_artistVideo").fadeIn(1000, function(){						
						$("#error_artistVideo").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>Upload Successfully.</div>');
						$("#Hire4event_uploadVideo").html('Upload');
						$('#Hire4event-uploadVideo')[0].reset();
					});
				} else {									
					$("#error_artistVideo").fadeIn(1000, function(){						
						$("#error_artistVideo").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_uploadVideo").html('Upload');
					});
				}
			}
		});
		return false;
	}   
});