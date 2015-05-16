$(document).ready(function(){

	var reminder_form = $('#reminder-setup');

	var start_hour = "0700"

	
	// Capture form submit and send ajax request
	// with data

	reminder_form.submit(function(e) {

		e.preventDefault();

		var data = reminder_form.serializeArray();

		console.log(data);

	});

	// Configure time to take based on frequency
	var frequency_selector = reminder_form.find('#frequency');
	
	frequency_selector.change(function() {

		console.log(frequency_selector.val());

	})


});