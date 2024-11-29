function convertTemperature() {
    var inputValue = document.getElementById('inputValue').value;
    var inputUnit = document.getElementById('inputUnit').value;
    var result = document.getElementById('result');

    if (inputUnit === 'Celsius') {
        var fahrenheit = (inputValue * 9/5) + 32;
        result.innerHTML = inputValue + '°C is ' + fahrenheit.toFixed(2) + '°F';
    } else {
        var celsius = (inputValue - 32) * 5/9;
        result.innerHTML = inputValue + '°F is ' + celsius.toFixed(2) + '°C';
    }
}