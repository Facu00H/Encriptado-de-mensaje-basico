let copiar = document.querySelector('.copiar');
let encriptar = document.querySelector('.encriptar');
let desencriptar = document.querySelector('.desencriptar');
let ingreso = document.querySelector('#input1');
let resultado = document.querySelector('#input2');

//Funcion para cortar el resultado.

copiar.onclick = function copyToClipBoard() {
    resultado.select();
    document.execCommand("cut");

        alert("El mensaje fue copiado con exito!");
    //}
    
}

// Funciones para encriptar y desencriptar.

encriptar.onclick = function encriptado(str) {
    str.preventDefault();
    str = ingreso.value;
    //if(str === ''){
      //  alert('Debe ingresar un mensaje en el campo de texto')
    //}else{
        str = str.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
        resultado.value = str.toLowerCase();
        ingreso.value = "";
    //}
    
}

desencriptar.onclick = function desencriptado (str){
    str.preventDefault()
    str = ingreso.value;
    //if(str === ''){
      //  alert('Debe ingresar un mensaje en el campo de texto')
    //}else{
        str = str.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
        resultado.value = str.toLowerCase();
        ingreso.value = "";
    //}
}

console.log(resultado)











