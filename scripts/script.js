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
//---CONTACTS page---
// form validation
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        document.getElementById("formMessage").textContent = "All fields are required!";
    } else {
        document.getElementById("formMessage").innerHTML = "✅ Message sent successfully!";
        setTimeout(() => {
            document.getElementById("formMessage").innerHTML = "";
        }, 3000);
    }
})

//---PROJECTS page---
function loadProjects() {
    const projects = [
    { title: "Portfolio Website", description: "My first personal website.", link: "#" },
    { title: "To-Do List App", description: "A simple task management app.", link: "#" },
    { title: "Weather App", description: "A weather forecast app using an API.", link: "#" },
];

const container = document.getElementById("projectsContainer");

projects.forEach(project => {
    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");
    projectCard.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
        `;
        container.appendChild(projectCard);
});
}


