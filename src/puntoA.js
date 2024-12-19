console.warn('Ejecricio A');
let arrayGatos = ["😺", "😹", "😽"];
let cantidadDeGatos = prompt("Ingresa la cantidad de gatos que quieras ver:");

function mostrarGatos(cantidad, array) {
    for (let i = 1; i <= cantidad; i++) {
        let emoji = array[(i - 1) % array.length];
        console.log(`Gato #${i}: ${emoji}`);
    }
}

mostrarGatos(cantidadDeGatos, arrayGatos);