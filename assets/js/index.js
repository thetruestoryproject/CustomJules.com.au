
/* 
 * Function to switch face on browser resize
 */
$.fn.resizeFace = function() {

    $(window).resize(function() {

        // Show large face
        if ($(window).width() >= 1140) {

            $('#creative-img').css({
                'opacity': '1'
            });
            $('#professional-img').css({
                'opacity': '1'
            });
            $('#professional-bg').css({
                'opacity': '1'
            });
            $('#creative-bg').css({
                'opacity': '1'
            });
            $('#creative').css({
                'opacity': '1'
            });
            $('#professional').css({
                'opacity': '1'
            });

        } else { // Show smaller face image

            $('#face-img').css({
                'opacity': '1'
            });
            $('#creative').css({
                'opacity': '1'
            });
            $('#professional').css({
                'opacity': '1'
            });
        }

    });
};

/* 
 * Function to animate home page
 */
$.fn.animateHome = function() {

    // only animate for large desktop browsers
    if ($(window).width() >= 1140) {

        $('#content').animate({
            'opacity': '1'
        }, 500, 'easeOutExpo');
        $('#creative-img').stop().animate({
            'opacity': '1',
            'top': '0'
        }, 1300, 'easeOutExpo');
        $('#professional-img').stop().animate({
            'opacity': '1',
            'top': '0'
        }, 1300, 'easeOutExpo');
        $('#professional-bg').css({
            'top': '650px'
        }).stop().animate({
            'opacity': '1',
            'top': '30vh'
        }, 1500, 'easeOutExpo');
        $('#creative-bg').css({
            'top': '650px'
        }).stop().animate({
            'opacity': '1',
            'top': '30vh'
        }, 1500, 'easeOutExpo');
        $('#creative').css({
            'top': '550px'
        }).stop().animate({
            'opacity': '1',
            'top': '100px'
        }, 1500, 'easeOutExpo');
        $('#professional').css({
            'top': '550px'
        }).stop().animate({
            'opacity': '1',
            'top': '100px'
        }, 1500, 'easeOutExpo');


        $('#creative').animate({
            'opacity': '1'
        }, 700, 'linear');
        $('#professional').animate({
            'opacity': '1'
        }, 700, 'linear', function() {
            animateFace();
        });

    } else {

        $('#content').animate({
            'opacity': '1'
        }, 500, 'easeOutExpo');
        $('#face-img').animate({
            'opacity': '1'
        }, 2000, 'easeOutExpo');
        $('#creative').delay(10).animate({
            'opacity': '1'
        }, 700, 'linear');
        $('#professional').delay(10).animate({
            'opacity': '1'
        }, 700, 'linear', function() {
            animateContent();
        });

    }
};


/* 
 * Function to animate face
 */
function animateFace() {

    var creativeImg = $('#creative-img');
    var professionalImg = $('#professional-img');
    var creativeDesc = $('#creative-desc');
    var professionalDesc = $('#professional-desc');
    var creativeBg = $('#professional-bg');
    var professionalBg = $('#creative-bg');
    var face = $('#face');
    var section = $('#body');

    var mouseX = 100;
    var relMouseX = 601;
    var xp = 601;
    frameRate = 30;
    timeInterval = Math.round(1000 / frameRate);

    // First animate the bottom content onto the page
    animateContent();

    section.mouseover(function(e) {

        // Get mouse position
        section.mousemove(function(e) {

            // raw mouse position
            mouseX = e.pageX;

            // mouse position relative to face div
            relMouseX = mouseX - face.offset().left - 100;

        });

        // Animate the face based on mouse movement
        loop = setInterval(function() {

            xp += (relMouseX - xp) / 12;

            creativeImg.css({
                width: 601 + (601 - xp) * 0.5,
                left: 10 + (601 - xp) * 0.1
            });
            professionalImg.css({
                width: 601 + (xp - 601) * 0.5,
                right: 10 - (601 - xp) * 0.1
            });

            creativeBg.css({
                left: 0 + (601 - xp) * 0.05,
                opacity: ((1040 - xp) / 601)
            });

            professionalBg.css({
                right: 0 + (xp - 601) * 0.05,
                opacity: (xp / 601)
            });

            creativeDesc.css({
                opacity: ((1040 - xp) / 601)
            });
            professionalDesc.css({
                opacity: (xp / 601)
            });

        }, timeInterval);

    }).mouseleave(function(e) {

    });
};

new TypeIt("#typewriter-desktop", {
    speed: 70,
    waitUntilVisible: true,
    startDelay: 2500
  })
    .type("Hi!", {delay: 800})
    .type(" My name's Jules.")
    .go();

new TypeIt("#typewriter-mobile", {
    speed: 70,
    waitUntilVisible: false,
    startDelay: 2500
    })
    .type("Hi!", {delay: 800})
    .type(" I'm Jules.")
    .go();

function animate_buttons_mobile() {
    if (document.getElementById("professional-btn-mobile").classList.contains("in-progress") == false) {
        document.getElementById("professional-btn-mobile").classList.add("in-progress");
    }
    if (document.getElementById("creative-btn-mobile").classList.contains("in-progress") == false) {
        document.getElementById("creative-btn-mobile").classList.add("in-progress");
    }
}

//window.onload = animate_buttons_mobile();
//now using onload="animate_buttons_mobile()" in the <body> tag since it loads the buttons only after the background image is loaded.