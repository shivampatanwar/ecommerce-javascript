
// display all the customers 
let customers = JSON.parse(localStorage.getItem('customer'));

let cardview = document.getElementById('cardview');

if (!customers) {
    cardview.innerHTML = 'No customers available'
}else{

    customers.forEach((customer) => {

        cardview.innerHTML += `

            
        
        
        
        `;
    
    


    });

}







