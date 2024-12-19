console.warn('Ejercicio B');

let cuantosGatos = Number(prompt("Ingresa la cantidad de gatos que quieras ver:"));
let cuantosPasos = Number(prompt("Ingresa la cantidad de huellas que quieras ver:"));

let generarPasos = cantidad => '🐾'.repeat(cantidad);

let mostrarGatos = (cantidadGatos, cantidadPasos) => {
    let pasos = generarPasos(cantidadPasos);
    for (let i = 1; i <= cantidadGatos; i++) {
        console.log(`Gato #${i}: 🐈${pasos}`);
    }
};

mostrarGatos(cuantosGatos, cuantosPasos);
