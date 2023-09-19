ocument.getElementById('tipCalculatorForm').addEventListener('submit', function(event) {
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