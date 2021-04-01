$(document).ready(function(){
	$(".switch input").on("change", function(e) {
  	const isOn = e.currentTarget.checked;
    
      //hiding the h3 element "Show beaches"
    if (isOn) {
    	$(".hideme").hide();
        $(".content").hide();
        $(".content2").show();
        
  
    } else {
        $(".content2").hide();
    	$(".hideme").show();
        $(".content").show(); 
    }
  });
  $(".content2").hide();
  //do not display beach content when not toggled.
});