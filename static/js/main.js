$(document).ready(function(){

	var reminder_form = $('#reminder-setup');

	var audio_messages = [];

	var schedule = {

		1: ["8:00am"],
		2: ["8:00am", "5:00pm"],
		3: ["8:00am", "12:00pm", "5:00pm"],
		4: ["8:00am", "11:00am", "2:00pm", "5:00pm"]

	}

	
	// Capture form submit and send ajax 
	// request with data

	reminder_form.submit(function(e) {

		e.preventDefault();

		var data = reminder_form.serializeArray();

		console.log(data);

	});

	// Configure time to take based on frequency

	var frequency_selector = reminder_form.find('#frequency');

	var reminder_schedule_list = reminder_form.find('#reminder_schedule');
	
	frequency_selector.change(function() {

		var times = schedule[frequency_selector.val()];

		var template = $('#reminder_template').clone();

		reminder_schedule_list.empty()

		times.forEach(function(e){ 

			var time = template.clone().appendTo(reminder_schedule_list);

			time.val();

		});

	});


});