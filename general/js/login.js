
// Customer or Merchant or Admin Login

// get login button reference and add event listener to it
let loginbtn = document.getElementById('loginbtn');

loginbtn.addEventListener('click', (e) => {

    // prevent form submission
    e.preventDefault();


    //dom method for form submission
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;


    //get customer array of object from local storage
    let customers = JSON.parse(localStorage.getItem('customer')) || [];
    let merchants = JSON.parse(localStorage.getItem('merchant')) || [];
    let admins = JSON.parse(localStorage.getItem('admin')) || [];

    let customer = customers.find(c => c.email === email)
    let merchant = merchants.find(m => m.email === email)
    let admin = admin.find(a => a.email === email)


    //check if the customer email and password are correct
    if (customer.email === email && customer.password === password) {
        //redirect to customer dashboard
        location.href = "customer-home.html";

    }
    //check if the merchant email and password are correct
    else if (merchant.email === email && merchant.password === password) {
        //redirect to merchant dashboard
        location.href = "merchant-home.html";
    }
    //check if the admin email and password are correct
    else if (admin.email === email && admin.password === password) {
        //redirect to admin dashboard
        location.href = "admin-home.html";
    }
    //if not, show error message
    else {
        alert('Invalid email or password');
        return;
    }

});


