/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/

const scrollHeader = () => {
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('header-bg')
                       : header.classList.remove('header-bg')

}

window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
        origin: 'bottom',
        distance: '60px',
        duration: 2500
})

sr.reveal('.home__images', {distance: '120px' , delay: 400})
sr.reveal('.home__title', {delay: 1000})
sr.reveal('.home__description', {delay: 1200})
sr.reveal('.home__button', {delay: 1400})
sr.reveal('.home__footer', {delay: 1600})
sr.reveal('.home__data div', {origin: 'right', interval: 100, delay: 1800})