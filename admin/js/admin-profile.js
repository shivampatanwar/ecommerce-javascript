// display all the admins 
let admins = JSON.parse(localStorage.getItem('admin'));

let loginid = JSON.parse(localStorage.getItem('loginid'));

let admin = admins.find(a => a.id === loginid)

console.log(admin);

let profileview = document.getElementById('profileview');

profileview.innerHTML = `
<div class="carddiv">
    <h2>${admin.name}</h2>
    <p>Email: ${admin.email}</p>
    <p>Phone: ${admin.phone}</p>
    <p>Address: ${admin.address}</p>
</div>`;


