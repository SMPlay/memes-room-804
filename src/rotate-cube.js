const cube = document.querySelector('.cube');

// initial rotate. Get from css variables
let rotateX = -30;
let rotateY = 38;

const rotateCube = ({ keyCode }) => {
  switch (keyCode) {
    case 37:
      rotateY -= 4;
      break;
    case 38:
      rotateX += 4;
      break;
    case 39:
      rotateY += 4;
      break;
    case 40:
      rotateX -= 4;
      break;
  }

  cube.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
}

document.addEventListener('keydown', rotateCube);
