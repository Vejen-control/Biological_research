/*
==========================================================
Aurelia BioSystems
Main JavaScript
==========================================================
*/

"use strict";

/*=========================================================
Sticky Header
=========================================================*/

const header = document.querySelector("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 40) {

        header.style.background = "rgba(4,6,8,0.90)";
        header.style.boxShadow = "0 12px 40px rgba(0,0,0,.45)";

    }
    else {

        header.style.background = "rgba(4,6,8,0.72)";
        header.style.boxShadow = "none";

    }

}

window.addEventListener("scroll", updateHeader);
updateHeader();


/*=========================================================
Reveal Animation
=========================================================*/

const revealElements = document.querySelectorAll(

".card,\
.timeline>div,\
.feature-panel,\
.gallery-item,\
.content-card,\
.contact-form,\
.reveal"

);

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("visible");

}

});

},

{

threshold:0.15

}

);

revealElements.forEach(element=>{

observer.observe(element);

});


/*=========================================================
Smooth Internal Links
=========================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

const target=document.querySelector(this.getAttribute("href"));

if(!target) return;

e.preventDefault();

target.scrollIntoView({

behavior:"smooth",

block:"start"

});

});

});


/*=========================================================
Highlight Active Navigation
=========================================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll("nav a").forEach(link=>{

const href = link.getAttribute("href");

if(href===currentPage || (currentPage==="" && href==="index.html")){

link.classList.add("active");

}

});


/*=========================================================
Counter Animation
(add class="counter" data-target="500")
=========================================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(!entry.isIntersecting) return;

const element=entry.target;

const target=parseInt(element.dataset.target);

let value=0;

const step=Math.max(1,target/120);

const timer=setInterval(()=>{

value+=step;

if(value>=target){

value=target;

clearInterval(timer);

}

element.textContent=Math.floor(value);

},15);

counterObserver.unobserve(element);

});

},

{

threshold:0.4

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*=========================================================
Hero Fade
=========================================================*/

const hero=document.querySelector(".hero");

window.addEventListener("scroll",()=>{

if(!hero) return;

const y=window.scrollY;

hero.style.opacity=Math.max(0.35,1-y/900);

});


/*=========================================================
Gallery Hover
=========================================================*/

document.querySelectorAll(".gallery-item img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*=========================================================
Simple Floating Animation
=========================================================*/

document.querySelectorAll(".feature-panel").forEach(panel=>{

let angle=0;

function animate(){

angle+=0.01;

panel.style.transform=

"translateY("+Math.sin(angle)*4+"px)";

requestAnimationFrame(animate);

}

animate();

});


/*=========================================================
Console Signature
=========================================================*/

console.log(

"%cAurelia BioSystems",

"color:#d5b467;font-size:18px;font-weight:bold;"

);

console.log(

"Engineering Controlled Biological Environments"

);