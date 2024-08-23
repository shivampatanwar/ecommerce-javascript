
document.addEventListener('DOMContentLoaded', () => {
  let hamberger = document.getElementById('hamberger');
  let nav = document.getElementById('nav');

  // Initialize nav display style
  nav.style.display = 'none';

  hamberger.addEventListener('click', (event) => {
    event.stopPropagation();
    nav.style.display = nav.style.display === 'none' ? 'block' : 'none';
  });

  document.addEventListener('click', (event) => {
    if (nav.style.display === 'block' && !nav.contains(event.target) && event.target !== hamberger) {
      nav.style.display = 'none';
    }
  });
});

