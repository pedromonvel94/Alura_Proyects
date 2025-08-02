/*
Desafíos
1. Crear una función que muestre "¡Hola, mundo!" en la consola.
2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.
4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.
6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
*/

asignarTextoElemento('titulo', 'Bienvenidos al Segundo Desafio');
asignarTextoElemento("tituloContainerNombre", 'Escribe tu nombre: ')
asignarTextoElemento('tituloContainerNumero', 'Encontremos el doble de tu numero: ')
asignarTextoElemento('tituloContainerTripleNumero', 'Encontremos el promedio de estos 3 numeros!: ')

function asignarTextoElemento(idElemento, texto){
    let elementoHtml = document.getElementById(idElemento);
    elementoHtml.innerHTML = texto;
    return;  
}

function obtenerValorIngresado(idInput){
    return document.getElementById(idInput).value;
}

function clickButtonName(){
    let valorIngresado = obtenerValorIngresado('nombreUsuario');
    asignarTextoElemento('saludoNombreUsuario', `¡Hola, ${valorIngresado}!`);
}

function clickButtonNumber(){
    let valorIngresado = parseInt(obtenerValorIngresado('numeroUsuario'));

    asignarTextoElemento('dobleNumeroUsuario', `El doble de tu numero es: ${valorIngresado * 2}`)
}

function clickButtonTripleNumber(){
    let primerValorIngresado = parseFloat(obtenerValorIngresado('primerNumeroUsuario'));
    let segundoValorIngresado = parseFloat(obtenerValorIngresado('segundoNumeroUsuario'));
    let tercerValorIngresado = parseFloat(obtenerValorIngresado('tercerNumeroUsuario'));

    asignarTextoElemento('promedioNumerosUsuario', `El promedio de los 3 numeros que ingresaste es: ${((primerValorIngresado + segundoValorIngresado + tercerValorIngresado)/3).toFixed(2)}`)
}