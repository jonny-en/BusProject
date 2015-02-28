
$(document).ready(function() {

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


});