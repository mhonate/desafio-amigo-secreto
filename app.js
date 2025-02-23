
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crea array vacio

let amigos = [];


//1.- Capturar  el valor del campo de entrada:

function agregarAmigo() {
    
    const ingresarAmigo = document.getElementById('amigo');
    const nombreAmigo = ingresarAmigo.value.trim();


// 2.- Validar la entrada

if (nombreAmigo ===''){
    alert('Por favor, inserte un nombre.');
    return;
}
    amigos.push(nombreAmigo)
    ingresarAmigo.value = '';
    actualizaListaAmigos();
}


//3.- Agregar y actualizar el array de amigos

function actualizaListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

     //4.-Limpiar el campo de entrada
    listaAmigos.innerHTML ='';

    amigos.forEach((amigos, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${index + 1}.- ${amigos}`;
        listaAmigos.appendChild(li);
    });
}


//4.- Sortear amigos

function sortearAmigo(){
    //5.-Validar que haya amigos en la lista
    if (amigos.length == 0){
        alert('No hay amigos en la lista');
        return;
    }
    
    //6.-Generar un índice aleatorio
    const indiceAmigo = Math.floor(Math.random() * amigos.length );

    //7.-Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAmigo];


    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `El amigo sorteado es:  ${amigoSorteado}!!!`;
    

}


