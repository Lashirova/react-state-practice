function randomNumber() {
  return Math.floor(Math.random() * 255) + 1;
}

function changeColor() {
  const redColor = randomNumber();
  const greenColor = randomNumber();
  const blueColor = randomNumber();
  const rgbCode = `rgb(${redColor},${greenColor},${blueColor})`;
  document.getElementById('container').style.backgroundColor = rgbCode;
  document.getElementById('change_color').innerText = rgbCode;
}

document.getElementById('change_color').addEventListener('click', changeColor)