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
    let loginid = localStorage.getItem('loginid');

    if (loginas==='customer') {
        let merchants = JSON.parse(localStorage.getItem('merchant'));
        let merchant = merchants.find((m) => m.id === merchantid);

        console.log(merchants)
        console.log(merchant)

        let customers = JSON.parse(localStorage.getItem('customer'));
        let customer = customers.find((customer) => customer.id === loginid);

        let product = merchant.product.find((p) => p.id === parseInt(productid));

        let customercart = customer.cart.find((c) => c.id === product.id);

        if (customercart) {
            customercart.quantity += 1;
            customercart.totalprice += product.price;


        } else {

            let cart = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
                quantity: 1,
                totalprice: product.price * quantity,
                image: product.image
            }

            console.log(cart)

            customer.cart.push(cart);
        }

    }else{
        location.href=  "login";
    }


    alert('Product added to cart');
}

function buynow(productid, merchantid) {
    alert('Product added to cart and redirected to checkout page');
}