

let home = document.getElementById('home');


let cart = document.getElementById('cart');
let order = document.getElementById('order');
let customerprofile = document.getElementById('customerprofile');

let admincustomer = document.getElementById('admincustomer');
let adminmerchant = document.getElementById('adminmerchant');
let adminprofile = document.getElementById('adminprofile');


let product = document.getElementById('product');
let currentorder = document.getElementById('currentorder');
let previousorder = document.getElementById('previousorder');
let merchantprofile = document.getElementById('merchantprofile');

let signup = document.getElementById('signup');
let login = document.getElementById('login');
let logout = document.getElementById('logout');



// Customer
cart.style.display = 'none';
order.style.display = 'none';
customerprofile.style.display = 'none';


//Admin
admincustomer.style.display = 'none';
adminmerchant.style.display = 'none';
adminprofile.style.display = 'none';


//Merchant
product.style.display = 'none';
currentorder.style.display = 'none';
previousorder.style.display = 'none';
merchantprofile.style.display = 'none';

//login and signup
logout.style.display = 'none';

logout.addEventListener('click', (e) => {
    e.preventDefault();
    localStorage.removeItem('loginas');
    localStorage.removeItem('loginid');
    location.href = "index";
});




let loginas = localStorage.getItem('loginas');

if(loginas==='customer'){
    cart.style.display = 'block';
    order.style.display = 'block';
    customerprofile.style.display = 'block';
    logout.style.display = 'block';
    signup.style.display = 'none';
    login.style.display = 'none';

}else if(loginas==='merchant'){
    merchantproduct.style.display = 'block';
    merchantcurrentorder.style.display = 'block';
    merchantpreviousorder.style.display = 'block';
    merchantprofile.style.display = 'block';
    logout.style.display = 'block';
    signup.style.display = 'none';
    login.style.display = 'none';

}else if(loginas==='admin'){
    admincustomer.style.display = 'block';
    adminmerchant.style.display = 'block';
    adminprofile.style.display = 'block';
    logout.style.display = 'block';
    signup.style.display = 'none';
    login.style.display = 'none';
}


