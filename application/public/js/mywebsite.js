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
