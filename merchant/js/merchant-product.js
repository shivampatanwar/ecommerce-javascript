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
merchant.product.forEach(product => displayProduct(product));




// Display the product in the product container
function displayProduct(product) {

    if (product.length !== 0) {
        productContainer.innerHTML += `
         <div class="product">
             <img src="${product.image}" alt="${product.name}">
             <h2>${product.name}</h2>
             <p>Descrition: ${product.description}</p>
             <p>Price: &#8377; ${product.price.toFixed(2)}</p>
             <p>Stock: ${product.stock}</p>
             <button onclick="updateProduct(${product.id})">Update</button>
             <button onclick="deleteProduct(${product.id})">Delete</button>
         </div>
     `;
    }else {
        productContainer.innerHTML = `<h2>No products found</h2>`;
    }
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
            stock: document.getElementById('stock').value,
            image: event.target.result
        };

        // Add the new product to local storage
        merchant.product.push(product);
        merchants.splice((loginid - 1), 1, merchant);
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






// Function to Update a product
function updateProduct(productid) {

    let merchants = JSON.parse(localStorage.getItem('merchant'));
    let loginid = JSON.parse(localStorage.getItem('loginid'));

    let merchant = merchants.find(m => m.id == loginid);

    let product = merchant.product.find(p => p.id == productid);

    if (product) {
        document.getElementById('updateproductid').value = product.id;
        document.getElementById('updateproductname').value = product.name;
        document.getElementById('updatedescription').value = product.description;
        document.getElementById('updateprice').value = product.price;
        document.getElementById('updatestock').value = product.quantity;
        document.getElementById('updateimage').value = '';
        document.getElementById('imgdiv').innerHTML = `<img src="${product.image}" alt="${product.name}">`;

        updateFormDiv.style.display = 'block';
        formDiv.style.display = 'none';
        addProductBtn.style.display = 'none';
        productContainer.style.display = 'none';
    }
}



// Event listener for submitting the update product form
let updateProductForm = document.getElementById('updateProductForm');
updateProductForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const productid = parseInt(document.getElementById('updateproductid').value);
    let merchants = JSON.parse(localStorage.getItem('merchant'));
    let loginid = JSON.parse(localStorage.getItem('loginid'));

    let merchant = merchants.find(m => m.id == loginid);
    let product = merchant.product.find(p => p.id == productid);
    let index = merchant.product.indexOf(product);


    if (index !== -1) {
        const imageFile = document.getElementById('updateimage').files[0];
        const reader = new FileReader();

        reader.onload = function (event) {
            // Update the product in the array
            merchant.product[index] = {
                id: productid,
                name: document.getElementById('updateproductname').value,
                description: document.getElementById('updatedescription').value,
                price: parseFloat(document.getElementById('updateprice').value),
                quantity: document.getElementById('updatestock').value,
                image: imageFile ? event.target.result : merchant.product[index].image
            };


            // Save updated products to local storage
            merchants.splice((loginid - 1), 1, merchant);
            localStorage.setItem('merchant', JSON.stringify(merchants));

            // print out the updated products
            alert(`${merchant.product[index].name} updated successfully!`);


            updateFormDiv.style.display = 'none';
            addProductBtn.style.display = 'block';
            productContainer.innerHTML = '';

            merchant.product.forEach(displayProduct);
            productContainer.style.display = 'flex';
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        } else {
            reader.onload();
        }
    }
});

// Function to delete a product
function deleteProduct(productid) {

    let merchants = JSON.parse(localStorage.getItem('merchant'));
    let loginid = JSON.parse(localStorage.getItem('loginid'));

    let merchant = merchants.find(m => m.id == loginid);
    let product = merchant.product.find(p => p.id == productid);
    let index = merchant.product.indexOf(product);

    if (index !== -1) {
        let p = merchant.product[index];
        merchant.product.splice(index, 1);
        localStorage.setItem('merchant', JSON.stringify(merchants));
        document.getElementById('productContainer').innerHTML = '';
        merchant.product.forEach(displayProduct);
        alert(`${p.name} deleted successfully!`);
    }
}