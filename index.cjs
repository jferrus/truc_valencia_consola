const {Carta, Mazo} = require("./modelo/clases.cjs")
const array = new Uint32Array(10);



for(let i = 0; i < 100; i++) {
    let carta = null;
    
    carta = Mazo.generarCartaAleatoria();

    //console.log(carta);

    console.log(`La carta ${carta.mostrarTextoCarta()} tiene el valor de ${carta.getValor()}`);  
}





