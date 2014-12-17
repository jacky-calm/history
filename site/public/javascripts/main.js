$(document).ready( 
	function() {
		bindLinks('country'); 
		bindLinks('people'); 
		showDynasties('country', 'fr');
	}
);

function getUrl(catelog, item) {
	return "/dynasties?catelog="+catelog+"&item="+item;
}

function bindLinks(catelog) {
	var linkPath = "#" + catelog + "Links > a";
	$(linkPath).each(function(i, countryLink) {
			$(countryLink).click(function() { 
				showDynasties(catelog, this.name); 
			});
	});
}

function showDynasties(catelog, item) {
	$.getJSON(getUrl(catelog, item), function(dynastiesJson) {
    	var data = mapData(dynastiesJson, item);
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

function mapData(dynastiesJson, item) {
	var data = dynastiesJson.filter(function(dynasty) {
    		return dynasty.period[0] > -3000;
    	}).map(function(dynasty) { 
    		var start = dynasty.period[0];
    		if (start>0 && start<100) {
    			start += 100; //TODO for display tricky, do not know why.
    		};

    		var content = dynasty.name;
    		if (item === 'cn') {
    			content += " ("+ new String(dynasty.period[0]).replace("-", "－")
    				+ ", " + (dynasty.period[1]-dynasty.period[0]) +")";
    		} else if (item === 'en') {
    			content += " ("+ dynasty.period[0]+")";
    		};

    		return {
    			'start': new Date(start, 1, 1), 
    			'content': content
    		}
    	});
  return data;
}

