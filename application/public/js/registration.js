document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirm-password");

    function validateUsername(name) {
        return /^[a-zA-Z][a-zA-Z0-9]{2,}$/.test(name);
    }

    function validatePassword(pw) {
        return /^(?=.*[A-Z])(?=.*\d)(?=.*[/*\-+!@#$^&~[\]]).{8,}$/.test(pw);
    }

    form.addEventListener("submit", function (e) {
        let errors = [];

        if (!validateUsername(username.value)) {
            username.classList.add("invalid");
            username.classList.remove("valid");
            errors.push("Username must start with a letter and be at least 3 characters long.");
        } else {
            username.classList.add("valid");
            username.classList.remove("invalid");
        }

        if (!validatePassword(password.value)) {
            password.classList.add("invalid");
            password.classList.remove("valid");
            errors.push("Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.");
        } else {
            password.classList.add("valid");
            password.classList.remove("invalid");
        }

        if (password.value !== confirmPassword.value) {
            confirmPassword.classList.add("invalid");
            confirmPassword.classList.remove("valid");
            errors.push("Passwords do not match.");
        } else {
            confirmPassword.classList.add("invalid");
            confirmPassword.classList.remove("valid");
        }

        if (errors.length === 0) {
            alert("Registration successful");
        }
        else if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
