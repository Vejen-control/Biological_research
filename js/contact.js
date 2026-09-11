const form=document.getElementById("contactForm");

if(form){

form.addEventListener("submit",async(e)=>{

e.preventDefault();


try{
document.getElementById("status").innerHTML=

"Sending...";

const formData = {
    name: form.name.value,
    company: form.company.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
};

const response = await fetch(
    "https://script.google.com/macros/s/AKfycby6qi0zfvIYA1zvXZLGIch6v3-Dkxcuxar7WbTlBhrMqkVYT5afdg7HmKdQXHexRyaO/exec",
    {
        method: "POST",
        headers: {
            "Content-Type": "text/plain;charset=utf-8"
        },
        body: JSON.stringify(formData)
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