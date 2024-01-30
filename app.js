const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')
const navLogo = document.querySelector('#navbar__logo')
const body = document.querySelector('body')

//display mobile menu

const mobileMenu = () =>{
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active')
    body.classList.toggle('active')
}


menu.addEventListener('click', mobileMenu)

//Animations

gsap.registerPlugin(ScrollTrigger)

gsap.from('.at-hero' ,{
    duration: 0.6,
    opacity: 0,
    y: -150,
    stagger: 0.3
});


gsap.from('.at-serv' ,{
    ScrollTrigger: '.at-serv',
    duration: 0.5,
    opacity: 1,
    x: -150,
    stagger: 0.12
});

gsap.from('.at-img' ,{
    ScrollTrigger: '.at-serv',
    duration: 3.4,
    opacity: 0,
    x: -200,
    // stagger: 0.12
});

gsap.from('.at-mem' ,{
    ScrollTrigger: '.at-mem',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay : 0.5
});

gsap.from('.at-card' ,{
    ScrollTrigger: '.at-card',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.1,
    delay : 0.2
});

gsap.from('.at-tea' ,{
    ScrollTrigger: '.at-tea',
    duration: 1,
    opacity: 0,
    x: -150,
    stagger: 0.3,
    delay : 0.2
});

gsap.from('.at-email' ,{
    ScrollTrigger: '.at-email',
    duration: 0.8,
    opacity: 0,
    x: -150,
    stagger: 0.25,
    delay : 0.7
});