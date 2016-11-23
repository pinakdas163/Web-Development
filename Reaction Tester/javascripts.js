	
		var createdTime, clickedTime, reactTime;
		var result=[];
		var sum=0;
		function getRandomColor() {
			var myarray= '0123456789ABCDEF'.split('');
			var color='#';
			for(var i=0;i<6;i++)
			{
				color+=myarray[Math.round(Math.random()*15)];
			}
			return color;
		}
	
		function box()
		{
			var x=Math.random();
			x=1000*x;
			var top, left;
			top=Math.random()*380;
			left=Math.random()*1150;
			setTimeout(function() {
				if(Math.random()>0.5)
				{
					document.getElementById("kuchv").style.borderRadius="75px";
				}
				else
				{
					document.getElementById("kuchv").style.borderRadius="0";
				}
				document.getElementById("kuchv").style.backgroundColor=getRandomColor();
				document.getElementById("kuchv").style.top=top+"px";
				document.getElementById("kuchv").style.left=left+"px";
				document.getElementById("kuchv").style.display="block";
				createdTime=Date.now();
				}, x);
		}
		
		box();
		
		document.getElementById("kuchv").onclick=function()
		{   //document.getElementById("kuchv")
			clickedTime=Date.now();
			reactTime=(clickedTime-createdTime)/1000;
			
			document.getElementById("kuchv").style.display="none";
			document.getElementById("time").innerHTML=reactTime;
			result.push(reactTime);
			box();
		}
		document.getElementById("avg").onclick=function()
		{
			for(var i=0;i<result.length;i++)
			{
				sum+=result[i];
			}
			sum=sum/result.length;
			document.getElementById("result").innerHTML=sum+"s";
			document.getElementById("kuchv").style.display="none";
		}
		
		document.getElementById("reset").onclick=function()
		{
			while(result.length > 0) {
    			result.pop();
			}
			sum=0;
			document.getElementById("result").innerHTML=0+"s";
			reactTime=0;
			document.getElementById("time").innerHTML="Not yet attempted";
			box();
		}
		// JavaScript Document