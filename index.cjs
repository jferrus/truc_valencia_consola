const {Mazo} = require("./modelo/clases.cjs")

let carta = Mazo.seleccionarCarta(1, 1);

console.log(carta);

console.log(`La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);