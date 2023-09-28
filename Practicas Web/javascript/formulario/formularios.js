// (funcion){
    var formulario = document.getElementById
    ('formulario',)
    nombre = formulario.nombre,
    correo = formulario.correo,
    sexo = formulario.sexo,
    terminos = formulario.terminos,
    error = documento.getElementById('error');

    function validarNombre(e){
        if(nombre.value == '' || nombre.value == null){
            console.log('por favor completa el nombre');
            error.style.display = 'block';
            error.innerHTML += '<li>por favor completa el nombre</li>';
            e.preventDefault();
        }else{
            error.stle.display = 'none';
        }
    }

    function validarCorreo(e){
        if(nombre.value == '' || correo.value == null){
            console.log('por favor completa el correo');
            error.style.display = 'block';
            error.innerHTML += '<li>por favor completa el correo</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarSexo(e){
        if(nombre.value == '' || sexo.value == null){
            console.log('por favor completa el sexo');
            error.style.display = 'block';
            error.innerHTML += '<li>por favor completa el sexo</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarTermino(e){
        if(nombre.value == '' || termino.value == false){
            console.log('por favor completa el termino');
            error.style.display = 'block';
            error.innerHTML += '<li>por favor completa el termino</li>';
            e.preventDefault();
        }else{
            error.style.display = 'none';
        }
    }

    function validarFormulario(e){
        error.innerHTML ='';
        validarNombre(e);
        validarcorreo(e);
        validarsexo(e);
        validartermino(e);
    }

    formulario.addEventListener('submit', validarFormulario);
