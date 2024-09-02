
// Customer Signup 

// get signup button reference and add event listener to it
let signupbtn = document.getElementById('signupbtn');

signupbtn.addEventListener('click', (e) => {

    // prevent form submission
    e.preventDefault();

    // generate customer id
    let merchantss = JSON.parse(localStorage.getItem('merchant')) || [];
    let merchantid = merchantss.length+1;




    // create customer object
    let merchant = {
        id: merchantid,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        gst: document.getElementById('gst').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
        product: [],
        currentorder: [],
        previousorder: []
    }


    //get customer/merchant/admin array of object from local storage
    let customers = JSON.parse(localStorage.getItem('customer')) || [];
    let merchants = JSON.parse(localStorage.getItem('merchant')) || [];
    let admins = JSON.parse(localStorage.getItem('admin')) || [];


    //check if email already exists
    if (customers.find(c => c.email === merchant.email) || merchants.find(m => m.email === merchant.email) || admins.find(a => a.email === merchant.email)) {
        document.getElementById('errormsg').innerHTML = 'Email already exists';
        return;
    }
    //if not, add customer to array and local storage
    else {

        //add customer to local storage
        merchants.push(merchant);
        localStorage.setItem('merchant', JSON.stringify(merchants));

        document.getElementById('errormsg').innerHTML = 'Account created successfully';

        //redirect to login page
        location.href = "login";

    }


});









