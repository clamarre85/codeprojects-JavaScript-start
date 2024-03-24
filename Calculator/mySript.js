document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    let currentInput = '0';

    function updateDisplay() {
        display.textContent = currentInput;
    }

    function clear() {
        currentInput = '0';
        updateDisplay();
    }

    function calculate() {
        try {
            currentInput = eval(currentInput).toString();
        } catch (error) {
            currentInput = 'Error';
        }
        updateDisplay();
    }

    document.querySelectorAll(".number").forEach(function(button) {
        button.addEventListener("click", function() {
            if (currentInput === '0') {
                currentInput = button.textContent;
            } else {
                currentInput += button.textContent;
            }
            updateDisplay();
        });
    });

    document.querySelectorAll(".operator").forEach(function(button) {
        button.addEventListener("click", function() {
            currentInput += button.textContent;
            updateDisplay();
        });
    });

    document.getElementById("decimal").addEventListener("click", function() {
        if (!currentInput.includes('.')) {
            currentInput += '.';
            updateDisplay();
        }
    });

    document.getElementById("equals").addEventListener("click", calculate);

    document.getElementById("clear").addEventListener("click", clear);
});











