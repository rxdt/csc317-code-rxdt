document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("container");
    const itemCount = document.getElementById("item-count");

    const paginationTop = document.createElement("div");
    paginationTop.id = "pagination-top";
    const paginationBottom = document.createElement("div");
    paginationBottom.id = "pagination-bottom";
    container.parentElement.insertBefore(paginationTop, container);
    container.parentElement.appendChild(paginationBottom);

    let currentPage = 1;
    const itemsPerPage = 20;
    let products = [];

    function renderPage(page) {
        container.innerHTML = "";
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const pageItems = products.slice(start, end);
        pageItems.forEach((product) => {
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
        updateCount();
    }

    function updateCount() {
        const visible = container.getElementsByClassName("product-card").length;
        itemCount.textContent = `results: ${visible}`;
    }

    function createPagination(totalItems) {
        paginationTop.innerHTML = "";
        paginationBottom.innerHTML = "";
        const totalPages = Math.ceil(totalItems/itemsPerPage);
        for (let i = 1; i <= totalPages; i++) {
            const buttonTop = document.createElement("button");
            const buttonBottom = document.createElement("button");
            buttonTop.textContent = i;
            buttonBottom.textContent = i;

            if (i === currentPage) {
                buttonTop.disabled = true;
                buttonBottom.disabled = true;
            }
            buttonTop.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
                createPagination(products.length);
            });
            buttonBottom.addEventListener("click", () => {
                currentPage = i;
                renderPage(currentPage);
                createPagination(products.length);
            });
            paginationTop.appendChild(buttonTop);
            paginationBottom.appendChild(buttonBottom);
        }
    }

    fetch("https://dummyjson.com/products?limit=50")
        .then((res) => res.json())
        .then((data) => {
            products = data.products;
            createPagination(products.length);
            renderPage(currentPage);
        });
});
