const form = document.getElementById("form-submission");
const btn = document.getElementById("button");
function sendEmail(params) {
  btn.innerHTML = "Sending...";
  emailjs.send("service_ygfa0gn", "template_w10etfh", params).then(
    (res) => {
      if (res.text == "OK") {
        btn.innerHTML = "SEND MESSAGE";
        document.getElementById("message").innerHTML =
          "Thank You for Contacting Us!";
        document.getElementById("message").style.display = "block";
        form.reset();
      } else {
        btn.innerHTML = "SEND MESSAGE";
        document.getElementById("message").innerHTML =
          "We're sorry, but your message couldn't be sent. Please reach us directly at <a href='mailto:info@cimotors.co.nz'>info@cimotors.co.nz</a> or call us at 079291279.";
        document.getElementById("message").style.display = "block";
      }
    },
    (err) => {
      btn.innerHTML = "SEND MESSAGE";
      alert(JSON.stringify(err));
    }
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var params = {
    name: form.elements[0].value,
    email_id: form.elements[1].value,
    message: form.elements[2].value,
  };

  sendEmail(params);
});
