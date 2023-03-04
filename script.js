/* app.js */

particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded');
});

const particleLinks = document.querySelectorAll('.particle-link');

particleLinks.forEach(link => {
  link.addEventListener('mouseenter', () => {
    particleJS.interactivity.mouse.position = {
      x: link.getBoundingClientRect().x + (link.offsetWidth / 2),
      y: link.getBoundingClientRect().y + (link.offsetHeight / 2)
    };
  });
  link.addEventListener('mouseleave', () => {
    particleJS.interactivity.mouse.position = null;
  });
});
