const readline = require('node:readline');
const { Carta, Mazo } = require("./modelo/clases.cjs")

async function main() {

    
    let mazo = new Mazo();
    let cartasTurnoJugador1 = [];
    let cartasTurnoJugador2 = [];
    let jugadaJugador1 = 0;
    let jugadaJugador2 = 0;

    console.log("---------------------");
    console.log("Cartas jugador 1");
    console.log("---------------------");
    cartasTurnoJugador1 = repartir3Cartas(mazo);
    mostrarListadoCartas(cartasTurnoJugador1);

    jugadaJugador1 = await getInput();

    console.log("---------------------");
    console.log("Cartas jugador 2");
    console.log("---------------------");
    cartasTurnoJugador2 = repartir3Cartas(mazo);
    mostrarListadoCartas(cartasTurnoJugador2);

    jugadaJugador2 = await getInput();
}

/**
 * Da un mensaje al usuario y devuelve un número que identifica a una carta.
 */
async function getInput() {

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

  const answer = await new Promise(resolve => {
    rl.question(`¿Qué carta vas a jugar?: `, numero => {
        resolve(numero);
        rl.close();
    });
  });
  rl.close();
}

/**
 * Repartir 3 cartas, se puede llamar a esta función 2 vez por turno
 * @returns 
 */
function repartir3Cartas(mazo) {

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
    cartas.forEach((carta, index)=> {
        if(carta instanceof Carta){
            console.log(`${index + 1}: ${carta.mostrarTextoCarta()}`);
        } else {
            throw TypeError("La variable no es de la clase correcta");
        }
    });
}

main();

