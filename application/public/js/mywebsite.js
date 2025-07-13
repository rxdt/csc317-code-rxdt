function isValidUser(username) {
    return username.length >= 3;
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

// function fadeout() {
//     // e.currentTarget.remove(); // remove on opacity fades
//     let el = e.currentTarget;
//     let cnt = 100;
//     let t = setInterval() => {
//         cnt -= 10;
//         if(cnt < 10){
//             clearInterval(t);
//     },100);
// }

// function makeCardJs(product) {
//     let root = document.createElement("div")};
//     root.id = "container";
//     root.classList.add("container");
//     let imgTag = document.createElement("img");
//     // etc...
// }

document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const itemCount = document.getElementById("item-count");

    fetch("https://dummyjson.com/products?limit=50")
        .then((res) => res.json())
        .then((data) => {
            let products = data.products;
            itemCount.textContent = `Number of results: ${products.length}`;

            products.forEach((product) => {
                const card = document.createElement("div");
                card.className = "product-card";

                const img = document.createElement("img");
                img.className = "item-img";
                img.src = product.thumbnail;
                img.alt = product.title;

                const title = document.createElement("p");
                title.className = "item-title";
                title.textContent = product.title;

                const price = document.createElement("p");
                price.className = "item-price";
                price.textContent = `$${product.price}`;

                card.appendChild(img);
                card.appendChild(title);
                card.appendChild(price);
                container.appendChild(card);

                card.addEventListener("click", () => {
                    card.style.transition = "opacity 0.8s";
                    card.style.opacity = "0";
                    setTimeout(() => {
                        card.remove();
                        const currentCount = parseInt(itemCount.textContent.match(/\d+/)[0], 10);
                        itemCount.textContent = `Number of results: ${currentCount - 1}`;
                    }, 800);
                });
            });
        });
});

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
