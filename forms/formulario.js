var formulario = document.getElementById
('formulario'),
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = document.getElementById('error');

function validarNombre(e){
    if(nombre.value == '' || nombre.value == null){
        console.log('Porfavor complete el nombre');
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor complete el nombre</li>'
    }
    else{
        error.style.display = 'none'
    }
}
function validarCorreo(e){
    if(correo.value == '' || correo.value == null){
        console.log('Porfavor complete el sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor complete el correo</li>'

        e.preventDefault();
    }
    else{
        error.style.display = 'none'
    }
}
function validarSexo(e){
    if(sexo.value == '' || sexo.value == null){
        console.log('Porfavor complete el sexo');
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor complete el sexo</li>'

        e.preventDefault();
    }
    else{
        error.style.display = 'none'
    }
}
function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Porfavor acepta los terminos');
        error.style.display = 'block';
        error.innerHTML += '<li>Porfavor acepta los terminos</li>'

        e.preventDefault();
    }
    else{
        error.style.display = 'none'
    }
}
function validarFormulario(e){
    error.innerHTML = ''

    validarNombre(e);
    validarCorreo(e);
    validarSexo(e);
    validarTerminos(e);
}
formulario.addEventListener('submit', validarFormulario);

