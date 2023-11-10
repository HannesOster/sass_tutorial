// script.js

var selectedBox;

$(document).ready(function() {
    $('.first-box').click(function() {
        selectedBox = $(this);
        $('#myModal').show();
    });

    $('#closeModal').click(function() {
        $('#myModal').hide();
    });

    $('#applyColor').click(function() {
        var color = $('#colorInput').val();
        selectedBox.css('background-color', color);
        $('#myModal').hide();
    });
});
