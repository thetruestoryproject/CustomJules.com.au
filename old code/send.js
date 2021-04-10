function setup()
{
    $.ajax( {

        url : "send_mail.php",
        type: "POST",
        success: function(raw_data) {
            console.log(raw_data);
        },
    });
}



$(document).ready(setup);