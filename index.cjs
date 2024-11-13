const {Mazo} = require("./modelo/clases.cjs")
const array = new Uint32Array(10);

let mazo = new Mazo();

for(let i = 0; i < 30; i++) {
    let carta = null;
    
    try {
        carta = mazo.generarCartaAleatoria();

        console.log(`${i}: La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  

    } catch (e) {
        console.log(`${i}: No quedan más cartas`);
    }

    //console.log(carta);

}





