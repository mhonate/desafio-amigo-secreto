
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea array vacio

let amigos = [];


//1.- Capturar  el valor del campo de entrada:

function agregarAmigo() {
    
    const ingresarAmigo = document.getElementById('amigo');
    const nombreAmigo = ingresarAmigo.value.trim()


// 2.- Validar la entrada

if (nombreAmigo ===''){
    alert('Por favor, inserte un nombre.');
    return;
}
    amigos.push(nombreAmigo)
    ingresarAmigo.value = '';
    actualizaListaAmigos();
}

