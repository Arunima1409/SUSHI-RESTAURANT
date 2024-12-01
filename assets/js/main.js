const navMenu=document.getElementById('nav-menu'),
navToggle=document.getElementById('nav-toggle'),
nvClose= document.getElementById('Nav-close')

if (navToggle)
{
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

if(navClose)
{
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

const navLink= document.querySelectorAll('.nav__link')
const linkAction=()=>{
    const navMenu=document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=> n.addEventListener('click', LinkAction))

const scrollHeader=()=>{
    const header= document.getElementById('header')
    this.scrollY >= 50? header.classList.add('bg-header') : header.classList.remove('bg-header')
}
window.addEventListener('scroll', scrollHeader)

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY>= 350? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', ScrollUp)

const sections = document.querySelectorAll('section[id')
const scrollActive= () =>{
    const scrollY = window.pageYOffset
    sections.forEach(current =>{
        const sectionFeight = current.offsetHeight,
        sectionTop= current.offsetTop -58,
        sectionId= current.getAttribute('id',
        sectionsClass = document.querySelector ('.nav__menu a[href=' + sectionId + ']'))
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }
        else{
            sectionsClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const themeButton= document.getElementById('theme-button')
const darkTheme='dark-theme'
const iconTheme= 'ri-sun-line'
const selectedTheme= localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark': 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme){
    document.body.classList[selectedTheme ==='dark' ? 'add' : 'remove'] (darkTheme)
    themeButton.classList[selectedIcom=== 'bx bx-moon' ? 'add' : 'remove'] (iconTheme)
}

themeButton.addEventListener('click' , () =>{
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem ('selected-theme' , getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

const sr=ScrollReveal({
    origin:'top',
    distance:'600px',
    duration:2500,
    delay: 400,
    //reset: true,
})
sr.reveal ('.home__img, .newsletter_container , .footer__logo, .footer__description, .footer__content, .footer__info')
sr.reveal ('.home__data', {origin:'bottom'})
sr.reveal ('.about__data, .recently__data' ,{origin:'left'})
sr.reveal ('.about__img, .recently__img', {origin:'right'})
sr.reveal ('.popular__card', {interval:100})