// llamada del contenido de los principales objetos 
const textareaPrincipal = document.querySelector('.textarea-principal');
const textareaResultado = document.querySelector('.textarea-resultado');
const ningunMensaje = document.querySelector('.no-mensajes');
const imgMunieco = document.querySelector('.img-munieco');
const btnCopiar = document.querySelector('#btn-copiar');


// función para encriptar si hay texto para encriptar
function encriptarConTexto () {

    // tomar el valor de textareaPrincipal
    let texto = textareaPrincipal.value;

    // encriptar texto
    texto = texto.replaceAll ("e","enter").replaceAll("i","imes").replaceAll("a","ai").replaceAll("o","ober").replaceAll("u","ufat");

    // esconder imagen de muñeco
    imgMunieco.style.display = "none";

    // mostrar textareaResultado
    textareaResultado.style.display = "block";

    // escribir el texto en textareaResultado
    textareaResultado.value = texto;

    // mostrar el botón de copiar
    btnCopiar.style.display = "block";

    // ocultar texto de ningún mensaje encontrado
    ningunMensaje.style.display = "none";

}

//función para indicar que no hay texto para encriptar
function encriptarSinTexto () {

    // tomar el valor de textareaPrincipal
    let texto = textareaPrincipal.value;

    // mostrar texto de ningún mensaje encontrado
    ningunMensaje.style.display = "block";

    // ocultar textareaResultado
    textareaResultado.style.display = "none";

    // mostrar imagen de muñeco
    imgMunieco.style.display = "block";

    // ocultar el botón de copiar
    btnCopiar.style.display = "none";
    
}

// funcion para encriptar el textareaPrincipal
function encriptar () {

    // tomar el valor de textareaPrincipal
    let texto = textareaPrincipal.value;

    // si hay texto para encriptar
    if (texto != "") {
    
        //Se llama a la función para encriptar el texto
        encriptarConTexto();

    }
    
    // si no hay texto para encriptar
    if (texto == "") {

        // se lla ma a la función que indica que no hay texto para encriptar
        encriptarSinTexto();

    }

    // si el texto que hay es el mensaje "Ingrese texto aquí"
    if (texto == "Ingrese texto aquí") {

        // se lla ma a la función que indica que no hay texto para encriptar
        encriptarSinTexto();
        
    }

}

// función para desencriptar si hay texto para encriptar
function desencriptarConTexto () {

    // tomar el valor de textareaPrincipal
    let texto = textareaPrincipal.value;

    // desencriptar texto
    texto = texto.replaceAll ("enter","e").replaceAll("imes","i").replaceAll("ai","a").replaceAll("ober","o").replaceAll("ufat","u");

    // esconder imagen de muñeco
    imgMunieco.style.display = "none";

    // mostrar textareaResultado
    textareaResultado.style.display = "block";

    // escribir el texto en textareaResultado
    textareaResultado.value = texto;

    // mostrar el botón de copiar
    btnCopiar.style.display = "block";

    // ocultar texto de ningún mensaje encontrado
    ningunMensaje.style.display = "none";

}

// funcion para desencriptar el textareaPrincipal
function desencriptar () {

    // tomar el valor de textareaPrincipal
    let texto = textareaPrincipal.value;

    // si hay texto para desencriptar
    if (texto != "") {
    
        //Se llama a la función para desencriptar el texto
        desencriptarConTexto();

    }
    
    // si no hay texto para desencriptar
    if (texto == "") {

        // se llama a la función que indica que no hay texto para desencriptar
        encriptarSinTexto();

    }

    // si el texto que hay es el mensaje "Ingrese texto aquí"
    if (texto == " Ingrese texto aquí ") {

        // se llama a la función que indica que no hay texto para desencriptar
        encriptarSinTexto();
        
    }

}

// función para copiar el texto del textareaResultado
function copiar () {

    let texto = textareaResultado.value;

    // copiar el contenido del textareaResultado al portapapeles
    navigator.clipboard.writeText(texto);

}

