//Slideshow
const items = document.querySelectorAll('.item'),
    controls = document.querySelectorAll('.control'),
    headerItems = document.querySelectorAll('.item-header'),
    descriptionItems = document.querySelectorAll('.item-description'),
    activeDelay = .76,
    interval = 10000;

let current = 0;

const slider = {
    init: () => {
        controls.forEach(control => control.addEventListener('click', (e) => { slider.clickedControl(e) }));
        controls[current].classList.add('active');
        items[current].classList.add('active');
    },
    nextSlide: () => { // Increment current slide and add active class
        slider.reset();
        if (current === items.length - 1) current = -1; // Check if current slide is last in array
        current++;
        controls[current].classList.add('active');
        items[current].classList.add('active');
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
    },
    clickedControl: (e) => { // Add active class to clicked control and corresponding slide
        slider.reset();
        clearInterval(intervalF);

        const control = e.target,
        dataIndex = Number(control.dataset.index);

        control.classList.add('active');
        items.forEach((item, index) => { 
            if (index === dataIndex) { // Add active class to corresponding slide
                item.classList.add('active');
            }
        });
        current = dataIndex; // Update current slide
        slider.transitionDelay(headerItems);
        slider.transitionDelay(descriptionItems);
        intervalF = setInterval(slider.nextSlide, interval);
    },
    reset: () => { // Remove active classes
        items.forEach(item => item.classList.remove('active'));
        controls.forEach(control => control.classList.remove('active'));
    },
    transitionDelay: (items) => { // Set incrementing css transition-delay for .item-header & .item-description, .vertical-part, b elements
        let seconds;
    
        items.forEach(item => {
            const children = item.childNodes; // .vertical-part(s)
            let count = 1,
                delay;

            item.classList.value === 'item-header' ? seconds = .015 : seconds = .007;

            children.forEach(child => { // iterate through .vertical-part(s) and style b element
                if (child.classList) {
                    item.parentNode.classList.contains('active') ? delay = count * seconds + activeDelay : delay = count * seconds;
                    child.firstElementChild.style.transitionDelay = `${delay}s`; // b element
                    count++;
                }
            })
        })
    },
}

let intervalF = setInterval(slider.nextSlide, interval);
slider.init();

// slide-in triggers
// it's a mess, I need to put this all into one function instead of a million calls.

function trig_about() {
    if (document.getElementById('about').classList.contains("in-progress") == false) {
        document.getElementById('about').classList.add("in-progress");
    }
}

function trig_skills() {
    if (document.getElementById('skills').classList.contains("in-progress") == false) {
        document.getElementById('skills').classList.add("in-progress");
    }
}

function trig_skills_bars() {
    if (document.getElementById('text1').classList.contains("animate-progress-text") == false) {
        document.getElementById('text1').classList.add("animate-progress-text");
    }
    if (document.getElementById('text2').classList.contains("animate-progress-text") == false) {
        document.getElementById('text2').classList.add("animate-progress-text");
    }
    if (document.getElementById('text3').classList.contains("animate-progress-text") == false) {
        document.getElementById('text3').classList.add("animate-progress-text");
    }
    if (document.getElementById('text4').classList.contains("animate-progress-text") == false) {
        document.getElementById('text4').classList.add("animate-progress-text");
    }
    if (document.getElementById('text5').classList.contains("animate-progress-text") == false) {
        document.getElementById('text5').classList.add("animate-progress-text");
    }
    if (document.getElementById('text6').classList.contains("animate-progress-text") == false) {
        document.getElementById('text6').classList.add("animate-progress-text");
    }

    if (document.getElementById('span1').classList.contains("animate-progress-span") == false) {
        document.getElementById('span1').classList.add("animate-progress-span");
    }
    if (document.getElementById('span2').classList.contains("animate-progress-span") == false) {
        document.getElementById('span2').classList.add("animate-progress-span");
    }
    if (document.getElementById('span3').classList.contains("animate-progress-span") == false) {
        document.getElementById('span3').classList.add("animate-progress-span");
    }
    if (document.getElementById('span4').classList.contains("animate-progress-span") == false) {
        document.getElementById('span4').classList.add("animate-progress-span");
    }
    if (document.getElementById('span5').classList.contains("animate-progress-span") == false) {
        document.getElementById('span5').classList.add("animate-progress-span");
    }
    if (document.getElementById('span6').classList.contains("animate-progress-span") == false) {
        document.getElementById('span6').classList.add("animate-progress-span");
    }

    if (document.getElementById('line1').classList.contains("animate-progress-line") == false) {
        document.getElementById('line1').classList.add("animate-progress-line");
    }
    if (document.getElementById('line2').classList.contains("animate-progress-line") == false) {
        document.getElementById('line2').classList.add("animate-progress-line");
    }
    if (document.getElementById('line3').classList.contains("animate-progress-line") == false) {
        document.getElementById('line3').classList.add("animate-progress-line");
    }
    if (document.getElementById('line4').classList.contains("animate-progress-line") == false) {
        document.getElementById('line4').classList.add("animate-progress-line");
    }
    if (document.getElementById('line5').classList.contains("animate-progress-line") == false) {
        document.getElementById('line5').classList.add("animate-progress-line");
    }
    if (document.getElementById('line6').classList.contains("animate-progress-line") == false) {
        document.getElementById('line6').classList.add("animate-progress-line");
    }
}

