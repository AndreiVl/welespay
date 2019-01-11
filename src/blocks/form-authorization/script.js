$(document).ready(function() {
	$('#test-form').on('submit', function(e) {
		e.preventDefault();

		let data = {
			grant_type: "password",
		  password: "user",
		  username: "user"
		}
		
		jQuery.ajax({
		  type: "POST",
		  url: "http://192.168.99.100:8080/oauth/token",
		  contentType: 'application/json',
		  dataType: 'json',
		  data: JSON.stringify(data)
		}).done(function(result) {
		  console.log(result);    
		});
	});	
});