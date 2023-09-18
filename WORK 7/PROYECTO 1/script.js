document.getElementById('tipCalculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    calculateTip();
});

document.getElementById('deleteButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    var inputFields = document.querySelectorAll('input');
    
    for (var i = 0; i < inputFields.length; i++) {
    inputFields[i].value = '';
    }
});

document.getElementById('clearButton').addEventListener('click', function(event) {
    event.preventDefault();
    
    document.getElementById('result').textContent = '';
});

function calculateTip() {
    var totalAmount = parseFloat(document.getElementById('totalAmount').value);
    var tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    var tipAmount = (totalAmount * tipPercentage) / 100;

    document.getElementById('result').textContent = 'Propina: $' + tipAmount.toFixed(2);
}