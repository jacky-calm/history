$(document).ready(
	function drawTimeline() {
    $.getJSON("/dynasties", function(result) {
    	console.log(result);
    	var data = result.filter(function(dynasty) {
    		return dynasty.period[1] > -4000;
    	}).map(function(dynasty) { 
    		console.log(dynasty);
    		var start = dynasty.period[0];
    		if (start>0 && start<100) {
    			start += 100; //TODO for display tricky, do not know why.
    		};
    		return {
    			'start': new Date(start, 1, 1), 
    			'content': dynasty.name + " ("+ new String(dynasty.period[0]).replace("-", "－")
    				+ ", " + (dynasty.period[1]-dynasty.period[0]) +")"
    		}
    	});
    	// specify options
	    var options = {
	        'width':  '100%',
	        'height': '500px',
	        'editable': true,   // enable dragging and editing events
	        'style': 'box'
	    };

	    // Instantiate our timeline object.
	    var timeline = new links.Timeline(document.getElementById('dynastyTimeline'), options);

	    function onRangeChanged(properties) {
	        document.getElementById('info').innerHTML += 'rangechanged ' +
	                properties.start + ' - ' + properties.end + '<br>';
	    }

	    // attach an event listener using the links events handler
	    links.events.addListener(timeline, 'rangechanged', onRangeChanged);

	    // Draw our timeline with the created data and options
	    timeline.draw(data);
	    });  
	} 
);

