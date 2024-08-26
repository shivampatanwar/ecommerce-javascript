
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
    let customers = JSON.parse(localStorage.getItem('customer'));
    let merchants = JSON.parse(localStorage.getItem('merchant'));
    let admins = JSON.parse(localStorage.getItem('admin'));




    // if no customer, merchant or admin array found in local storage, show error message
    if (!customers && !merchants && !admins) {
        alert("Acoount doesn't exists");
        location.href = 'customer-signup';
    } else {

        if (customers) {
            //check if the customer email and password are correct
            let customer = customers.find(c => c.email === email);
            if (customer.email === email && customer.password === password) {

                //

                //redirect to customer dashboard
                location.href = "customer-home";
            }else if ( customer.email !== email) {
                alert('Incorrect Email');
            }
            else {
                alert('Incorrect Password');
            }

        }
        else if (merchants) {
            let merchant = merchants.find(m => m.email === email);
            //check if the merchant email and password are correct
            if (merchant.email === email && merchant.password === password) {
                //redirect to merchant dashboard
                location.href = "merchant-home";
            }else if ( merchant.email !== email) {
                alert('Incorrect Email');
            }
            else {
                alert('Incorrect Password');
            }
        }
        else if (admins) {
            let admin = admins.find(a => a.email === email);
            //check if the admin email and password are correct
            if (admin.email === email && admin.password === password) {
                //redirect to admin dashboard
                location.href = "admin-home";
            }
            else if ( admin.email !== email) {
                alert('Incorrect Email');
            }
            else {
                alert('Incorrect Password');
            }
        }
        else {
            alert('Invalid email or password');
        }
    }

});


