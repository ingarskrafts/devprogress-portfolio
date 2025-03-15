function toggleDarkMode() {
    // Toggle the dark mode class on the body
    document.body.classList.toggle("dark-mode");

    // Check if dark mode is enabled
    if (document.body.classList.contains("dark-mode")) {
        // Save the dark mode state to localStorage
        localStorage.setItem("darkMode", "enabled");
    } else {
        // Remove the dark mode state from localStorage
        localStorage.removeItem("darkMode");
    }
}

// Check the localStorage when the page loads to set the dark mode state
window.addEventListener("DOMContentLoaded", function() {
    if (localStorage.getItem("darkMode") === "enabled") {
        // If dark mode is enabled in localStorage, add the dark-mode class
        document.body.classList.add("dark-mode");
    }
})

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