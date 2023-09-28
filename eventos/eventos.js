function crearCaja_(){
    var contenedor = document.getElementById('contenedor');
    var caja = document.createElement('div');
    caja.className = 'caja';
    contenedor.appendChild(caja);
}

var btnCaja = documento.getElementById('btn-caja');
btnCaja.addEventListener('click', crearCaja);