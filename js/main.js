// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );

//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';

//     }, 4000);

//   }
// }
// randomizeImgs();

let header = document.querySelector("header");

window.addEventListener('scroll', () => {
    header.classList.toggle("shadow", window.scrollY > 0);
});

// Mobile menu toggle for Bootstrap navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
    navbar.classList.toggle("active");
    // Also toggle Bootstrap's d-none class for proper mobile menu
    if (navbar.classList.contains("active")) {
        navbar.classList.remove("d-none");
        navbar.classList.add("d-flex");
    } else {
        navbar.classList.remove("d-flex");
        navbar.classList.add("d-none");
    }
};

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove("active");
        // Restore Bootstrap's responsive classes
        navbar.classList.remove("d-flex");
        navbar.classList.add("d-none", "d-lg-flex");
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
        navbar.classList.remove("active");
        navbar.classList.remove("d-flex");
        navbar.classList.add("d-none", "d-lg-flex");
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current navigation item
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section[id]');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('home-active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('home-active');
        }
    });
});

// Handle window resize to reset mobile menu state
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) { // Bootstrap lg breakpoint
        navbar.classList.remove("active");
        navbar.classList.remove("d-flex");
        navbar.classList.add("d-none", "d-lg-flex");
    }
});