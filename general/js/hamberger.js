
document.addEventListener('DOMContentLoaded', () => {
    let hamberger = document.getElementById('hamberger');
    let nav = document.getElementById('nav');

    hamberger.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none': 'block';  

    });




});

