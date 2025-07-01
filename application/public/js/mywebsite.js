function isValidUser(username) {
    return username.length >= 3;
}
console.log("say stuff");
function isValidUser(username) {
    console.log("say stuff");
}

/**
 * @param {str} password
 * @returns boolean
 */
function isValidPassword(password) {}

var usernameField = document.getElementById("username");
var loginForm = document.getElementById("login-form");
// document.forms[0] // loop through forms
if (usernameField) {
    usernameField.addEventListener("change", function(eventObject) {
        var username = eventObject.target.value;
        // if (username.length >= 3) {
        if (isValidUser(username)) {
            console.log("username has more than 3 chars");
            usernameField.classList.remove("invalid");
            usernameField.classList.add("valid");
        } else {
            usernameField.classList.remove("valid");
            usernameField.classList.add("invalid");
            document.getElementById("submit").setAttribute("disabled", true);
        }
    })
}

loginForm.addEventListener("submit", function(eventObject) {
    console.log(eventObject);
    e.preventDefault();
    if(isValidUser() && isValidPassword()) {
        loginForm.submit(); // ensure can't submit a bad form
    }
})

// document.addEventListener("DOMContentLoaded", function() {});

// window.location.reload(); // refresh the tab to the current value

// document is the page aaka the website
// document.getElementById(`password`); // grabs singular elements, only grabs the first one with this ID
// document.querySelector(``); // use CSS selectors to trigger elements
//
// document.getElementsByTagName('body') // grabs collections of elements, all bodies
// document.getElementsByClassName('input-text'); // returns list
// document.getElementsByName('');
// document.querySelectorAll(''); // use CSS selectors to trigger elements
