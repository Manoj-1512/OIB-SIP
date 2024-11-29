
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function backspace() {
    const display = document.getElementById('display');
    display.innerText = display.innerText.slice(0, -1) || '0';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        if (display.innerText.includes('√')) {
            display.innerText = Math.sqrt(parseFloat(display.innerText.replace('√', '')));
        } else {
            display.innerText = eval(display.innerText);
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}