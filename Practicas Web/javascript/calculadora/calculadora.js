function suma(){
    var numero1 = parseFloat(document.getElementById('numero1').
    value);
    var numero2 = parseFloat(document.getElementById('numero2').
    value);
    var resultado = numero1 + numero2;

    document.getElementById('resultado').value = resultado;
}

function resta(){
    var numero1 = parseFloat(document.getElementById('numero1').
    value);
    var numero2 = parseFloat(document.getElementById('numero2').
    value);
    var resultado = numero1 - numero2;

    document.getElementById('resultado').value = resultado;
}

function multi(){
    var numero1 = parseFloat(document.getElementById('numero1').
    value);
    var numero2 = parseFloat(document.getElementById('numero2').
    value);
    var resultado = numero1 * numero2;

    document.getElementById('resultado').value = resultado;
}

function divi(){
    var numero1 = parseFloat(document.getElementById('numero1').
    value);
    var numero2 = parseFloat(document.getElementById('numero2').
    value);
    var resultado = numero1 / numero2;

    document.getElementById('resultado').value = resultado;
}

function residuo(){
    var numero1 = parseFloat(document.getElementById('numero1').
    value);
    var numero2 = parseFloat(document.getElementById('numero2').
    value);
    var resultado = numero1 % numero2;

    document.getElementById('resultado').value = resultado;
}