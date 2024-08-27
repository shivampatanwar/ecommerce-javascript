// Get DOM elements
const addProductBtn = document.getElementById('addProductBtn');
const formDiv = document.getElementById('formDiv');
const productContainer = document.getElementById('productContainer');
const backBtn = document.getElementById('backBtn');
const updateFormDiv = document.getElementById('updateFormDiv');
const updateBackBtn = document.getElementById('updateBackBtn');

// Initially hide the form
formDiv.style.display = 'none';
updateFormDiv.style.display = 'none';





// Event listener for Add Product button
addProductBtn.addEventListener('click', function () {
    formDiv.style.display = 'block';
    addProductBtn.style.display = 'none';
    productContainer.style.display = 'none';

});

// Event listener for Back button in the add product form
backBtn.addEventListener('click', function () {
    formDiv.style.display = 'none';
    addProductBtn.style.display = 'block';
    productContainer.style.display = 'flex';
});

// Event listener for Back button in the update form
updateBackBtn.addEventListener('click', function () {
    updateFormDiv.style.display = 'none';
    addProductBtn.style.display = 'block';
    productContainer.style.display = 'flex';
});





// Load and display existing products
let merchants = JSON.parse(localStorage.getItem('merchant'));
let loginid = JSON.parse(localStorage.getItem('loginid'));

let merchant = merchants.find(m => m.id == loginid);
let productid = merchant.product.length;
merchant.product.forEach(product=>displayProduct(product));




// Display the product in the product container
function displayProduct(product) {
    productContainer.innerHTML += `
         <div class="product">
             <img src="${product.image}" alt="${product.name}">
             <h2>${product.name}</h2>
             <p>${product.description}</p>
             <p>$${product.price.toFixed(2)}</p>
             <p>$${product.quantity}</p>
             <button onclick="updateProduct(${product.id})">Update</button>
             <button onclick="deleteProduct(${product.id})">Delete</button>
         </div>
     `;
}








// Event listener for submitting the add product form
let productForm = document.getElementById('productForm');
productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const imageFile = document.getElementById('image').files[0];
    const reader = new FileReader();

    // Generate unique id for the product
    let merchants = JSON.parse(localStorage.getItem('merchant'));
    let loginid = JSON.parse(localStorage.getItem('loginid'));

    let merchant = merchants.find(m => m.id == loginid);
    let productid = merchant.product.length;

    reader.onload = function (event) {
        // Create a new product object
        const product = {
            id: productid + 1,
            name: document.getElementById('name').value,
            description: document.getElementById('description').value,
            price: parseFloat(document.getElementById('price').value),
            quantity: document.getElementById('quantity').value,
            image: event.target.result
        };

        // Add the new product to local storage
        merchant.product.push(product);
        merchants.splice((loginid-1), 1, merchant);
        localStorage.setItem('merchant', JSON.stringify(merchants));
        alert(`${product.name} added successfully!`);

        displayProduct(product);

        document.getElementById('productForm').reset();
        formDiv.style.display = 'none';
        addProductBtn.style.display = 'block';
        productContainer.style.display = 'flex';
    };

    if (imageFile) {
        reader.readAsDataURL(imageFile);
    }
});






// Function to edit a product
function updateProduct(productid) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const product = products.find(p => p.id === productid);
    if (product) {
        document.getElementById('updateproductid').value = product.id;
        document.getElementById('updateproductname').value = product.name;
        document.getElementById('updatedescription').value = product.description;
        document.getElementById('updateprice').value = product.price;
        document.getElementById('updateprice').value = product.price;
        document.getElementById('updateImage').value = '';
        document.getElementById('imgdiv').innerHTML = `<img src="${product.image}" alt="${product.name}">`;

        updateFormDiv.style.display = 'block';
        formDiv.style.display = 'none';
        addProductBtn.style.display = 'none';
        productContainer.style.display = 'none';
        document.body.classList.add('update-form-open');
    }
}



// Event listener for submitting the update product form
document.getElementById('updateProductForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const productId = parseInt(document.getElementById('updateProductId').value);
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const index = products.findIndex(p => p.id === productId);

    if (index !== -1) {
        const imageFile = document.getElementById('updateImage').files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            // Update the product in the array
            products[index] = {
                id: productId,
                name: document.getElementById('updateProductName').value,
                description: document.getElementById('updateDescription').value,
                price: parseFloat(document.getElementById('updatePrice').value),
                image: imageFile ? event.target.result : products[index].image
            };

            // Save updated products to local storage
            localStorage.setItem('products', JSON.stringify(products));
            alert(`${products[index].name} updated successfully!`);
            updateFormDiv.style.display = 'none';
            addProductBtn.style.display = 'block';
            productContainer.innerHTML = '';
            products.forEach(displayProduct);
            productContainer.style.display = 'flex';
            document.body.classList.remove('update-form-open');
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            reader.onload();
        }
    }
});

// Function to delete a product
function deleteProduct(productId) {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const index = products.findIndex(p => p.id === productId);
    if (index !== -1) {
        let product = products[index];
        products.splice(index, 1);
        localStorage.setItem('products', JSON.stringify(products));
        document.getElementById('productContainer').innerHTML = '';
        products.forEach(displayProduct);
        alert(`${product.name} deleted successfully!`);
    }
}