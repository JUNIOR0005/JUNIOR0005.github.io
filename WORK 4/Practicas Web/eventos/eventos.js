function crearcaja(){
    var contenedor = document.getElementById('contenedor');
    var caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

var btncaja = document.getElementById('btn-caja');
btncaja.addEventListener('click', crearcaja);