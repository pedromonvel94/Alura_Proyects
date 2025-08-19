//Creo las variables en 0 para que asi la funcion condiciones iniciales las pueda usar y colocar los valores que realmente necesito
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if(numeroDeUsuario === numeroSecreto){
        //El usuario acerto el numero
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}! Efectivamente era ${numeroSecreto} `);

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        //El usuario no acerto el numero
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`El numero secreto es MENOR a ${numeroDeUsuario}`);
        } else{
            asignarTextoElemento('p',`El numero secreto es MAYOR a ${numeroDeUsuario}`);
        }
        intentos++
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    //document.getElementById('valorUsuario') es lo mismo que gracias al #: 
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;  
}

function condicionesIniciales(){
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
}

function reiniciarJuego(){
    //Limpiar la caja
    limpiarCaja();

    //Indicar mensaje de intervalo de numero de inicio
    //Generar el numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();

    //Deshabilitar el boton de nuevo juego
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros:
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles.')
    }else{
        //Si el numero generado esta incluido en la lista hacemos una operacion, de lo contrario hacemos la otra
        if(listaNumerosSorteados.includes(numeroGenerado)){
            //Aqui usamos la recursividad ya que si el numero generado ya esta en la lista, la funcion se llama a si misma otra vez para volver a intentarlo (Crando asi un nuevo numero aleatorio)
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
