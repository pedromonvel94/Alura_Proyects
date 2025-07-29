
alert("Bienvenido al juego del número secreto");

//Variables
let numeroSecreto = 6;
let numeroUsuario = Number(prompt("Me indicas un numero porfavor?"));
let usuarioAdivino = true;
let contadorIntentos = 0;

/*
Bucle while
Funcionara mientras la variable usuarioAdivino sea verdadera.
*/
console.log("El numero del usuario es: " + numeroUsuario)

while(usuarioAdivino){
    if(numeroSecreto == numeroUsuario){
        contadorIntentos += 1
        alert(`Excelente! Adivinaste que ${numeroSecreto} era el numero secreto y lo hiciste en ${contadorIntentos} intentos!`);
        usuarioAdivino = false;
    } else if(numeroSecreto < numeroUsuario){
        alert(`El numero secreto es menor, recuerda que escribiste ${numeroUsuario}`);
        numeroUsuario = Number(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
        contadorIntentos += 1;
    } else if(numeroSecreto > numeroUsuario){
        alert(`El numero secreto es mayor, recuerda que escribiste ${numeroUsuario}`);
        numeroUsuario = Number(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
        contadorIntentos += 1;
    } else{
        alert("Debes ingresar un numero para continuar");
        numeroUsuario = Number(prompt("Me indicas un numero porfavor?"));
    }
}

console.log(numeroUsuario);