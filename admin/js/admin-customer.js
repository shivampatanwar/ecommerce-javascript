
// display all the customers 
let customers = JSON.parse(localStorage.getItem('customer'));

let cardview = document.getElementById('cardview');

if (!customers) {
    cardview.innerHTML = 'No customers available'
}else{

    customers.forEach((customer) => {

        cardview.innerHTML += `
            <div class="carddiv">
                <h3>${customer.name}</h3>
                <p>Email: ${customer.email}</p>
                <p>Phone: ${customer.phone}</p>
                <p>Address: ${customer.address}</p>
            </div>
        `;
    
    


    });

}







