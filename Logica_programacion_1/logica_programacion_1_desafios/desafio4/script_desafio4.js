/*
Desafíos finales:

1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.

*/

//Primer Desafio
let bienvenida = "Bienvenid@";
console.log(bienvenida);

//Segundo Desafio
let nombre = "Pedro";
console.log(`¡${bienvenida}, ${nombre}!`);

//Tercer Desafio
alert(`¡${bienvenida}, ${nombre}!`);

//Cuarto Desafio
let lenguajeDesarroloUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?");

//Quinto desafio
let valor1 = 25;
let valor2 = 8;

let resultadoSuma = valor1 + valor2;

console.log(`La suma de ${valor1} y ${valor2} es igual a ${resultadoSuma}`);

//Sexto desafio
let resultadoResta = valor1 - valor2;

console.log(`La diferencia de ${valor1} y ${valor2} es igual a ${resultadoResta}`);

//Septimo desafio
let edadUsuario = parseInt(prompt("¿Cual es tu edad?"));

if(edadUsuario > 0 && edadUsuario < 18){
    console.log("El usuario es menor de edad");
    alert("El usuario es menor de edad");
} else if(edadUsuario >= 18){
    console.log("El usuario es mayor de edad");
    alert("El usuario es mayor de edad");
} else{
    console.log("Ingresaste una edad invalida");
    alert("Ingresaste una edad invalida");
}
//Octavo desafio
let numeroUsuario = parseInt(prompt("Escribe un numero, sea positivo, negativo o 0"));

if(numeroUsuario > 0){
    console.log("+");
    alert("+");
} else if(numeroUsuario < 0){
    console.log("-");
    alert("-");
} else{
    console.log("0");
    alert("0");
}

//Noveno desafio
let numerosEnConsola = 1;

while(numerosEnConsola <= 10){
    console.log(numerosEnConsola);
    alert(numerosEnConsola);

    numerosEnConsola++;
}
//Decimo desafio
let nota = Math.floor(Math.random() * 11);

if(nota >= 7){
    console.log("Aprobado");
    alert("Aprobado");
} else{
    console.log("Reprobado");
    alert("Reprobado");
}

//Onceavo desafio
console.log(nota);

//Doceavo desafio
let numero1a10 = Math.floor(Math.random() * 10) + 1;

console.log(numero1a10);

//Treceavo desafio
let numero1a1000 = Math.floor(Math.random() * 1000) + 1;

console.log(numero1a1000);