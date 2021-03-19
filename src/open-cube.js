
const topWall = document.querySelector('.wall.top');
const roof = document.getElementById('roof');

topWall.addEventListener('mouseenter', () => {
  roof.classList.add('outside_open');
});

topWall.addEventListener('mouseleave', () => {
  roof.classList.remove('outside_open');
});
