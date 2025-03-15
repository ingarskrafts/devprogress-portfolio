function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}

// form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent = "All fields are required!";
    } else {
        document.getElementById("formMessage").textContent = "Message sent!";
    }
})