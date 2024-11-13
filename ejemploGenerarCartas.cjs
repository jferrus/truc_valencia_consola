const { Mazo } = require("./modelo/clases.cjs")

let mazo = new Mazo();
let carta = null;
let i = 0;

for(i = 0; i < 30; i++) {
    
    try {
        carta = mazo.generarCartaAleatoria();

        console.log(`${i}: La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  

    } catch (e) {
        console.log(`${i}: No quedan más cartas`);
    }
}