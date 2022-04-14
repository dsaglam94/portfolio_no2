const menuContainer = document.querySelector('.menu-container');
const menuToggle = document.querySelector('.menu-toggle');
const navList = document.querySelector('.nav__list');
const navItems = document.querySelector('.nav__list--items');
const menuText = document.querySelector('.menu-text');
const mouseCursor = document.querySelector('.cursor');
const mainTitle = document.querySelector('.main__title--front');
const navLogo = document.querySelector('.nav__logo');
const socialLinkContainer = document.querySelector('.main__social--links');
const themeButtons = document.querySelectorAll('.main button');
// const upArrow = document.querySelector('.up-arrow');
const footerMail = document.querySelector('.footer__left--mail');
const footerSocials = document.querySelectorAll('.footer__right--socials a');

// mouse cursor follow
window.addEventListener('mousemove', cursor);

 function cursor(e) {
     mouseCursor.style.top = e.clientY + "px";
     mouseCursor.style.left = e.clientX + "px";
 }

// mouse cursor behavoir 

themeButtons.forEach(function(e) {
    e.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-grow--second');
    });

    e.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-grow--second');
    });
})


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

// upArrow.addEventListener('mouseover', () => {
//     mouseCursor.classList.add('cursor-grow--second');
// })

// upArrow.addEventListener('mouseleave', () => {
//     mouseCursor.classList.remove('cursor-grow--second');
// })

socialLinkContainer.addEventListener('mouseover', () => {
    mouseCursor.classList.add('cursor-grow--second');
})

socialLinkContainer.addEventListener('mouseleave', () => {
    mouseCursor.classList.remove('cursor-grow--second');
})


// CHANGE THE THEME WHEN CLICKED BUTTONS SUN & MOON
// Local storage for dark theme
let darkMode = localStorage.getItem('dark-mode');
const themeBtn = document.querySelector('.theme');

const enableDarkMode = () => {
    let sun = document.querySelector('.sun');
    let moon = document.querySelector('.moon');
    let upArrow = document.querySelector('.up-arrow');

    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');

    upArrow.classList.add('up-arrow-dark');
    sun.style.opacity = '1';
    moon.style.opacity = '0';  
    moon.style.transform = `translateX(-50px)`;    

}

const disableDarkMode = () => {
    let sun = document.querySelector('.sun');
    let moon = document.querySelector('.moon');
    let upArrow = document.querySelector('.up-arrow');

    document.body.classList.remove('dark-mode');
    localStorage.setItem('dark-mode', null);
    
    upArrow.classList.remove('up-arrow-dark');
    moon.style.opacity = '1';
    sun.style.opacity = '0';
    moon.style.transform = `translateX(0)`;  
}

if ( darkMode === 'enabled') {
    enableDarkMode();
}

themeBtn.addEventListener('click', () => {
    darkMode = localStorage.getItem('dark-mode');

    if ( darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

// Scroll Down Circle Animation 

const text = document.querySelector('.text');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 16.5}deg)">${char}</span>`
).join("")

// make the SCROLLDOWN disappear/appear from DOM when scroll down/up
function scrollDownDisappear() {
    let circleText = document.querySelector('.circle-text');
    let socialLinks = document.querySelector('.main__social--links');
    let themeButtonsContainer = document.querySelector('.theme');
    let upArrowDiss = document.querySelector('.up-arrow');

    let circlePosition = circleText.getBoundingClientRect().top;

    let screenPosition = window.innerHeight / 2;

    if (circlePosition < screenPosition) {
        circleText.classList.add('circle-dissappear');
        socialLinks.classList.add('social-links--dissappear');
        themeButtonsContainer.classList.add('social-links--dissappear');
        upArrowDiss.classList.add('upArrow-appear');
    } else {
        circleText.classList.remove('circle-dissappear');
        themeButtonsContainer.classList.remove('social-links--dissappear');
        socialLinks.classList.remove('social-links--dissappear');
        upArrowDiss.classList.remove('upArrow-appear');
    }

}

// menu toggle 
menuContainer.addEventListener('click', () => {
    menuToggle.classList.toggle('active');

    if (menuToggle.classList.contains('active')){
        navList.classList.add('list-open');
    } else {
        navList.classList.remove('list-open');
    }
})