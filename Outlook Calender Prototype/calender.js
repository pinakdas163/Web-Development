/* Sample test data */
var testData = [{start:  60, end: 120},{start: 450, end: 540}, {start: 560, end: 620}, {start: 610, end: 670}, {start: 640, end: 700} ];
layOutDay(testData);

function addMinutes(time, minsToAdd) {
  function z(n){
	  
    return (n<10? '0':'') + n;
  }
  var bits = time.split(':');
  var mins = bits[0]*60 + (+bits[1]) + (+minsToAdd);

  return z(mins%(12*60)/60 | 0) + ':' + z(mins%60);  
}  


 
function layOutDay(events) {

	for(var i=0;i<events.length;i++)
	{
		var startTime=addMinutes('09:00', events[0].start);
		var endTime=addMinutes('09:00', events[0].end);
		//alert(endTime);
		var topStart=events[i].start;
		var diffTime=events[i].end-events[i].start;
			var new_element =$('<div class="event" ></div>');
			$(".events-container").append(new_element);
			$(new_element).html("<a>Example Heading<span>Example paragraph</span</a>");
			$(new_element).css("top",topStart+"px");
			$(new_element).css("float","left");
			$(new_element).css("height",diffTime+"px");
				
			
    }

		var vol=(100/2);var round=0;
		$('.event').overlaps().each(function(){
        $(this).css('left',((vol-1)*round)+'%');
        $(this).css('width',(vol-2)+'%')
        round=round+1;
		if(round==2)
		{
			round=0;
		}
    });
    
}