const temperatureForm = document.getElementById('temperature-form');
const temperatureInput = document.getElementById('temperature');
const fromUnitSelect = document.getElementById('from-unit');
const toUnitSelect = document.getElementById('to-unit');
const convertButton = document.getElementById('convert');
const resultElement = document.getElementById('result');

convertButton.addEventListener('click', (e) => {
  e.preventDefault(); // Prevent the form from submitting and reloading the page
  convertTemperature();
});

function convertTemperature() {
  const temperature = parseFloat(temperatureInput.value);
  const fromUnit = fromUnitSelect.value;
  const toUnit = toUnitSelect.value;

  if (isNaN(temperature)) {
    resultElement.textContent = 'Invalid input. Please enter a number.';
    return;
  }

  let convertedTemperature;

  if (fromUnit === toUnit) {
    resultElement.textContent = `No conversion needed. ${temperature} ${fromUnit} is equal to ${temperature} ${toUnit}`;
    return;
  }

  switch (fromUnit) {
    case 'celsius':
      switch (toUnit) {
        case 'fahrenheit':
          convertedTemperature = temperature * 9 / 5 + 32;
          break;
        case 'kelvin':
          convertedTemperature = temperature + 273.15;
          break;
      }
      break;
    case 'fahrenheit':
      switch (toUnit) {
        case 'celsius':
          convertedTemperature = (temperature - 32) * 5 / 9;
          break;
        case 'kelvin':
          convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
          break;
      }
      break;
    case 'kelvin':
      switch (toUnit) {
        case 'celsius':
          convertedTemperature = temperature - 273.15;
          break;
        case 'fahrenheit':
          convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
          break;
      }
      break;
  }

  resultElement.textContent = `${temperature} ${fromUnit} is equal to ${convertedTemperature.toFixed(2)} ${toUnit}`;
}