function trig_experience() {
    if (document.getElementById('experience').classList.contains("in-progress") == false) {
        document.getElementById('experience').classList.add("in-progress");
    }
}

function trig_experience_1() {
    if (document.getElementById('timeline1').classList.contains("in-progress") == false) {
        document.getElementById('timeline1').classList.add("in-progress");
    }
    if (document.getElementById('dot1').classList.contains("opacity-1") == false) {
        document.getElementById('dot1').classList.add("opacity-1");
    }
}

function trig_experience_2() {
    if (document.getElementById('timeline2').classList.contains("in-progress") == false) {
        document.getElementById('timeline2').classList.add("in-progress");
    }
    if (document.getElementById('dot2').classList.contains("opacity-1") == false) {
        document.getElementById('dot2').classList.add("opacity-1");
    }
}

function trig_experience_3() {
    if (document.getElementById('timeline3').classList.contains("in-progress") == false) {
        document.getElementById('timeline3').classList.add("in-progress");
    }
    if (document.getElementById('dot3').classList.contains("opacity-1") == false) {
        document.getElementById('dot3').classList.add("opacity-1");
    }
}

function trig_experience_4() {
    if (document.getElementById('timeline4').classList.contains("in-progress") == false) {
        document.getElementById('timeline4').classList.add("in-progress");
    }
    if (document.getElementById('dot4').classList.contains("opacity-1") == false) {
        document.getElementById('dot4').classList.add("opacity-1");
    }
}

function trig_experience_5() {
    if (document.getElementById('timeline5').classList.contains("in-progress") == false) {
        document.getElementById('timeline5').classList.add("in-progress");
    }
    if (document.getElementById('dot5').classList.contains("opacity-1") == false) {
        document.getElementById('dot5').classList.add("opacity-1");
    }
}

function trig_experience_6() {
    if (document.getElementById('timeline6').classList.contains("in-progress") == false) {
        document.getElementById('timeline6').classList.add("in-progress");
    }
    if (document.getElementById('dot6').classList.contains("opacity-1") == false) {
        document.getElementById('dot6').classList.add("opacity-1");
    }
}

function trig_tech() {
    if (document.getElementById('container-full-tech').classList.contains("in-progress") == false) {
        document.getElementById('container-full-tech').classList.add("in-progress");
    }
}

function trig_education() {
    if (document.getElementById('education').classList.contains("in-progress") == false) {
        document.getElementById('education').classList.add("in-progress");
    }
}

function trig_education_1() {
    if (document.getElementById('edu-timeline1').classList.contains("in-progress") == false) {
        document.getElementById('edu-timeline1').classList.add("in-progress");
    }
    if (document.getElementById('edu-dot1').classList.contains("opacity-1") == false) {
        document.getElementById('edu-dot1').classList.add("opacity-1");
    }
}

