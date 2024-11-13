const {Mazo} = require("./modelo/clases.cjs")
const array = new Uint32Array(10);

let mazo = new Mazo();

console.log("---------------------");
console.log("Cartas jugador 1");
console.log("---------------------");

for(let i = 0; i < 3; i++) {
    let carta = null;
    
    try {
        carta = mazo.generarCartasTurnoSinRepetir();

        //console.log(`${i}: La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  
        console.log(`${carta.mostrarTextoCarta()}`);  

    } catch (e) {
        console.log(`${i}: No quedan más cartas`);
    }
}
console.log("---------------------");
console.log("Cartas jugador 2");
console.log("---------------------");

for(let i = 0; i < 3; i++) {
    let carta = null;
    
    try {
        carta = mazo.generarCartasTurnoSinRepetir();

        console.log(`${carta.mostrarTextoCarta()}`); 
        //console.log(`${i}: La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  

    } catch (e) {
        console.log(`${i}: No quedan más cartas`);
    }
}



