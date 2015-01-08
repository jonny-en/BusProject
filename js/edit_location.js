$(document).ready(function(){
  $("#busstops a[href]").click(function(){
    $(this).parent().remove();
  });
});