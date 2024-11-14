const readline = require('node:readline');
const { Carta, Mazo } = require("./modelo/clases.cjs");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

/**
 * Función principal
 */
async function main() {

    let MAX_JUGADAS_TURNO = 3;
    
    let i = 0;
    let mazo = new Mazo();
    let cartasTurnoJugador1 = [];
    let cartasTurnoJugador2 = [];
    let jugadaJugador1 = 0;
    let jugadaJugador2 = 0;
    let jugadorGanador = 0;
    let cartaJugador1 = null;
    let cartaJugador2 = null;

    let envidaJugador1 = false;
    let envidaJugador2 = false;
    let trucaJugador1 = false;
    let trucaJugador2 = false;

    let jugadasTurnoGanadasJugador1 = 0;
    let jugadasTurnoGanadasJugador2 = 0;

    cartasTurnoJugador1 = await repartir3Cartas(mazo);
    cartasTurnoJugador2 = await repartir3Cartas(mazo);


    for(i = 0; i < MAX_JUGADAS_TURNO; i++) {

        console.log(`\nTurno 1, jugada ${i+1}\n`);
        
        console.log("---------------------");
        console.log("Cartas jugador 1");
        console.log("---------------------");
        mostrarListadoCartas(cartasTurnoJugador1);

        jugadaJugador1 = await getInput();

        rl.pause();


        cartaJugador1 = cartasTurnoJugador1.at(jugadaJugador1 - 1);
        cartasTurnoJugador1.splice(jugadaJugador1 - 1, 1);

        if(await getInputCartaOculta()) {
            cartaJugador1.setOculta();
        }

        rl.pause();

        /*
        if(!envidaJugador1){
            envidaJugador1 = await getInputEnvidarTurno();
        }
        */

        if(!trucaJugador1) {
            trucaJugador1 = await getInputTrucarTurno();
        }

        console.log("---------------------");
        console.log("Cartas jugador 2");
        console.log("---------------------");  

        await mostrarListadoCartas(cartasTurnoJugador2);
        jugadaJugador2 = await getInput();

        rl.pause();

        cartaJugador2 = cartasTurnoJugador2.at(jugadaJugador2 - 1);
        cartasTurnoJugador2.splice(jugadaJugador2 - 1, 1);

        if(await getInputCartaOculta()) {
            cartaJugador2.setOculta();
        }

        /*
        if(!envidaJugador2){
            envidaJugador2 = await getInputEnvidarTurno();
        }
        */

        if(!trucaJugador2) {
            trucaJugador2 = await getInputTrucarTurno();

            if(!trucaJugador1) {
                console.log("Jugador 1:");
                trucaJugador1 = await getInputTrucarTurno();
            }
        }

        if(!trucaJugador1 || !trucaJugador2) {
            trucaJugador1 == false;
            trucaJugador2 == false;
        }

        console.log("\nEsta ha sido la jugada\n :")

        if(!trucaJugador1 || !trucaJugador2) {
            console.log("No se ha aceptado el truco\n");
        } else {
            console.log("Se ha aceptado el truco\n");
        }

        console.log(`Carta Jugador 1: ${cartaJugador1.mostrarTextoCarta()}`);
        console.log(`Carta Jugador 2: ${cartaJugador2.mostrarTextoCarta()}`);

        jugadorGanador = calcularGanador2Cartas(cartaJugador1, cartaJugador2);

        if(jugadorGanador > 0){
            console.log(`\n¡Ha ganado la jugada el jugador ${jugadorGanador}!`);

            if(jugadorGanador === 1) {
                jugadasTurnoGanadasJugador1++;
            } else if(jugadorGanador === 2){
                jugadasTurnoGanadasJugador2++;
            }
        } else {
            console.log("\nPardes")
        }
    }

    if(trucaJugador1 && trucaJugador2){
        if(jugadasTurnoGanadasJugador1 > jugadasTurnoGanadasJugador2) {
            console.log("Gana el truco el jugador 1");
        } else if (jugadasTurnoGanadasJugador1 < jugadasTurnoGanadasJugador2) {
            console.log("Gana el truco el jugador 2");
        } else {
            console.log("EMPATE EN EL TRUCO: No gana el truco nadie");
        }
    }

    rl.close();
    console.log("\nFIN DEL TURNO")
}

/**
 * Calcular el ganador entre dos cartas:
 * 0: empate
 * 1: gana la carta 1
 * 2: gana la carta 2
 * @param {Carta} cartaJugador1 
 * @param {Carta} cartaJugador2 
 * @returns {Integer} número de jugador
 */
function calcularGanador2Cartas(cartaJugador1, cartaJugador2) {

    let ganador = 0;

    if(cartaJugador1.isOculta() ||  cartaJugador2.isOculta()){
        if (cartaJugador1.isOculta() && cartaJugador2.isOculta()){
            ganador = 0;
        } else if(cartaJugador1.isOculta()) {
            ganador = 2;
        } else {
            ganador = 1;
        }
    } else {
        if(cartaJugador1.getValor() > cartaJugador2.getValor()){
            ganador = 1;
        } else if (cartaJugador1.getValor() < cartaJugador2.getValor()) {
            ganador = 2;
        }
    }

    return ganador;
}

/**
 * Da un mensaje al usuario pregunta si la quiere jugar en oculto.
 * @returns {boolean} true oculta, false visible
 */
async function getInputCartaOculta() {

    const answer = await new Promise(resolve => {

        rl.question(`¿La quieres jugar en oculto? s/N : `, respuesta => {


            if(respuesta && (respuesta === "s" || respuesta === "S")){
                resolve(true);
            } else {
                resolve(false);
            }
        })
  })

  return answer;
}

/**
 * Da un mensaje al usuario pregunta si la quiere trucar en este turno
 * @returns {boolean} true truca, false nada
 */
async function getInputTrucarTurno() {

    const answer = await new Promise(resolve => {

        rl.question(`¿Quieres trucar? s/N : `, respuesta => {


            if(respuesta && (respuesta === "s" || respuesta === "S")){
                resolve(true);
            } else {
                resolve(false);
            }
        })
  })

  return answer;
}

/**
 * Da un mensaje al usuario pregunta si la quiere trucar en este turno
 * @returns {boolean} true truca, false nada
 */
/*
async function getInputEnvidarTurno() {

    const answer = await new Promise(resolve => {

        rl.question(`¿Quieres envidar? s/N : `, respuesta => {


            if(respuesta && (respuesta === "s" || respuesta === "S")){
                resolve(true);
            } else {
                resolve(false);
            }
        })
  })

  return answer;
}
*/

/**
 * Da un mensaje al usuario y devuelve un número que identifica a una carta.
 */
 async function getInput() {
  
  const answer = await new Promise(resolve => {

        rl.question(`¿Qué carta vas a jugar?: `, numero => {
            resolve(numero);
        });

    });

  return answer;
}

/**
 * Repartir 3 cartas, se puede llamar a esta función 2 vez por turno
 * @returns 
 */
async function repartir3Cartas(mazo) {

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
async function mostrarListadoCartas(cartas) {
    cartas.forEach((carta, index)=> {
        if(carta instanceof Carta){
            console.log(`${index + 1}: ${carta.mostrarTextoCarta()}`);
        } else {
            throw TypeError("La variable no es de la clase correcta");
        }
    });
}

main();