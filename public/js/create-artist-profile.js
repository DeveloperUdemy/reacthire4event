$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-ArtistProfile").validate({
		rules: {
				artist_firstname: {
				required: true,
				},
				artist_email: {
				required: true,
				email:true,
				},
				artist_mobile: {
				required: true,
				},
				artist_category: {
				required: true,
				},
				artist_city: {
				required: true,
				},
				
					performance_duration: {
				required: true,
				},
					open_to_travel: {
				required: true,
				},
					music_genre: {
				required: true,
				},
					team_members: {
				required: true,
				},
					location: {
				required: true,
				},
				
				
				
				
				artist_keyword: {
				required: true,
				},
				artist_description: {
				required: true,
				},
		
		},
		messages: {
			artist_firstname:{
			  required: "This is required"
			 },
			 artist_email: "This is required",
			 artist_mobile: "This is required",
			 artist_category: "This is required",
			 artist_city: "This is required",
			 performance_duration: "This is required",
			 open_to_travel: "This is required",
			 music_genre: "This is required",
			 team_members: "This is required",
			 location: "This is required",
			 artist_keyword: "This is required",
			 artist_description: "This is required",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $('#Hire4event-ArtistProfile')[0];	
		var formData = new FormData(data);
		var redirecturl = "https://hire4event.com/artist-photo/";
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/create-artist-process.php',
			processData: false,
            contentType: false,
			data : formData,
			beforeSend: function(){	
				$("#error_artistprofile").fadeOut();
				$("#Hire4event_ArtistProfile").html('<i class="fa fa-spinner" aria-hidden="true"></i> Please wait...');
			},
			success : function(response){						
				if(response=="1")
				{									
				// 	$("#error_artistprofile").fadeIn(1000, function(){						
				// 		$("#error_artistprofile").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>  Your profile has been created.</div>');
				// 		$("#Hire4event_ArtistProfile").html('Submit');
				// 	});
				$("#Hire4event_ArtistProfile").html('<i class="fa fa-spinner" aria-hidden="true"></i> Processing...');
				setTimeout('window.location.href ="'+redirecturl+'"');
					
			    }
                else if(response=="2")
				{									
				// 	$("#error_artistprofile").fadeIn(1000, function(){						
				// 		$("#error_artistprofile").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i>  Your profile has been updated.</div>');
				// 		$("#Hire4event_ArtistProfile").html('Next');
				// 	});
				$("#Hire4event_ArtistProfile").html('<i class="fa fa-spinner" aria-hidden="true"></i> Processing...');
				setTimeout('window.location.href ="'+redirecturl+'"');
					
				}
				 else {									
					$("#error_artistprofile").fadeIn(1000, function(){						
						$("#error_artistprofile").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+response+' !</div>');
						$("#Hire4event_ArtistProfile").html('Proceed Continue');
					});
				}
			}
		});
		return false;
	}   
});