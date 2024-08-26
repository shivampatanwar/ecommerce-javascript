
// display all the merchants 
let merchants = JSON.parse(localStorage.getItem('merchant'));

let cardview = document.getElementById('cardview');

if (!merchants) {
    cardview.innerHTML = 'No merchants available'
} else {
    merchants.forEach((merchant) => {
        cardview.innerHTML += `
            <div class="carddiv">
                <h2>${merchant.name}</h2>
                <p>Email: ${merchant.email}</p>
                <p>Phone: ${merchant.phone}</p>
                <p>GST: ${merchant.gst}</p>
                <p>Address: ${merchant.address}</p>
                <button onclick="showMerchantDetails(${merchant.id})">View Details</button>
            </div>
        `;
    });
}











