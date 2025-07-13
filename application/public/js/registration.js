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
            errors.push("Username must start with a letter and be at least 3 characters long.");
        }

        if (!validatePassword(password.value)) {
            errors.push("Password must be at least 8 characters, include 1 uppercase letter, 1 number, and 1 special character.");
        }

        if (password.value !== confirmPassword.value) {
            errors.push("Passwords do not match.");
        }

        if (errors.length > 0) {
            e.preventDefault();
            alert(errors.join("\n"));
        }
    });
});
