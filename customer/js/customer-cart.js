let customers = JSON.parse(localStorage.getItem('customer'));
let loginass = localStorage.getItem('loginas');
let loginid = parseInt(localStorage.getItem('loginid'));


let cartview = document.getElementById('cartview');

if (loginass === 'customer') {
    let customer = customers.find(c => c.id === loginid);

    let cart = customer.cart;

    cart.forEach(element => displayProduct(element));

}

else {

}


// Display the product in the product container
function displayProduct(element) {

    if (cart.length !== 0) {
        cartview.innerHTML += `
            <div class="cartdiv">
                <div class="left">
                    <img class="cddiv" src="${element.image}" alt="${element.name}">
                    <div  class="desc">
                        <h2>${element.name}</h2>
                        <p class="descrition">Descrition: ${element.description}</p>
                    
                    </div>
                     
                </div>
               
                <div class="right">
                    <p class="price">Price: &#8377; ${element.price.toFixed(2)}</p>
                    <p class="total">Total Price: &#8377; ${element.totalprice.toFixed(2)}</p>
                   <div class="idbtn">
                        <button class="increase" onclick="increase(${element.id})">-</button>
                        <p>${element.quantity}</p>
                        <button class="decrease" onclick="decrease(${element.id})">+</button>
                   </div>

                    <button class="remove cddiv" onclick="removeFromCart(${element.id})">Delete</button>
                    
                </div>

                

                

                
            </div>`;
    } else {
        productContainer.innerHTML = `<h2>No products found</h2>`;
    }

}