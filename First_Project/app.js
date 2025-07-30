
alert("Bienvenido al juego del número secreto");
alert("¡Tienes 5 intentos para encontrar el numero secreto!");

//Variables
let rangoMinimo = parseInt(prompt("Cual quieres que sea el rango menor entre el cual aleatorizar el numero."))
let rangoMaximo = parseInt(prompt("Cual quieres que sea el rango mayor entre el cual aleatorizar el numero."))
let numeroSecreto = Math.floor(Math.random() * (rangoMaximo - rangoMinimo + 1)) + rangoMinimo; //Hay que tener presente que Math.floor lo que hace es aproximar hacia abajo (En otras palabras lo que hace es eliminar la parte decimal), .random crea el numero random y este se multiplica por el numero maximo que queremos colocar en el rango, en este caso como es de 1 a 10 entonces lo multiplico por 10. Ademas al sumarle +1 al final lo que hago es que ahora si coja del 1 al 10, porque antes lo maximo que aproximaba era a 9 y lo minimo era a 0.
let numeroUsuario = Number(prompt(`Me indicas un numero entre ${rangoMinimo} y ${rangoMaximo} porfavor?`));
let usuarioAdivino = false;
let contadorIntentos = 0;
let intentosMaximos = 5;

/*
Bucle while
Funcionara mientras la variable usuarioAdivino sea verdadera.
*/

while(!usuarioAdivino){
    if(contadorIntentos <= intentosMaximos){
        if(numeroSecreto == numeroUsuario){
            contadorIntentos += 1
            alert(`Excelente! Adivinaste que ${numeroSecreto} era el numero secreto y lo hiciste en ${contadorIntentos == 1 ? 'intento':'intentos'}!`); //Aqui estamos usando el operador ternario
            usuarioAdivino = true;
        } else if(numeroSecreto < numeroUsuario){
            alert(`El numero secreto es menor, recuerda que escribiste ${numeroUsuario}`);
            numeroUsuario = parseInt(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
            contadorIntentos += 1;
        } else if(numeroSecreto > numeroUsuario){
            alert(`El numero secreto es mayor, recuerda que escribiste ${numeroUsuario}`);
            numeroUsuario = parseInt(prompt(`Me indicas un número por favor?, numero anterior: ${numeroUsuario}`));
            contadorIntentos += 1;
        } else{
            alert("Debes ingresar un numero para continuar");
            numeroUsuario = parseInt(prompt("Me indicas un numero porfavor?"));
        }
    } else {
        alert("No adivinaste en menos de 5 intentos, juego terminado!")
        break
    }   
}