function trig_education_2() {
    if (document.getElementById('edu-timeline2').classList.contains("in-progress") == false) {
        document.getElementById('edu-timeline2').classList.add("in-progress");
    }
    if (document.getElementById('edu-dot2').classList.contains("opacity-1") == false) {
        document.getElementById('edu-dot2').classList.add("opacity-1");
    }
}

function trig_certifications() {
    if (document.getElementById('certifications').classList.contains("in-progress") == false) {
        document.getElementById('certifications').classList.add("in-progress");
    }
}

function trig_certifications_1() {
    if (document.getElementById('cert1').classList.contains("in-progress") == false) {
        document.getElementById('cert1').classList.add("in-progress");
    }
}

function trig_certifications_2() {
    if (document.getElementById('cert2').classList.contains("in-progress") == false) {
        document.getElementById('cert2').classList.add("in-progress");
    }
}

function trig_awards() {
    if (document.getElementById('awards').classList.contains("in-progress") == false) {
        document.getElementById('awards').classList.add("in-progress");
    }
}

function trig_volunteering() {
    if (document.getElementById('volunteering-full').classList.contains("in-progress") == false) {
        document.getElementById('volunteering-full').classList.add("in-progress");
    }
}


// animations for elements easing in. still needs to be wrapped in a single recursive function instead of a dozen calls
function callbackFunc(entries, observer)
{
    entries.forEach(entry => {
        if (entry.isIntersecting && entry.target == document.getElementById('trig_about')) {
            trig_about();
        } 
        if (entry.isIntersecting && entry.target == document.getElementById('trig_skills')) {
            trig_about();
            trig_skills();
        } 
        if (entry.isIntersecting && entry.target == document.getElementById('trig_skills_bars')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
        } 
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
        } 
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_1')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_2')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
        } 
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_3')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_4')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_5')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_experience_6')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_tech')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_education')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_education_1')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_education_2')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_certifications')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
            trig_certifications();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_certifications_1')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
            trig_certifications();
            trig_certifications_1();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_certifications_2')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
            trig_awards();
            trig_volunteering();
            trig_certifications();
            trig_certifications_1();
            trig_certifications_2();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_awards')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
            trig_awards();
            trig_volunteering();
            trig_certifications();
            trig_certifications_1();
            trig_certifications_2();
            trig_awards();
        }
        if (entry.isIntersecting && entry.target == document.getElementById('trig_volunteering')) {
            trig_about();
            trig_skills();
            trig_skills_bars();
            trig_experience();
            trig_experience_1();
            trig_experience_2();
            trig_experience_3();
            trig_experience_4();
            trig_experience_5();
            trig_experience_6();
            trig_tech();
            trig_education();
            trig_education_1();
            trig_education_2();
            trig_awards();
            trig_volunteering();
            trig_certifications();
            trig_certifications_1();
            trig_certifications_2();
            trig_awards();
            trig_volunteering();
        }
    });
}

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
};

let observer = new IntersectionObserver(callbackFunc, options);

observer.observe(document.getElementById('trig_about'));
observer.observe(document.getElementById('trig_skills'));
observer.observe(document.getElementById('trig_skills_bars'));
observer.observe(document.getElementById('trig_experience'));
observer.observe(document.getElementById('trig_experience_1'));
observer.observe(document.getElementById('trig_experience_2'));
observer.observe(document.getElementById('trig_experience_3'));
observer.observe(document.getElementById('trig_experience_4'));
observer.observe(document.getElementById('trig_experience_5'));
observer.observe(document.getElementById('trig_experience_6'));
observer.observe(document.getElementById('trig_tech'));
observer.observe(document.getElementById('trig_education'));
observer.observe(document.getElementById('trig_education_1'));
observer.observe(document.getElementById('trig_education_2'));
observer.observe(document.getElementById('trig_awards'));
observer.observe(document.getElementById('trig_volunteering'));
observer.observe(document.getElementById('trig_certifications'));
observer.observe(document.getElementById('trig_certifications_1'));
observer.observe(document.getElementById('trig_certifications_2'));