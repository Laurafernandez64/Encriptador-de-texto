const entrada = document.querySelector(".campo_encriptar");
const salida = document.querySelector(".texto_out");
const resultado = document.querySelector(".resultado");
const texto1 = document.querySelector("h2");
const texto2 = document.querySelector("h3");
const btnCopiar = document.querySelector(".boton_copiar");


function validarTexto (texto) {
    
    let caracteres = /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòùÁÉÍÓÚÀÈÌÒÙ']/g;
    let vacio="";  
      
    if(texto.match(caracteres)){
        alert("No se permiten caracteres especiales ni mayusculas");
        return true; 
    }else if(texto==vacio){
       alert("Ingrese un mensaje para encriptar");
        return true;
   }else {
        return false;
    }
}

function conResultado (){
    entrada.value ="";
    resultado.style.backgroundImage = "none"
    texto1.style.visibility="hidden"
    texto2.style.visibility="hidden"
    btnCopiar.style.visibility="visible"
}


function botonEncriptar () {
    if(validarTexto(entrada.value)==false){
        const textoEncriptado = encriptar(entrada.value)
        salida.value = textoEncriptado
        conResultado();

    }
}

function botonDesencriptar () {
    if(validarTexto(entrada.value)==false){
        const textoEncriptado = desencriptar(entrada.value)
        salida.value = textoEncriptado
        conResultado();
    }
}


function encriptar (stringEncriptada) {
    let llavesEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i = 0; i<llavesEncriptacion.length;i++) {
        if (stringEncriptada.includes(llavesEncriptacion[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(llavesEncriptacion[i][0],llavesEncriptacion[i][1]);
        }    
    }
    return stringEncriptada
}



function desencriptar (stringDesencriptada) {
    let llavesEncriptacion = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i = 0; i<llavesEncriptacion.length;i++) {
        if (stringDesencriptada.includes(llavesEncriptacion[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(llavesEncriptacion[i][1],llavesEncriptacion[i][0]);
        }    
    }
    return stringDesencriptada
}


function copy() {
    navigator.clipboard.writeText(salida.value).then(() => {
        alert('Texto copiado al portapapeles');
    });
}
  

