
			var bodyWidth=$(window).width();
			$("#fullbody").width(bodyWidth+"px");
			$("#header").width(bodyWidth+"px");
			
            $( "#run" ).button();
			
			$(".toggle").click(function() {
				
			});
			
			var bodyHeight=$(window).height();
		 var headerHeight=$("#header").height();
		 var codeContainer=bodyHeight-headerHeight;
		 $(".codeContainer").height(codeContainer+"px");
		 
		 $(".toggle").hover(function() {
			
			$(this).toggleClass("notselected"); 
		
		 });
		 
		 $(".toggle").click(function() {
			
			$(this).toggleClass("selected"); 
			var activeDiv=$(this).html();
		 	$("#"+activeDiv+"Container").toggle();
		
			var divViewed=$(".codeContainer").filter(function() {
                return($(this).css("display")!="none");
            }).length;
			var width=100/divViewed;
			$(".codeContainer").width(width+"%");
		 });
		 
		 $("#run").click(function() {
			$("#frame").contents().find("html").html('<style>'+$("#cssCode").val()+'</style>'+$("#htmlCode").val());
			
			document.getElementById("frame").contentWindow.eval($("#jsCode").val());
		 });