
const form = document.getElementById("contactForm");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        document.getElementById("status").innerHTML = "Sending...";

        const formData = {
            name: form.name.value,
            company: form.company.value,
            email: form.email.value,
            subject: form.subject.value,
            message: form.message.value
        };

        try {

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

            const result = await response.json();

            if (result.success) {

                document.getElementById("status").innerHTML =
                    "Thank you.<br><br>Reference: <strong>" +
                    result.reference +
                    "</strong>";

                form.reset();

            } else {

                document.getElementById("status").innerHTML =
                    "Error: " + result.error;

            }

        } catch (err) {

            console.error(err);

            document.getElementById("status").innerHTML =
                "Unable to send enquiry.<br>" + err.message;

        }

    });

}