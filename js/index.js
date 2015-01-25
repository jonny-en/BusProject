$(document).ready(function() {

    $("#route_view").load("../route.html");
    $("#map_view").load("../map.html");


    $("#panel1").click({
        param: 'route_view'
    }, showPage);

    $("#panel1").click(function() {
        if (!($("#panel1").attr('aria-selected') == true)) {
            $("#panel1").attr('aria-selected', true);
            $("#panel2").attr('aria-selected', false);
            $("#panel3").attr('aria-selected', false);


        }
    });

    $("#panel2").click({
        param: 'map_view'
    }, showPage);
});

$("#panel2").click(function() {
    if (!($("#panel2").attr('aria-selected') == true)) {
        $("#panel2").attr('aria-selected', true);
        $("#panel1").attr('aria-selected', false);
        $("#panel3").attr('aria-selected', false);
    }
});


  $("#panel3").click({
        param: 'date_view'
    }, showPage);

    $("#panel3").click(function() {
        if (!($("#panel3").attr('aria-selected') == true)) {
            $("#panel3").attr('aria-selected', true);
            $("#panel2").attr('aria-selected', false);
            $("#panel1").attr('aria-selected', false);


        }
    });


function showPage(event) {
    $('.view').each(function(index) {
        if ($(this).attr('id') == event.data.param) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
};