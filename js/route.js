
    <!-- Script for ColorChange when the user chooses a fav. NOTE: 'clicked' Class can be used to scan the users choice for future calculation -->
    $("#fav-left button").click(function() {
        var clicked = false;
        $("#fav-left button").each(function() {
            if ($(this).hasClass('clicked')) {
                $(this).removeClass('clicked');
            }
        });

        $(this).toggleClass('clicked');

    });

    $("#fav-right button").click(function() {
        var clicked = false;
        $("#fav-right button").each(function() {
            if ($(this).hasClass('clicked')) {
                $(this).removeClass('clicked');
            }
        });

        $(this).toggleClass('clicked');

    });

   
    <!-- END Script for ColorChange -->
        
     $("#add").click(function() {
  window.location = "add_location.html"; 
  return false;
});
