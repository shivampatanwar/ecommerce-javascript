
let hamberger = document.getElementById('hamberger');

hamberger.addEventListener('click', () => {
  let nav = document.getElementById('nav');
  if(nav.style.display === 'block'){
    nav.style.display = 'none';
  }else{
    nav.style.display = 'block';
  }
});