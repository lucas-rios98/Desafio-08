import './style.css'

console.warn("Ejercicio 1");
/* 1. Debes crear las variables nombre, apellido, edad, pais y conocimientos, esta última deberá ser un array.
- Mostrar todos los valores de las variables por la consola. Los elementos del array mostrarlos en forma manual.
- Después cambia el valor de edad y añade un nuevo element al array.
- Muestra esos nuevos valores por la consola. */

let nombre = "Lucas";
let apellido = "Rios";
let edad = 26;
let pais = "Argentina";
let conocimientos = ["conocimiento 1", "conocimiento 2", "conocimiento 3"];

console.log("Nombre:", nombre);
console.log("Apellido:", apellido);
console.log("Edad:", edad);
console.log("País:", pais);
console.log("Conocimientos:");
console.log(conocimientos[0]);
console.log(conocimientos[1]);
console.log(conocimientos[2]);

/* Cambiar el valor de edad y añadir un nuevo elemento al array */
edad = 27;
conocimientos.push("conocimiento 4");

console.log("Nueva Edad:", edad);
console.log("Mas Conocimientos :");
console.log(conocimientos[0]);
console.log(conocimientos[1]);
console.log(conocimientos[2]);
console.log(conocimientos[3]);

console.warn("Ejercicio 2");

/* 2. Debes crear las variables marca, velocidad, stock y modelos (array)
- Todas esas variables deberán ser mostradas por pantalla (con una frase) [Usar template strings]
- Debes mostrar cada uno de los elementos del array (sin hacerlo manualmente) */

let marca = "Renault";
let velocidad = 140;
let stock = "50";
let modelos = ["Renault 12", "Renault 19", "Renault 21"];

console.log(`La marca es ${marca}.`);
console.log(`La velocidad máxima es ${velocidad} km/h.`);
console.log(`En stock hay ${stock} unidades.`);
console.log(`Los modelos de Renault son:`);
modelos.forEach((modelo, index) => {
    console.log(`${index + 1}. ${modelo}`);
});

console.warn("Ejercicio 3");


/* 3. Un coche va a toda velocidad por la carretera. Va a una velocidad de 135km/h y el limite es de 60km/h
- Comprueba que si la velocidad es mayor al limite.
- Si es mayor debes mostrar un mensaje por la consola indicando que baje la velocidad.
- Si es menor el mensaje deberá ser que todo va bien. */



let velocimetro = prompt('Ingrese la velocidad del vehiculo')

if (velocimetro > 60) { 
    console.log('Vas rápido, baja la velocidad!')
} else { (velocimetro >= 60)  
    console.log('todo va bien')
}


console.warn("Ejercicio 4");

/* 4. Dado un sueldo, crear una condicional comparando su sueldo.
- Si el sueldo es $100.000 es excelente
- Si el sueldo es menor o igual a $80.000 es muy bueno.
- Si el sueldo es menor o igual a $60.000 es bueno.
- Y si el sueldo es menor o igual a $40.000 es bajo. */

let sueldo = prompt('Ingrese su sueldo');

if (sueldo >= 100000) {
    console.log('Es excelente');
} else if (sueldo >= 80000) {
    console.log('Es muy bueno');
} else if (sueldo >= 60000) {
    console.log('Es bueno');
} else if (sueldo < 40000) {
    console.log('Es bajo');
}

console.warn("Ejercicio 5");

/* 5. Pidele al usuario su año de Nacimiento (ej: 1990) en una ventana emergente (prompt) y calcula cuántos años tiene actualmente. */

let añoNacimiento = prompt('Ingrese su año de nacimiento');
let añoActual = new Date().getFullYear();
let fecha = añoActual - añoNacimiento;
console.log("Tienes " + fecha + " años.");

console.warn("Ejercicio 6");

/* 6. Crear una función en JavaScript que reciba como parámetro un número entero. Calcule y muestre en la consola la tabla de multiplicar de ese número desde 1 hasta 10. */

    function calcularTabla(numero) {
    for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
}
}
calcularTabla(2)

console.warn("Ejercicio 7");

/* 7. Crea una función que devuelva si un número (pasado por el usuario es par o impar)
Muestra el resultado por consola y un alert. */



function verificarParImpar (numero) {
    if (numero % 2 === 0) {
        console.log(numero + " es par.");
        alert(numero + "es par.");
    } else {
        console.log(numero + " es impar.");
        alert(numero + " es impar.");
    }
}
verificarParImpar(Number(14));

