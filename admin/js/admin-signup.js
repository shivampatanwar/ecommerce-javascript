
// Admin Signup

// get signup button reference and add event listener to it
let signupbtn = document.getElementById('signupbtn');

signupbtn.addEventListener('click', (e) => {
    // prevent form submission
    e.preventDefault();


    // generate admin id
    let adminid = JSON.parse(localStorage.getItem('adminid')) || 1;

    // create admin object
    let admin = {
        id: adminid,
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        adminref: document.getElementById('adminref').value,
        password: document.getElementById('password').value,
        address: document.getElementById('address').value,
    }


    //get admin array of object from local storage
    let admins = JSON.parse(localStorage.getItem('admin')) || [];
    let customers = JSON.parse(localStorage.getItem('customer')) || [];
    let merchants = JSON.parse(localStorage.getItem('merchant')) || [];

    //check if email already exists
    if (admins.find(a => a.email === admin.email) || customers.find(c => c.email === admin.email) || merchants.find(m => m.email === admin.email)) {
        document.getElementById('errormsg').innerHTML = 'Email already exists';
        return;
    }
    //if not, add admin to array and local storage
    else {
        if (admin.adminref==='ADMINREF') {
            //add latest/newest adminid to local storage
            localStorage.setItem('adminid', JSON.stringify(adminid + 1));

            //add admin to local storage
            admins.push(admin);
            localStorage.setItem('admin', JSON.stringify(admins));

            document.getElementById('errormsg').innerHTML = 'Account created successfully';

            //redirect to login page
            location.href = "login";
        }else{
            document.getElementById('errormsg').innerHTML = 'Invalid admin reference';
        }
    }
});