const menuContainer = document.querySelector('.menu-container');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelector('.nav__list--items');
const menuText = document.querySelector('.menu-text');
const mouseCursor = document.querySelector('.cursor');
const mainTitle = document.querySelector('.main__title--front');
const navLogo = document.querySelector('.nav__logo');
const upArrow = document.querySelector('.up-arrow');
const footerMail = document.querySelector('.footer__left--mail');
const footerSocials = document.querySelectorAll('.footer__right--socials a');

// mouse cursor follow
window.addEventListener('mousemove', cursor);

 function cursor(e) {
     mouseCursor.style.top = e.clientY + "px";
     mouseCursor.style.left = e.clientX + "px";
 }

// mouse cursor behavoir 

Array.from(footerSocials).forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow--second');
    })
})

Array.from(footerSocials).forEach(link => {
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow--second');
    })
})

footerMail.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--second');
})

footerMail.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--second');
})


menuContainer.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--second');
})

menuContainer.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--second');
})

upArrow.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--second');
})

upArrow.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--second');
})
// Header disappear / appear
window.addEventListener('scroll', function() {
    let lastScrollTop = 0;
    let header = document.querySelector('.header');
    let screenSize = window.innerWidth;

    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop && screenSize > 810) {
        if (!navList.classList.contains('list-open')) {
            header.style.transform = `translateY(-100px)`
        }
    } else if (!(scrollTop > lastScrollTop)){
        header.style.transform = `translateY(0)`
    }
})

// CHANGE THE THEME WHEN CLICKED BUTTONS SUN & MOON
// Local storage for dark theme
let darkMode = localStorage.getItem('dark-mode');
const themeBtn = document.querySelector('.theme');

const enableDarkMode = () => {

    let upArrow = document.querySelector('.up-arrow');

    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');

    upArrow.classList.add('up-arrow-dark'); 

}

const disableDarkMode = () => {

    let upArrow = document.querySelector('.up-arrow');

    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
    
    upArrow.classList.remove('up-arrow-dark');
 
}

if ( darkMode === 'enabled') {
    enableDarkMode();
}

// Scroll Down Circle Animation 

const text = document.querySelector('.text');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 16.5}deg)">${char}</span>`
).join("")

// make the SCROLLDOWN disappear/appear from DOM when scroll down/up
function scrollDownDisappear() {
    let circleText = document.querySelector('.circle-text');
    let upArrowDiss = document.querySelector('.up-arrow');

    let circlePosition = circleText.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 2;

    if (circlePosition < screenPosition) {
        circleText.classList.add('circle-dissappear');
        upArrowDiss.classList.add('upArrow-appear');

    } else {
        circleText.classList.remove('circle-dissappear');
        upArrowDiss.classList.remove('upArrow-appear');
    }

}

window.addEventListener('scroll', scrollDownDisappear);


// menu toggle 
menuContainer.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    if (menuToggle.classList.contains('active')){
        navList.classList.add('list-open');
    } else {
        navList.classList.remove('list-open');
    }
})