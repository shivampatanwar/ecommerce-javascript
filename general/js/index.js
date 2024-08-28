// Load and display existing products
let merchants = JSON.parse(localStorage.getItem('merchant'));


let productContainer = document.getElementById('productContainer');

merchants.forEach(merchant => displayProduct(merchant));






// Display the product in the product container
function displayProduct(merchant) {

    merchant.product.forEach((product) => {

        if (product.length !== 0) {
            productContainer.innerHTML += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h2>${product.name}</h2>
                <p>Descrition: ${product.description}</p>
                <p>Price: &#8377; ${product.price.toFixed(2)}</p>
                <p>Merchant: ${merchant.name}</p>
                <button class="addtocart" onclick="addtocart(${product.id}, ${merchant.id})">Add to Cart</button>
                <button class="buynow" onclick="buynow(${product.id}, ${merchant.id})">Buy Now</button>
            </div>`;
        } else {
            productContainer.innerHTML = `<h2>No products found</h2>`;
        }
    });
}


function addtocart(productid, merchantid) {
    let loginas = localStorage.getItem('loginas');
    let loginid = parseInt(localStorage.getItem('loginid'));


    if (loginas==='customer') {

        let merchants = JSON.parse(localStorage.getItem('merchant'));
        let merchant = merchants.find((m) => m.id === merchantid);

        let customers = JSON.parse(localStorage.getItem('customer'));

        let customer = customers.find((c) => c.id === loginid);
        let index = customers.findIndex((c) => c.id === loginid);

        let product = merchant.product.find((p) => p.id === parseInt(productid));

        let carts = customer.cart.find((c) => c.id === product.id);
        let cartindex = customer.cart.findIndex((c) => c.id === product.id);

        if (carts) {
            carts.quantity += 1;
            carts.totalprice += product.price;
            customer.cart.splice(cartindex, 1, carts);
            customers.splice(index, 1, customer);
            localStorage.setItem('customer', JSON.stringify(customers));
            alert('Product added to cart');
        } else {

            let customercart = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                totalprice: product.price,
                quantity : 1,
                image: product.image
            }
            customer.cart.push(customercart);
            customers.splice(index, 1, customer);
            localStorage.setItem('customer', JSON.stringify(customers));
            alert('Product added to cart');
        }




    }else{
        alert('Please login as customer to add product to cart');
        location.href=  "login";
    }


    
}

function buynow(productid, merchantid) {
    alert('Product added to cart and redirected to checkout page');
}