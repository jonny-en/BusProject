$(document).ready(function(){
  
  //startziel
  $("#add").click(function(){
    $("#startziel").hide();
    $("#add_location").show();
  });
  
  $("#editbtn").click(function(){
    $("#startziel").hide();
    $("#edit_location").show();
  });
  
  $("#settingsbtn1").click(function(){
    $("#startziel").hide();
    $("#settings").show();
  });
  
  $("#tabMap1").click(function(){
    $("#startziel").hide();
    $("#map").show();
  });
  
  $("#tabDate1").click(function(){
    $("#startziel").hide();
    $("#termin").show();
  });
  
  //add_location
  $("#backbtn1").click(function(){
    $("#add_location").hide();
    $("#startziel").show();
  });
  
  //add_location -> tabs
  $("#locationbtn").click(function(){
    if($("#location").hasClass("notselected")){
     $("#location").removeClass("notselected").addClass("selected");
     $("#manual").removeClass("selected").addClass("notselected");
     $("#manualview").css("z-index","-1");
     $("#locationview").css("z-index","1");
    }
  });
  
  $("#manualbtn").click(function(){
    if($("#manual").hasClass("notselected")){
     $("#manual").removeClass("notselected").addClass("selected");
     $("#location").removeClass("selected").addClass("notselected");
     $("#locationview").css("z-index","-1");
     $("#manualview").css("z-index","1");
    }
  });
  
  $
  
  //edit_location
  $("#backbtn2").click(function(){
    $("#edit_location").hide();
    $("#startziel").show();
  });
  
  $("#busstops a[href]").click(function(){
    $(this).parent().remove();
  });
  
  //settings
  $("#backbtn3").click(function(){
    $("#settings").hide();
    $("#startziel").show();
  });
  
  //map
  $("#tabStart3").click(function(){
    $("#map").hide();
    $("#startziel").show();
  });
  
  $("#tabDate3").click(function(){
    $("#map").hide();
    $("#termin").show();
  });
  
  $("#settingsbtn2").click(function(){
    $("#map").hide();
    $("#settings").show();
  });
  
  
  
  //termin
  $("#tabStart2").click(function(){
    $("#termin").hide();
    $("#startziel").show();
  });
  
  $("#tabMap2").click(function(){
    $("#termin").hide();
    $("#map").show();
  });
 
  
});