const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();

document.getElementById("status").innerHTML=

"Sending...";

const data=new FormData(form);

try{

const response=await fetch(

"https://YOUR_GOOGLE_SCRIPT_URL",

{

method:"POST",

body:data

}

);

const result=await response.text();

document.getElementById("status").innerHTML=result;

form.reset();

}

catch{

document.getElementById("status").innerHTML=

"Unable to send enquiry.";

}

});

}