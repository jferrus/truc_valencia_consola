const { Carta, Mazo } = require("./modelo/clases.cjs")
const array = new Uint32Array(10);

let mazo = new Mazo();
let cartasTurnoJugador1 = [];
let cartasTurnoJugador2 = [];

console.log("---------------------");
console.log("Cartas jugador 1");
console.log("---------------------");
cartasTurnoJugador1 = repartir3Cartas();
mostrarListadoCartas(cartasTurnoJugador1);

console.log("---------------------");
console.log("Cartas jugador 2");
console.log("---------------------");
cartasTurnoJugador2 = repartir3Cartas();
mostrarListadoCartas(cartasTurnoJugador2);


/**
 * Repartir 3 cartas, se puede llamar a esta función 2 vez por turno
 * @returns 
 */
function repartir3Cartas() {

    let cartasTurnoJugador = [];

    for(let i = 0; i < 3; i++) {
        let carta = null;
        
        try {
            carta = mazo.generarCartasTurnoSinRepetir();
    
            cartasTurnoJugador.push(carta);
    
        } catch (e) {
            console.log(`${i + 1}: No quedan más cartas`);
        }
    }
    
    return cartasTurnoJugador;
}

/**
 * Muestra un listado de cartas por línea de comandos
 * @param {Carta[]} cartas 
 */
function mostrarListadoCartas(cartas) {
    cartas.forEach(carta => {
        if(carta instanceof Carta){
            console.log(carta.mostrarTextoCarta());
        } else {
            throw TypeError("La variable no es de la clase correcta");
        }
    });
}