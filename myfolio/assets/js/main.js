// ==================== MENU SHOW Y HIDDEN ========================//
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//=========== Menu Show ==========//
// Validate if constant exists
if (navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//=========== Menu Hide ==========//
//validate if constant exists
if (navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}

//======================= Remove Menu Mobile =======================//
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//======================== Accordion Skills ========================//
const skillsContent = document.getElementsByClassName('skills_content'),
      skillsHeader = document.querySelectorAll('.skills_header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for (i=0;i<skillsContent.length;i++){
        skillsContent[i].className = "skills_content skills_close";
    }
    if(itemClass === "skills_content skills_close"){
        this.parentNode.className = "skills_content skills_open";
    }
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click', toggleSkills)
})



//======================== Qualification Tabs ======================//

const tabs = document.querySelectorAll('[data-target'),
      tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab =>{
    tab.addEventListener('click', ()=>{
        const target = document.querySelector(tab.dataset.target);
        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification_active');
        })
        target.classList.add('qualification_active');

        tab.forEach(tab =>{
            tab.classList.remove('qualification_active');
        })
        tab.classList.add('qualification_active')
    });
});

//========================== Servicec Modal =======================//
//======================== Portfolio Swiper ======================//
//========================== Testimonial ========================//