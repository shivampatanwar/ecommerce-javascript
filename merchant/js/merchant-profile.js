// display the merchant profile
let merchants = JSON.parse(localStorage.getItem('merchant'));

let loginid = JSON.parse(localStorage.getItem('loginid'));

let merchant = merchants.find(m => m.id === loginid);

//console.log(merchant);

let profileview = document.getElementById('profileview');

profileview.innerHTML = `
<div class="carddiv">
    <h2>${merchant.name}</h2>
    <p>Email: ${merchant.email}</p>
    <p>Phone: ${merchant.phone}</p>
    <p>GST: ${merchant.gst}</p>
    <p>Address: ${merchant.address}</p>
</div>`;