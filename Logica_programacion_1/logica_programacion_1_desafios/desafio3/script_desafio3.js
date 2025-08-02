/*
Desafíos:

1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde ese numero hasta 0 utilizando un bucle 'while' en la consola del navegador.

4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

//Primer Desafio
let contadorPrimerDesafio = 1;

while(contadorPrimerDesafio <= 10){
    alert(contadorPrimerDesafio);
    contadorPrimerDesafio++;
}

//Segundo Desafio
let contadorSegundoDesafio = 10;

while(contadorSegundoDesafio >= 0){
    alert(contadorSegundoDesafio);
    contadorSegundoDesafio--;
}

//Tercer Desafio
let numeroCuentaRegresiva = parseInt(prompt("Porfa dame un numero para la cuenta REGRESIVA"))

while(numeroCuentaRegresiva >= 0){
    console.log("Cuenta regresiva: " + numeroCuentaRegresiva);
    numeroCuentaRegresiva--;
}

//Cuarto Desafio
let numeroCuentaProgresiva = parseInt(prompt("Porfa dame un numero para la cuenta PROGRESIVA"))
let contadorCuartoDesafio = 0

while(contadorCuartoDesafio <= numeroCuentaProgresiva){
    console.log("Cuenta progresiva: " + contadorCuartoDesafio);
    contadorCuartoDesafio++;
}

//Quinto desafio
