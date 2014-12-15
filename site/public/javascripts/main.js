$(document).ready( 
	function drawTimeline() {
		$( "#cnTimeline" ).click(function() {
			showTimeline('cn');
		});
		$( "#enTimeline" ).click(function() {
			showTimeline('en');
		});
		$( "#usTimeline" ).click(function() {
			showTimeline('us');
		});
		$( "#deTimeline" ).click(function() {
			showTimeline('de');
		});

		showTimeline('cn');
	}
);

function showTimeline(country) {
	$.getJSON("/dynasties?country="+country, function(dynastiesJson) {
    	var data = mapData(dynastiesJson, country);
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
	        console.log('rangechanged ' +properties.start + ' - ' + properties.end);
	    }

	    // attach an event listener using the links events handler
	    links.events.addListener(timeline, 'rangechanged', onRangeChanged);

	    // Draw our timeline with the created data and options
	    timeline.draw(data);
	    });   
}

function mapData(dynastiesJson, country) {
	var data = dynastiesJson.filter(function(dynasty) {
    		return dynasty.period[0] > -3000;
    	}).map(function(dynasty) { 
    		var start = dynasty.period[0];
    		if (start>0 && start<100) {
    			start += 100; //TODO for display tricky, do not know why.
    		};

    		var content = dynasty.name;
    		if (country === 'cn') {
    			content += " ("+ new String(dynasty.period[0]).replace("-", "－")
    				+ ", " + (dynasty.period[1]-dynasty.period[0]) +")";
    		} else if (country === 'en') {
    			content += " ("+ dynasty.period[0]+")";
    		};

    		return {
    			'start': new Date(start, 1, 1), 
    			'content': content
    		}
    	});
  return data;
}

