
// display all the merchants 
let merchants = JSON.parse(localStorage.getItem('merchant'));

let cardview = document.getElementById('cardview');

if (!merchants) {
    cardview.innerHTML = '<h2>No merchants available</h2>'
} else {
    merchants.forEach((merchant) => {
        cardview.innerHTML += `
            <div class="carddiv">
                <h2>${merchant.name}</h2>
                <p>Email: ${merchant.email}</p>
                <p>Phone: ${merchant.phone}</p>
                <p>GST: ${merchant.gst}</p>
                <p>Address: ${merchant.address}</p>
            </div>
        `;
    });
}











