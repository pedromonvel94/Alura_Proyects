//Variables
let numeroSecreto = 6;
let numeroUsuario = Number(prompt("Me indicas un numero porfavor?"));
let usuarioAdivino = true;

alert("Bienvenido al juego del número secreto");
/*
Bucle while
Funcionara mientras la variable usuarioAdivino sea verdadera.
*/
console.log("El numero del usuario es: " + numeroUsuario)

while(usuarioAdivino){
    if(numeroSecreto == numeroUsuario){
        alert(`Excelente! Adivinaste el numero secreto, el cual era: ${numeroSecreto}!`);
        usuarioAdivino = false
    } else if(numeroSecreto < numeroUsuario){
        alert(`El numero secreto es menor, recuerda que escribiste ${numeroUsuario}`);
        numeroUsuario = Number(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
    } else if(numeroSecreto > numeroUsuario){
        alert(`El numero secreto es mayor, recuerda que escribiste ${numeroUsuario}`);
        numeroUsuario = Number(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
    } else{
        alert("Debes ingresar un numero para continuar");
        numeroUsuario = prompt("Me indicas un numero porfavor?");
    }
}

console.log(numeroUsuario);