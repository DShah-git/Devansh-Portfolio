
//--Mobile Navigation

var navToggle = document.getElementsByClassName("nav-toggle"); 
var nav = document.getElementById("nav");
var navTracker = false;

function toggleNav(){
    console.log(navTracker)
    if(navTracker==false)
    {
        nav.classList.add("nav-appear");
        navToggle.item(0).classList.add("nav-toggle-opened")
        navTracker=!navTracker;
    }
    else{
        nav.classList.remove("nav-appear");
        navToggle.item(0).classList.remove("nav-toggle-opened")
        navTracker=!navTracker;
    }
}

//--Navigation

var about = document.getElementById("about");
var projects = document.getElementById("projects");
var skills = document.getElementById("skills");
var contact = document.getElementById("contact");

function navigate(tab)
{
    if(tab==='about'){
        about.classList.add("active");
        projects.classList.remove("active");
        skills.classList.remove("active");
        contact.classList.remove("active");

        toggleNav();
    }
    else if(tab==="projects"){
        about.classList.remove("active");
        projects.classList.add("active");
        skills.classList.remove("active");
        contact.classList.remove("active"); 
        toggleNav();
    }
    else if(tab==="skills"){
        about.classList.remove("active");
        projects.classList.remove("active");
        skills.classList.add("active");
        contact.classList.remove("active"); 
        toggleNav();
    }
    else if(tab==="contact"){
        about.classList.remove("active");
        projects.classList.remove("active");
        skills.classList.remove("active");
        contact.classList.add("active"); 
        toggleNav();
    }
}