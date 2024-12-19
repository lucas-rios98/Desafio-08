console.warn('Ejercicio C');

let cuantosGatos = Number(prompt("Ingresa la cantidad de gatos que quieras ver:"));
let cuantosPasos = Number(prompt("Ingresa la cantidad de huellas que quieras ver:"));

let iconosGatos = ["🐈", "🐈‍⬛"];

let generarPasos = cantidad => '🐾'.repeat(cantidad);

let mostrarGatos = (cantidadGatos, cantidadPasos) => {
    let pasos = generarPasos(cantidadPasos);
    for (let i = 1; i <= cantidadGatos; i++) {
        let emojiGato = iconosGatos[(i - 1) % iconosGatos.length];
        console.log(`Gato #${i}: ${emojiGato}${pasos}`);
    }
};

mostrarGatos(cuantosGatos, cuantosPasos);
