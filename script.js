let selectedBox;

$(document).ready(function() {
    $('.box').click(function() {
        selectedBox = $(this);
        $('#myModal').show();
    });

    $('#closeModal').click(function() {
        $('#myModal').hide();
    });

    $('#applyColor').click(function() {
        var colorInput = $('#colorInput').val();
        if (/^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test(colorInput)) {
            selectedBox.css('background-color', colorInput);
            $('#myModal').hide();
        } else {
            $('#errorModal').show();
        }
    });

    $('#closeErrorModal').click(function() {
        $('#errorModal').hide();
    });
});
