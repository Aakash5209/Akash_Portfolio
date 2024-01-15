
    var type = new Typed(".auto", {
        strings: ['Full Stack Developer' , 'Coder' , 'MERN Stack Developer','Backend Developer', "Frontend Developer"],
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 500
    }) 

    // Menu Icon button for responsive

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.nav-bar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
};

function makeCall() {
    // Replace 'your_phone_number' with your actual phone number, including country code
    window.location.href = 'tel:+917668958795';
  }

  function makeEmail() {
    // Replace 'your_phone_number' with your actual phone number, including country code
    window.location.href = 'mailto:akash.verma.5209@gmail.com';
  }
  function copyPhoneNumber() {
    // Create a dummy input element to copy the text
    const dummyInput = document.createElement('input');
    dummyInput.value = '+917668958795';
    document.body.appendChild(dummyInput);

    // Select and copy the text
    dummyInput.select();
    document.execCommand('copy');

    // Remove the dummy input
    document.body.removeChild(dummyInput);

    // Alert the user that the number is copied (you can customize this part)
    alert('Phone number copied to clipboard : 7668958795');
  }
  function copyEmail() {
    // Create a dummy input element to copy the text
    const dummyInput = document.createElement('input');
    dummyInput.value = 'akash.verma.5209@gmail.com';
    document.body.appendChild(dummyInput);

    // Select and copy the text
    dummyInput.select();
    document.execCommand('copy');

    // Remove the dummy input
    document.body.removeChild(dummyInput);

    // Alert the user that the number is copied (you can customize this part)
    alert('Email is copied to clipboard : akash.verma.5209@gmail.com');
  }
  const send =()=>{
    alert('Currently Form is not working Plz Contact by Email or Call')
  }
// Top button JS



let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    
    if(pos > 100){
        scrollProgress.style.display = "grid";
    }
    else{
        scrollProgress.style.display = "none";
    }

    scrollProgress.addEventListener("click" , () => {
        document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(var(--main-color) ${scrollValue}% , var(--bg-color) ${scrollValue}%)`;
};


this.window.onscroll = calcScrollValue;
this.window.onload = calcScrollValue;




// Progress Line Js redial style

let teamWorkRedial = document.querySelector(".teamwork-redial"),
teamWorkProgressValue = document.querySelector(".teamwork");

    let teamStartValue = 0,
        teamEndValue = 80,
        teamSpeed = 25;
    let teamProgress = setInterval(() => {
        
        teamStartValue++;

        teamWorkProgressValue.textContent = `${teamStartValue}%`

        teamWorkRedial.style.background = `conic-gradient(var(--main-color) ${teamStartValue * 3.6}deg,#ffffff4c 0deg)`

        if(teamStartValue == teamEndValue){
            clearInterval(teamProgress);
        }

} , teamSpeed);


let creativityRedial = document.querySelector(".creativity-redial"),
creativityProgressValue = document.querySelector(".creativity");

    let creativityStartValue = 0,
        creativityEndValue = 90,
        creativitySpeed = 25;
let creativityProgress = setInterval(() => {
        
        creativityStartValue++;

        creativityProgressValue.textContent = `${creativityStartValue}%`

        creativityRedial.style.background = `conic-gradient(var(--main-color) ${creativityStartValue * 3.6}deg,#ffffff4c 0deg)`

        if(creativityStartValue == creativityEndValue){
            clearInterval(creativityProgress);
        }

} , creativitySpeed);


let problemRedial = document.querySelector(".problem-redial"),
problemProgressValue = document.querySelector(".problem");

    let problemStartValue = 0,
        problemEndValue = 70,
        problemSpeed = 25;
let problemProgress = setInterval(() => {
        
        problemStartValue++;

        problemProgressValue.textContent = `${problemStartValue}%`

        problemRedial.style.background = `conic-gradient(var(--main-color) ${problemStartValue * 3.6}deg,#ffffff4c 0deg)`

        if(problemStartValue == problemEndValue){
            clearInterval(problemProgress);
        }

} , problemSpeed);

let communicationRedial = document.querySelector(".communication-redial"),
communicationProgressValue = document.querySelector(".communication");

    let communicationStartValue = 0,
        communicationEndValue = 75,
        communicationSpeed = 25;
let communicationProgress = setInterval(() => {
        
        communicationStartValue++;

        communicationProgressValue.textContent = `${communicationStartValue}%`

        communicationRedial.style.background = `conic-gradient(var(--main-color) ${communicationStartValue * 3.6}deg,#ffffff4c 0deg)`

        if(communicationStartValue == communicationEndValue){
            clearInterval(communicationProgress);
        }

} , communicationSpeed);


// Read More button JS
let noOfChar = 150;
let contents = document.querySelectorAll('.about-content p');

contents.forEach(cont => {
    if(cont.textContent.length < noOfChar){
        contents.nextElementSibling.style.display = "none";
    }
    else{
        let displayText = cont.textContent.slice(0,noOfChar);
        let moreText = cont.textContent.slice(noOfChar);
        cont.innerHTML = `${displayText}<span class ="dots" > ... </span><span class = "hide more" > ${moreText}</span>`
    }
});

function readMore(btn){
    let post = btn.parentElement;
    post.querySelector(".dots").classList.toggle("hide");
    post.querySelector(".more").classList.toggle("hide");
}

// NavBar Links 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


// Scroll Reveal

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top'});
ScrollReveal().reveal('.home-image, .services-container, .portfolio-box , .contact form ', { origin:'bottom'});
ScrollReveal().reveal(' .home-content h1, .about-img, .skill-bar, .whatsaap', { origin:'left'});
ScrollReveal().reveal('.social-media, .home-content p, .about-content, .container, .mail', { origin:'right'});