document.addEventListener('DOMContentLoaded', function() {
    const productList = document.getElementById('productList');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');
    const backButton = document.getElementById('backButton');

    // Sample product data
    const products = [
        {
            name: 'Polka Dot',
            image: 'images/polka_dot.webp',
            description: 'Indoor Plant',
            features: '15 - 22 cm',
            Pot_Size: '4 inch diameter',
            Soil_Media: 'Coco Peat+Soil+Leca Balls+Charcoal',
            ratings: '4.5/5',
            cost: '$399'
        },
        // Add more products as needed
    ];

    // Function to display products in the catalog
    function displayProducts(productArray) {
        productList.innerHTML = '';
        productArray.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            const image = document.createElement('img');
            image.classList.add('product-image');
            image.src = product.image;
            image.alt = product.name;

            const description = document.createElement('div');
            description.classList.add('product-description');
            const name = document.createElement('p');
            name.textContent = 'Name: ' + product.name;
            const desc = document.createElement('p');
            desc.textContent = 'Description: ' + product.description;
            const features = document.createElement('p');
            features.textContent = 'Features: ' + product.features;
            const potSize = document.createElement('p');
            potSize.textContent = 'Pot Size: ' + product.Pot_Size;
            const soilMedia = document.createElement('p');
            soilMedia.textContent = 'Soil Media: ' + product.Soil_Media;
            const ratings = document.createElement('p');
            ratings.textContent = 'Ratings: ' + product.ratings;
            const cost = document.createElement('p');
            cost.textContent = 'Cost: ' + product.cost;

            const addToCartBtn = document.createElement('button');
            addToCartBtn.textContent = 'Add to Cart';
            addToCartBtn.classList.add('add-to-cart-btn');
            addToCartBtn.addEventListener('click', function() {
                // Redirect to the Cart Page (Page 2)
                window.location.href = 'cart.html?productName=' + encodeURIComponent(product.name) + '&price=' + encodeURIComponent(product.cost)+ '&image=' + encodeURIComponent(product.image); // Replace 'cart.html' with the URL of your Cart Page
            });

            productItem.appendChild(image);
            description.appendChild(name);
            description.appendChild(desc);
            description.appendChild(features);
            description.appendChild(potSize);
            description.appendChild(soilMedia);
            description.appendChild(ratings);
            description.appendChild(cost);
            productItem.appendChild(description);
            productItem.appendChild(addToCartBtn);

            productList.appendChild(productItem);
        });
    }

    // Event listener for search button
    searchBtn.addEventListener('click', function() {
        const searchText = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchText));

        if (filteredProducts.length > 0) {
            displayProducts(filteredProducts);
        } else {
            productList.innerHTML = '<p>No products found.</p>';
            backButton.style.display = 'inline'; // Show the back button
        }
    });

    // Event listener for back button
    backButton.addEventListener('click', function() {
        displayProducts(products); // Show all products again
        backButton.style.display = 'none'; // Hide the back button
    });

    // Display all products when the page loads initially
    displayProducts(products);

    // Logout button functionality
    document.getElementById('logoutBtn').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
