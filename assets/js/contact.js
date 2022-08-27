(function ($) {
    "use strict";
 
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;
        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }
        if (check == true) {
            // prevent the form submit from refreshing the page
            event.preventDefault();

            const {name, email, phone, message} = event.target;
            const endpoint = "https://cw6u5cl22b.execute-api.us-east-2.amazonaws.com/default/SES-email-sending-func";
            //encodes message input from html form into stringified json for the web api request
            const requestOptions = {
                method: "POST", 
                body: JSON.stringify(
                    {
                        senderName: name.value,
                        senderEmail: email.value,
                        senderPhone: phone.value,
                        message: message.value
                    }
                )
            };
            fetch(endpoint, requestOptions).then((response) => {
                if (!response.ok) throw new Error("Error in fetch");
                    return response.json();
                })
                .then((response) => {
                    //clears form and changes submit button to sent
                    document.getElementById("submit").value = "Sent!"
                    document.getElementById("name").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("phone").value = ""
                    document.getElementById("message").value = ""
                    document.getElementById("submit").classList.add("disabled")
                })
                .catch((error) => {
                    alert("An unknown error occured. I'd love to debug it though -- send me an email with what you were doing!")
            });
        }
        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);

function trig1() {
    if (document.getElementById('contact').classList.contains("in-progress") == false) {
      document.getElementById('contact').classList.add("in-progress");
    }
  }

// animations for elements easing in:
function callbackFunc(entries, observer)
{
  entries.forEach(entry => {
    if (entry.isIntersecting && entry.target == document.getElementById('trig1')) {
      trig1();
    } 
});
}

let options = {
  root: null,
  rootMargin: '0px',
  threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('trig1'));