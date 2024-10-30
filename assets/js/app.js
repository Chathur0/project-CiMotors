const form = document.getElementById("form-submission");

function sendEmail(name, email, subject, messageContent) {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "cimotors50@gmail.com",
    Password: "39C5F44F91B2983DD7A60E0D3D59B422EA72",
    To: "cimotors50@gmail.com",
    From: "cimotors50@gmail.com",
    Subject: subject,
    Body: `
            <h2>Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Message:</strong><br/> ${messageContent}</p>
        `,
  })
    .then((message) => {
      if (message == "OK") {
        document.getElementById("message").innerHTML =
          "Thank You for Contacting Us!";
        document.getElementById("message").style.display = "block";
      } else {
        document.getElementById("message").innerHTML =
          "We're sorry, but your message couldn't be sent. Please reach us directly at <a href='mailto:info@cimotors.co.nz'>info@cimotors.co.nz</a> or call us at 079291279.";
        document.getElementById("message").style.display = "block";
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(
        "Failure sending mail. Please check SMTP credentials and settings."
      );
    });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = form.elements[0].value;
  const email = form.elements[1].value;
  const subject = form.elements[2].value;
  const messageContent = form.elements[3].value;

  sendEmail(name, email, subject, messageContent).then(() => {
    form.elements[0].value = ""; 
    form.elements[1].value = ""; 
    form.elements[2].value = ""; 
    form.elements[3].value = ""; 
  });
});
