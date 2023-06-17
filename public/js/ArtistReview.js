$('document').ready(function() { 
	/* handling form validation */
	$("#Hire4event-Artist-Review").validate({
		rules: {
			RatingValue: {
				required: true,
			},
			ReviewDescription: {
				required: true,
			},
		},
		messages: {
			RatingValue:{
			  required: "Please choose a rating"
			 },
			 ReviewDescription: "This is required",
		},
		submitHandler: submitForm	
	});	   
	/* Handling login functionality */
	function submitForm() {		
		var data = $("#Hire4event-Artist-Review").serialize();
		var postid = $('input[name="postid"]').val();
		$.ajax({				
			type : 'POST',
			url  : 'https://hire4event.com/ArtistReview-process.php',
			data : data,
			beforeSend: function(){	
				$("#error_Artist_Review").fadeOut();
				$("#Hire4event_Artist_Review").html('<i class="fa fa-spinner" aria-hidden="true"></i> &nbsp; Please wait...');
			},
			success : function(response){
			    var ReturnData = response.trim();
				if(ReturnData=="SuccessDone")
				{									
					$("#error_Artist_Review").fadeIn(1000, function(){						
						$("#error_Artist_Review").html('<div class="alert alert-success"> <i class="fa fa-check" aria-hidden="true"></i> &nbsp;Success! Your review for this artist has been submitted successfully.</div>');
						$("#Hire4event_Artist_Review").html('Submit Review');
						$('#Hire4event-Artist-Review')[0].reset();
						LoadReview(postid);
					});
				} else {									
					$("#error_Artist_Review").fadeIn(1000, function(){						
						$("#error_Artist_Review").html('<div class="alert alert-danger"> <span class="glyphicon glyphicon-asterisk"></span> &nbsp; '+ReturnData+' !</div>');
						$("#Hire4event_Artist_Review").html('Submit Review');
					});
				}
			}
		});
		return false;
	} 
	
	
function LoadReview(postid)
{
var PostID=postid;
$.ajax({
type: "POST",
url: "https://hire4event.com/ajax-review-user.php",
data:'PostID='+PostID+'&Review='+'ReviewUser',
success: function(data){
$("#ReviewReturn").html(data);
}
});  
}
	
	
});