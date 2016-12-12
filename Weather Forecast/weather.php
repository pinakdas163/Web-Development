<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Weather News</title>
<link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<style>
	html, body {
		height:100%;
		
	}
	.container {
		height:100%;
		width:100%;
		background-size:cover;
		background-position:center;
		background-image:url(nature-1570387-1279x852.jpg);
	}
	.weather {
		
		background-position:center;
		margin-top:200px;
		color:#FFF;
		text-align:center;
	}
	
	.alertBox {
		margin-top:10px;
		padding:3px 0 3px 5px;
		border-radius:3px;
		display:none;
	}
	
</style>
</head>

<body>

	<div class="container">
	   <div class="row">
		<div class="col-md-6 col-md-offset-3">
		    <div class="weather container-fluid">
                	<div class="row">
                    	  <div class="col-md-12">
                        	<h1> Know your forecast!</h1>
                            <p class="lead"> Enter your city to get a weather report</p>
                            <form>
                            <div class="form-group">
                            	<input id="myCity" class="form-control" type="text" placeholder="eg: London, Paris, Mumbai" />
                            </div>
                            <button id="myWeather" class="btn btn-success" name"submit">Search </button>
                            </form>
                          </div>
                          
                      </div>
                  
                 </div>
                           <div class="alert-success alertBox">
                          	<p id="report" class="lead">Something will come here</p>
                          </div>    
            </div>

        </div>
    </div>

 <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery.min.js"><\/script>')</script>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script>
	$("#myWeather").click(function(event) {
	    event.preventDefault();
	      if($("#myCity").val()=="")
	        {
	          alert("something");
	        }
	        else {
	            $.get("scraper.php?city="+$("#myCity").val(), function(data) {
	    	    	$(".alertBox").css("display","block");
	    	    	$("#report").html(data);
	    	    });
	    	}

	});
</script>
</body>
</html>