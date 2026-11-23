// Shared script for all pages.

// 1. Show the current year in the footer.
var yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// 2. Validate the contact form (only runs on contact.html).
var form = document.getElementById("contact-form");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop the page from reloading

    var name = document.getElementById("name").value.trim();
    var email = document.getElementById("email").value.trim();
    var message = document.getElementById("message").value.trim();
    var valid = true;

    function setError(id, text) {
      document.getElementById(id).textContent = text;
    }

    setError("name-error", "");
    setError("email-error", "");
    setError("message-error", "");

    if (name === "") {
      setError("name-error", "Please enter your name.");
      valid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setError("email-error", "Please enter a valid email address.");
      valid = false;
    }

    if (message.length < 10) {
      setError("message-error", "Your message should be at least 10 characters.");
      valid = false;
    }

    var status = document.getElementById("form-status");
    if (valid) {
      status.textContent = "Thank you, " + name + ". Your message is ready to send.";
      status.hidden = false;
      form.reset();
    } else {
      status.hidden = true;
    }
  });
}
