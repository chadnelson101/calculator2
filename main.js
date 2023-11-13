document.addEventListener('DOMContentLoaded', function () {
    const inputDisplay = document.querySelector('.input');
    const outputDisplay = document.querySelector('.output');
    let currentInput = '';

    function updateInput(value) {
        currentInput += value;
        inputDisplay.textContent = currentInput;
    }

    function clearInput() {
        currentInput = '';
        inputDisplay.textContent = currentInput;
        outputDisplay.textContent = '';
    }

    function calculateResult() {
        try {
            const result = eval(currentInput);
            outputDisplay.textContent = result;
        } catch (error) {
            outputDisplay.textContent = 'Error';
        }
    }

    document.querySelectorAll('.key').forEach(function (key) {
        key.addEventListener('click', function () {
            const keyValue = this.dataset.key;

            if (keyValue === 'clear') {
                clearInput();
            } else if (keyValue === '=') {
                calculateResult();
            } else {
                updateInput(keyValue);
            }
        });
    });
});

