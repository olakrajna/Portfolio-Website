const header = document.querySelector('header');

const stickHeader = () => {
    const scroll = window.scrollY;

    if(scroll > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }

}


window.addEventListener('scroll', stickHeader)


const menu = document.querySelector('.menu');
const burgerBtn = document.querySelector('.burger');

burgerBtn.addEventListener('click', () => {
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
})

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => link.addEventListener('click', (e) =>{
    const key = e.target.dataset.key;

    const section = document.querySelector(`.${key}`).getBoundingClientRect().top + window.pageYOffset - 110;

    menu.classList.remove('active');
    
    burgerBtn.classList.remove('active')


    window.scrollTo({top: section, behavior:'smooth'})
} ))


const text = document.querySelector(".about-sec");

const textLoad = () => {
        setTimeout(() => {
            text.textContent = "Designer"
        }, 0);
        setTimeout(() => {
            text.textContent = "FutureITworker"
        }, 4000);
        setTimeout(() => {
            text.textContent = "Dreamer"
        }, 8000);
        setTimeout(() => {
            text.textContent = "Artist"
        }, 12000);        
}

textLoad();
setInterval(textLoad,12000);


var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link")
    }

    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");

}
