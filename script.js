const textarea = document.querySelector(".texto");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".btncopiar")


function btnencripta(){
    const texto = encriptar(textarea.value)
    mensaje.value = texto
    textarea.value = "";
    mensaje.style.backgroundImage = "none";

}

function encriptar(stringEncriptado){

    let matrizCodigo = [["e", "enter",], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptado = stringEncriptado.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }

    }
    return stringEncriptado
}



function btndesencripta(){
    const texto = desencriptar(textarea.value)
    mensaje.value = texto
    textarea.value = "";

}


function desencriptar(stringDesencriptada){

    let matrizCodigo = [["e", "enter",], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])


        }

    }
    return stringDesencriptada
}

