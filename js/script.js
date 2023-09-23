function concatenar(nombreApellido, email, celular, mensaje){
    return "Nombre y Apellido: " + nombreApellido + "\n"+
    "Email: " + email + "\n"+
    "Celular: " + celular + "\n"+
    "Mensaje: " + mensaje;
}

//Agrega un listener al evento click del botón btnEnviarMensaje y obtiene los valores de los campos de texto para imprimirlos, utilizando la funcion concatenar.
document.getElementById('btnEnviarMensaje').addEventListener('click', function(){
    let nomApe = document.getElementById('campoNombreApellido').value;
    let correo = document.getElementById('campoCorreo').value;
    let cel = document.getElementById('campoCelular').value;
    let mje = document.getElementById('campoMensaje').value;
    //console.log = "Datos del Formulario Enviado: " + concatenar(nomApe, correo, cel, mje);
    let mensajeFinal = concatenar(nomApe, correo, cel, mje)
    if (nomApe != "" && correo != "" && cel != "" && mje != "")
        alert("Datos del Formulario a enviar: \n\n" + concatenar(nomApe, correo, cel, mje));
});