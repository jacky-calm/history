$(document).ready(
	function drawVisualization() {
    // Create a JSON data table
    var data = [
        {
            'start': new Date(2010,7,23),
            'content': 'Conversation<br><img src="/javascripts/timeline-290/img/comments-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2010,7,23,23,0,0),
            'content': 'Mail from boss<br><img src="/javascripts/timeline-290/img/mail-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2010,7,24,16,0,0),
            'content': 'Report'
        },
        {
            'start': new Date(2010,7,26),
            'end': new Date(2010,8,2),
            'content': 'Traject A'
        },
        {
            'start': new Date(2010,7,28),
            'content': 'Memo<br><img src="/javascripts/timeline-290/img/notes-edit-icon.png" style="width:48px; height:48px;">'
        },
        {
            'start': new Date(2010,7,29),
            'content': 'Phone call<br><img src="/javascripts/timeline-290/img/Hardware-Mobile-Phone-icon.png" style="width:32px; height:32px;">'
        },
        {
            'start': new Date(2010,7,31),
            'end': new Date(2010,8,3),
            'content': 'Traject B'
        },
        {
            'start': new Date(2010,8,4,12,0,0),
            'content': 'Report<br><img src="/javascripts/timeline-290/img/attachment-icon.png" style="width:32px; height:32px;">'
        }
    ];

    // specify options
    var options = {
        'width':  '100%',
        'height': '300px',
        'editable': true,   // enable dragging and editing events
        'style': 'box'
    };

    // Instantiate our timeline object.
    var timeline = new links.Timeline(document.getElementById('mytimeline'), options);

    function onRangeChanged(properties) {
        document.getElementById('info').innerHTML += 'rangechanged ' +
                properties.start + ' - ' + properties.end + '<br>';
    }

    // attach an event listener using the links events handler
    links.events.addListener(timeline, 'rangechanged', onRangeChanged);

    // Draw our timeline with the created data and options
    timeline.draw(data);
	}

);

