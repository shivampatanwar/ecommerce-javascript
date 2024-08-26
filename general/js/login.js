window.addEventListener("DOMContentLoaded", function () {

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


        function errorMsg(message) {
            document.getElementById('errormsg').innerHTML = message;
        }


        if (customers.find(c => c.email == email)) {
            //check if the customer email and password are correct
            let customer = customers.find(c => c.email == email);
            if (customer.email === email && customer.password === password) {

                //session
                localStorage.setItem('loginas', 'customer');
                localStorage.setItem('loginid', customer.id);

                //redirect to customer dashboard
                location.href = "index";
            } else if (customer.email !== email) {
                errorMsg('Incorrect Email');
            }
            else {
                errorMsg('Incorrect Password');
            }

        }
        else if (merchants.find(m => m.email == email)) {
            let merchant = merchants.find(m => m.email == email);
            //check if the merchant email and password are correct
            if (merchant.email === email && merchant.password === password) {

                //session 
                localStorage.setItem('loginas', 'merchant');
                localStorage.setItem('loginid', merchant.id);


                //redirect to merchant dashboard
                location.href = "index";
            } else if (merchant.email !== email) {
                errorMsg('Incorrect Email');
            }
            else {
                errorMsg('Incorrect Password');
            }
        }
        else if (admins.find(a => a.email == email)) {
            let admin = admins.find(a => a.email == email);
            //check if the admin email and password are correct
            if (admin.email === email && admin.password === password) {

                //session
                localStorage.setItem('loginas', 'admin');
                localStorage.setItem('loginid', admin.id);


                //redirect to admin dashboard
                location.href = "index";
            }
            else if (admin.email !== email) {
                errorMsg('Incorrect Email');
            }
            else {
                errorMsg('Incorrect Password');
            }
        } else {
            errorMsg("Acoount doesn't exists create one");
        }

    });

})
