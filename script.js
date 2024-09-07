const redSlider = document.getElementById('red');
const greenSlider = document.getElementById('green');
const blueSlider = document.getElementById('blue');

const redInput = document.getElementById('red-value');
const greenInput = document.getElementById('green-value');
const blueInput = document.getElementById('blue-value');

const colorPicker = document.getElementById('color-picker');
const colorDisplay = document.getElementById('color-display');
const hexCode = document.getElementById('hex-code');

function updateColor() {
  const red = redSlider.value;
  const green = greenSlider.value;
  const blue = blueSlider.value;

  // Convert RGB to Hexadecimal
  const hex = `#${((1 << 24) + (red << 16) + (green << 8) + +blue).toString(16).slice(1).toUpperCase()}`;
  
  // Update the background color and hex code text
  colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  hexCode.textContent = `Código Hexadecimal: ${hex}`;

  // Sync input fields and color picker with slider values
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;
  colorPicker.value = hex;
}

function updateSliders() {
  const red = redInput.value;
  const green = greenInput.value;
  const blue = blueInput.value;

  // Update sliders based on input values
  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;

  // Update the color display
  updateColor();
}

function updateFromPicker() {
  const hex = colorPicker.value;

  // Convert Hexadecimal to RGB
  const red = parseInt(hex.slice(1, 3), 16);
  const green = parseInt(hex.slice(3, 5), 16);
  const blue = parseInt(hex.slice(5, 7), 16);

  // Update sliders and inputs with the new RGB values
  redSlider.value = red;
  greenSlider.value = green;
  blueSlider.value = blue;
  redInput.value = red;
  greenInput.value = green;
  blueInput.value = blue;

  // Update the color display
  colorDisplay.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  hexCode.textContent = `Código Hexadecimal: ${hex}`;
}

// Event listeners for sliders
redSlider.addEventListener('input', updateColor);
greenSlider.addEventListener('input', updateColor);
blueSlider.addEventListener('input', updateColor);

// Event listeners for text inputs
redInput.addEventListener('input', updateSliders);
greenInput.addEventListener('input', updateSliders);
blueInput.addEventListener('input', updateSliders);

// Event listener for color picker
colorPicker.addEventListener('input', updateFromPicker);

// Initialize the color display
updateColor();
