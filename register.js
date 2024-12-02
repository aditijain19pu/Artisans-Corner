document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        let isValid = true;
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const contact = document.getElementById("contact").value.trim();
        const dob = document.getElementById("dob").value.trim();
        const age = document.getElementById("age").value.trim();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();
        
        // Clear previous error messages
        document.querySelectorAll(".error").forEach(element => element.remove());

        // Validate Full Name
        if (name === "") {
            showError("name", "Full Name is required.");
            isValid = false;
        }

        // Validate Email
        if (email === "") {
            showError("email", "Email is required.");
            isValid = false;
        } else if (!isValidEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        }

        // Validate Contact Number
        if (contact === "") {
            showError("contact", "Contact Number is required.");
            isValid = false;
        } else if (isNaN(contact) || contact.length < 10) {
            showError("contact", "Please enter a valid contact number.");
            isValid = false;
        }

        // Validate Date of Birth
        if (dob === "") {
            showError("dob", "Date of Birth is required.");
            isValid = false;
        }

        // Validate Age
        if (age === "") {
            showError("age", "Age is required.");
            isValid = false;
        } else if (isNaN(age) || age <= 0) {
            showError("age", "Please enter a valid age.");
            isValid = false;
        }

        // Validate Username
        if (username === "") {
            showError("username", "Username is required.");
            isValid = false;
        }

        // Validate Password
        if (password === "") {
            showError("password", "Password is required.");
            isValid = false;
        } else if (password.length < 6) {
            showError("password", "Password must be at least 6 characters long.");
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if there are validation errors
        }
    });

    function showError(inputId, message) {
        const inputField = document.getElementById(inputId);
        const errorElement = document.createElement("div");
        errorElement.className = "error";
        errorElement.textContent = message;
        inputField.parentNode.insertBefore(errorElement, inputField.nextSibling);
    }

    function isValidEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});
