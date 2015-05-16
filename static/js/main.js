$(document).ready(function(){

	var reminder_form = $('#reminder-setup');

	var audio_messages = [];

	var schedule = {
		1: ["8:00"],
		2: ["8:00", "17:00"],
		3: ["8:00", "12:00", "17:00"],
		4: ["8:00", "11:00", "14:00", "17:00"]
	}

	
	// Capture form submit and send ajax 
	// request with data

	reminder_form.submit(function(e) {

		e.preventDefault();

		var data = reminder_form.serialize();

		console.log(data);

	});

	// Configure time to take based on frequency

	var frequency_selector = reminder_form.find('#frequency');

	var reminder_schedule_container = reminder_form.find('#reminder-schedule');

	var reminder_schedule_list = reminder_schedule_container.find('ol');
	
	frequency_selector.change(function() {

		var times = schedule[frequency_selector.val()];

		var template = $('#reminder_template').clone();

		reminder_schedule_list.empty()

		times.forEach(function(t, n){ 

			var time = template.clone().appendTo(reminder_schedule_list);

			var time_value = time.find("input");

			time_value.attr('value', t);
			time_value.attr('name', 'time_' + String(n));
			time_value.attr('id', 'time_' + String(n));

		});

		reminder_schedule_container.show()

	});


});