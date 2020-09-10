var numberOnDisplay = '';
var currentOperator = '';
var numberInMemory = '';

function addNumberToDisplay(symbol) {
    
    if (symbol === '.') {
        if (numberOnDisplay.lenght === 0) {
            return;
        }
        if (numberOnDisplay.indexOf('.') >= 1) {
            return;
        }
    }
    numberOnDisplay += symbol;
    updateDisplay();
}

function registerOperation(operator) {
    currentOperator = operator;
    numberInMemory = numberOnDisplay;
    clearDisplay();
}

function clearDisplay() {
    numberOnDisplay = '';
    updateDisplay();
}

function getRessult() {
    if (currentOperator === '+') {
        numberOnDisplay = parseFloat (numberInMemory) + parseFloat (numberOnDisplay);
    }
    if (currentOperator === '-') {
        numberOnDisplay = parseFloat (numberInMemory) - parseFloat (numberOnDisplay);
    }
    if (currentOperator === '*') {
        numberOnDisplay = parseFloat (numberInMemory) * parseFloat (numberOnDisplay);
    }
    if (currentOperator === '/') {
        numberOnDisplay = parseFloat (numberInMemory) / parseFloat (numberOnDisplay);
    }
    updateDisplay();
}

function updateDisplay() {
    var displayEl = document.getElementById('screen');
    displayEl.innerText = numberOnDisplay;
}