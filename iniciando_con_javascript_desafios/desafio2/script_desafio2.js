/*
Desafíos:

1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".

2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.

3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 60, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".

4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/

//Primer Desafio
diaUsuario = prompt("¿Que dia de la semana es?").toLowerCase();

if(["sabado", "domingo"].includes(diaUsuario)){
    alert(`¡Buen fin de semana!, estamos a ${diaUsuario}`);
} else if(["lunes", "martes", "miercoles", "jueves", "viernes"].includes(diaUsuario)){
    alert(`¡Buena semana!, estamos a ${diaUsuario}`);
} else{
    alert("No escribiste un dia de la semana.");
}


//Segundo Desafio
numeroUsuario = Number(prompt("Porfavor ingresa un numero, ya sea negativo o positivo."));

if(numeroUsuario > 0){
    alert(`El numero ${numeroUsuario}, es positivo`);
} else if(numeroUsuario < 0){
    alert(`El numero ${numeroUsuario}, es negativo`);
}else{
    alert("El numero es 0");
}

//Tercer Desafio
scoreUsuario = Number(prompt("¿Cuando consideras que deberia ser tu puntuacion de 1 a 100?"));

if(scoreUsuario >= 1 && scoreUsuario <=100){
    if(scoreUsuario > 80 && scoreUsuario <= 100){
        alert("¡Eres un crack! ¡has ganado!");
    }else if(scoreUsuario >= 60 && scoreUsuario < 80){
        alert("No estuviste nada mal, ¡has ganado!");
    }else if(scoreUsuario >= 30 && scoreUsuario < 60){
        alert("Intentalo nuevamente para ganar");
    }else{
        alert("Gas llave");
    }
}

//Cuarto Desafio
saldoUsuario = Number(prompt("Ingresa tu saldo"));

alert(`El saldo en tu cuenta es: ${saldoUsuario}`);

//Quinto desafio
nombreUsuario = prompt("Cual es tu nombre?");

alert(`¡Bienvenido ${nombreUsuario}!`);