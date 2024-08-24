

let user = {
    name: "shivam",
    email: "swsxbsb@gmail.com",
    mobile: "9685430664",
    city: "bsp",
    state: "cg"
};


fetch('http://localhost:8080/api/user', {
    method : "POST",
    headers:{
        'content-type': 'application/json'
    },
    body: JSON.stringify(user)
}).then((response)=>response.json())
   .then((data)=>console.log(data))

// var xhr = new XMLHttpRequest();
// xhr.open('POST', '/api/user/', true);
// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === XMLHttpRequest.DONE) {
//         if (xhr.status === 200) {
//             console.log('Request successful:', xhr.responseText);
//         } else {
//             console.log('Request failed:', xhr.status);
//         }
//     }
// }; 
// xhr.send(data);
