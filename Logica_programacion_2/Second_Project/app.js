let numeroSecreto = generarNumeroSecreto();
let intentos = 1;
console.log(numeroSecreto);

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log('Numero de intentos: ' + intentos);


    if(numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'intento':'intentos'}! Efectivamente era ${numeroSecreto} `);
    }else{
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p',`El numero secreto es MENOR a ${numeroDeUsuario}`);
        } else{
            asignarTextoElemento('p',`El numero secreto es MAYOR a ${numeroDeUsuario}`);
        }
        intentos++
    }
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;  
}

asignarTextoElemento('h1', 'Juego del numero secreto');
asignarTextoElemento('p', 'Indica un numero del 1 al 100');

function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}
