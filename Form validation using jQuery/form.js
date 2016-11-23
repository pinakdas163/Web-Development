// JavaScript Document
	$.ajax({
		url:"test.html"
	}).done(function(data) {
		//$("h1").html(data);
		$("h1").append(" and"+data);
	});
	
	$(document).ready(function() {
   $("#formValidation").each(function() { this.reset() });
});
	
	$("#formValidation").submit(function(event) {
		event.preventDefault();
		var errorMsg="";
		function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};

	if(!isValidEmailAddress($("#email").val()))
	{
		$("#email").css("border-color","red");
		errorMsg="<br />*Email address invalid";
	}
	else{
		$("#email").css("border-color","green");
	}
	
 function validatePhone(phoneNumber){
   var phoneNumberPattern = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;  
   return phoneNumberPattern.test(phoneNumber); 
}
	if(!validatePhone($("#phnnumber").val()))
	{
		$("#phnnumber").css("border-color","red");
		errorMsg=errorMsg+"<br />*Phone number is incorrect";
	}
	else{
		$("#phnnumber").css("border-color","green");
	}
	
	
	if($("#pass").val()!=$("#repass").val())
	{
		errorMsg=errorMsg+"<br />*Passwords does not match";
	}
	if(errorMsg=="")
	{
		$("#formValidation").each(function(index, element) {
            this.reset();
        });
		$("#error").css("display", "none");
		alert("form successfully submitted");
	}
	else{
		$("#error").html(errorMsg);	
	}
});