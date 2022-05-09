const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{8,9}$/
}

const campos = {
	nombre: false,
    apellido: false,
	correo: false,
	telefono: false
}

const validarFormulario = (e) => {
	switch (e.target.name) {
		case "nombre":
			validarCampo(expresiones.nombre, e.target, 'nombre');
		break;
		case "apellido":
			validarCampo(expresiones.apellido, e.target, 'apellido');
		break;
		case "correo":
			validarCampo(expresiones.correo, e.target, 'correo');
		break;
		case "telefono":
			validarCampo(expresiones.telefono, e.target, 'telefono');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.add('form_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo_${campo} .form_input-error`).classList.remove('form_input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo_${campo}`).classList.add('form_grupo-incorrecto');
		document.getElementById(`grupo_${campo}`).classList.remove('form_grupo-correcto');
		document.querySelector(`#grupo_${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo_${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo_${campo} .form_input-error`).classList.add('form_input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	const terminos = document.getElementById('terminos');
	if(campos.nombre && campos.apellido && campos.correo && campos.telefono && terminos.checked ){
		formulario.reset();

		document.getElementById('form_mensaje-exito').classList.add('form_mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form_mensaje-exito').classList.remove('form_mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form_grupo-correcto').forEach((icono) => {
			icono.classList.remove('form_grupo-correcto');
		});
        document.getElementById('form_mensaje').classList.remove('form_mensaje-activo');
        setTimeout(function(){
            location.href = "../PagoSuscripcion.html";
        }, 1000 * 4);
	} else {
		document.getElementById('form_mensaje').classList.add('form_mensaje-activo');
	}
});