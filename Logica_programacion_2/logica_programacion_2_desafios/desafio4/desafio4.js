/* 
Desafíos:

Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.

Crea una función que calcule el valor del factorial de un número pasado como parámetro.

Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en COP (moneda colombiana,si deseas puedes hacerlo con el valor del dólar en tu país). Para esto, considera la cotización del dólar igual a COP$4.020.

Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.

Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

convertirTextoElemento('titulo_cardImc', 'Calculadora de IMC');
convertirTextoElemento('titulo_cardFactorial', 'Calculadora de Factoriales')
convertirTextoElemento('titulo_cardDivisas', 'Conversor de Divisas')
convertirTextoElemento('titulo_cardAreaRectangulo', 'Calculadora de area');
convertirTextoElemento('subtitulo_largo', 'Largo:');
convertirTextoElemento('subtitulo_ancho', 'Ancho:');
convertirTextoElemento('titulo_cardCirculo', 'Hallar Area y Perimetro de un circulo segun su Radio');

function placeholderDeInput(idInput, texto){
    document.getElementById(idInput).value = '';
    document.getElementById(idInput).placeholder = texto;
}

function convertirTextoElemento(id, texto){
    let idElementoHtml = document.getElementById(id);
    idElementoHtml.innerHTML = texto;
}

function calcImc(){
    let altura = parseFloat(document.getElementById('altura_usuario').value);
    let peso = parseFloat(document.getElementById('peso_usuario').value);

    if(isNaN(altura)){
        placeholderDeInput('altura_usuario', '⚠ Ingresa un valor válido');
        convertirTextoElemento('texto_resultadoImc', `No puedes dejar el campo de altura vacio, coloca un valor valido.`);
        return;
    } else if(isNaN(peso)){
        placeholderDeInput('peso_usuario', '⚠ Ingresa un valor válido');
        convertirTextoElemento('texto_resultadoImc', `No puedes dejar el campo de peso vacio, coloca un valor valido.`);
        return;
    } else{
        let imc = peso/altura**2;
        convertirTextoElemento('texto_resultadoImc', `Tu índice de masa corporal es: ${imc.toFixed(2)}`);
    }
    return;
}

function calcFactorial(){
    let numeroUsuario = parseInt(document.getElementById('numero_usuario').value);

    if(numeroUsuario === 0 || numeroUsuario === 1){
        convertirTextoElemento('texto_resultadoFactorial', `El factorial de ${numeroUsuario} es: 1`);
        return;
    }else if(isNaN(numeroUsuario) || numeroUsuario < 0){
        placeholderDeInput('numero_usuario', '⚠ Ingresa un valor válido')
        convertirTextoElemento('texto_resultadoFactorial', '⚠ Ingresa un valor válido, los numeros NEGATIVOS no tienen factorial');
        return;
    } else{
        let resultadoFactorial = numeroUsuario;
        for(let i = numeroUsuario - 1; i > 0; i--){
            resultadoFactorial *= i;
        }
        convertirTextoElemento('texto_resultadoFactorial', `El factorial de ${numeroUsuario} es: ${resultadoFactorial}`);
    }
    return;
}

function conversorDivisas(){
    let divisa1 = document.getElementById('primerOpcion').value;
    let divisa2 = document.getElementById('segundaOpcion').value;
    let inputDivisa1 = parseFloat(document.getElementById('dineroUsuario').value);
    let salida = document.getElementById('dineroConvertido');

    if (isNaN(inputDivisa1)) {
        placeholderDeInput('dineroConvertido', '⚠ Ingresa un valor válido');
        return;
    }

    if((divisa1 === 'USD' && divisa2 === 'USD') || (divisa1 === 'COP' && divisa2 === 'COP')||(divisa1 === 'EUR' && divisa2 === 'EUR')){
        placeholderDeInput('dineroConvertido', '⚠ Es la misma Divisa');
        return;
    } else if(divisa1 === 'USD'){
        salida.value = (divisa2 === 'COP') ? inputDivisa1 * 4020 : inputDivisa1 * 0.856385;
    } else if(divisa1 === 'COP'){
        salida.value = (divisa2 === 'EUR') ? inputDivisa1 * 0.000213163 : inputDivisa1 * 0.000248903;
    } else{
        salida.value = (divisa2 === 'COP') ? inputDivisa1 * 4690.25 : inputDivisa1 * 1.16731;
    } 
}

function areaDeRectangulo(){
    let largo = parseFloat(document.getElementById('largo').value);
    let ancho = parseFloat(document.getElementById('ancho').value);
    let resultadoArea = largo * ancho

    if(isNaN(largo)){
        placeholderDeInput('largo', '⚠ Ingresa un valor válido');
        convertirTextoElemento('texto_resultadoImc', `No puedes dejar el campo de largo vacio, coloca un valor valido.`);
    } else if(isNaN(ancho)){
        placeholderDeInput('ancho', '⚠ Ingresa un valor válido');
        convertirTextoElemento('texto_resultadoImc', `No puedes dejar el campo de ancho vacio, coloca un valor valido.`);
    } else {
        convertirTextoElemento('texto_resultadoAreaRectangulo', `El area resultante de la multiplicacion entre el largo: ${largo} cm y el ancho: ${ancho} cm es: ${resultadoArea} cm².`)
    }
}

function areaYPerimetroCirculo(){
    let radio = parseFloat(document.getElementById('radio_usuario').value);
    let area = 3.14*(radio**2);
    let perimetroCirculo = (2*3.14)*radio

    if(isNaN(radio)){
        placeholderDeInput('radio', '⚠ Ingresa un valor válido');
        convertirTextoElemento('texto_resultadoAreaPerimetroCirculo', `No puedes dejar el campo de ancho vacio, coloca un valor valido.`);
    } else{
        convertirTextoElemento('texto_resultadoAreaPerimetroCirculo', `Para un círculo de radio ${radio} cm:<br>
         • Área = ${area.toFixed(2)} cm²<br>
         • Perímetro = ${perimetroCirculo.toFixed(2)} cm`
        );
    }
}