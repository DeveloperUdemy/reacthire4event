$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-uploadPhoto").validate({
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
		var data = $('#Hire4event-uploadPhoto')[0];	
		var formData = new FormData(data);
		var redirecturl = "https://hire4event.com/artist-video/";
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/upload-photo-process.php',
			processData: false,
            contentType: false,
			data : formData,
			beforeSend: function(){	
				$("#error_artistPhoto").fadeOut();
				$("#Hire4event_uploadPhoto").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response=="1")
				{									
					$("#error_artistPhoto").fadeIn(1000, function(){
					    
					    $("#Hire4event_uploadPhoto").html('Processing...');
				        setTimeout('window.location.href ="'+redirecturl+'"');
					    
					    
					//	$("#error_artistPhoto").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>Upload Successfully.</div>');
					//	$("#Hire4event_uploadPhoto").html('Upload photo');
						
						
						
					});
					
					
					
					
					
					
					
				} else {									
					$("#error_artistPhoto").fadeIn(1000, function(){						
						$("#error_artistPhoto").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_uploadPhoto").html('Upload with next');
					});
				}
			}
		});
		return false;
	}   
});