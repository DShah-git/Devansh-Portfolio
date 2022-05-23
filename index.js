var nav = document.getElementById("nav")
var goTop = document.getElementById("goTop")

var age = document.getElementById("age")
var exp = document.getElementById("exp")


var currentYear = new Date().getFullYear();

age.textContent = currentYear - 2001;

exp.textContent = currentYear - 2017 +1;


window.onscroll = function(e){
    var scrollTop = window.pageYOffset
    
    
    if(scrollTop>150){
        nav.classList.add("nav-shrink")
        goTop.classList.add("show");
    }
    else{
        nav.classList.remove("nav-shrink")
        goTop.classList.remove("show");
    }    
}

var projectCard = document.getElementsByClassName('projectCard')
var front = document.getElementsByClassName('front')
var back = document.getElementsByClassName('back')

var projectToggles = [false,false,false]

function cardRotate(i){

    if(projectToggles[i]==false)
    {
        projectCard[i].classList.remove("rotateback");
        projectCard[i].classList.add("rotate");

        front[i].classList.add("none")
        back[i].classList.remove("none")
        back[i].classList.add("block")
        back[i].classList.add("rotate")

        projectToggles[i] = !projectToggles[i]
    }
    else{
        projectCard[i].classList.remove("rotate");
        projectCard[i].classList.add("rotateback");

        back[i].classList.add("none")
        back[i].classList.remove("block")
        back[i].classList.remove("rotate")
        
        front[i].classList.remove("none")
        front[i].classList.add("block")

        projectToggles[i] = !projectToggles[i]
    }
}

// skills

var skills = [
    {"skill":"HTML","level":0.9},
    {"skill":"CSS","level":0.8},
    {"skill":"JS","level":0.8},
    {"skill":"Angular","level":0.8},
    {"skill":"React","level":0.8},
    {"skill":"NodeJs","level":0.7},
    {"skill":"Express","level":0.7},
    {"skill":"C#","level":0.8},
    {"skill":"Java","level":0.7},
    {"skill":"Python","level":0.6},
    {"skill":"SQL","level":0.8},
    {"skill":"NoSQL","level":0.8},
    {"skill":"GraphQL","level":0.7},
    
   
]


bars = document.getElementsByClassName("inner")

for(let i=0;i<skills.length;i++){
    bars[i].innerHTML = skills[i].level*100+"/100"
    var width = skills[i].level*200    
    bars[i].style.width = width + "px"
}

