const { Mazo } = require("./modelo/clases.cjs")

let carta = null;
let i = 0;

for(i = 0; i < 30; i++) {
    
    try {
        carta = Mazo.generarCartaAleatoria();

        console.log(`${i}: La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  

    } catch (e) {
        console.log(`${i}: No quedan más cartas`);
    }
}