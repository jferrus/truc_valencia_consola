/**
 * Esta clase define una carta de la baraja espanyola
 */
class Carta {

    static NOMBRE_PALOS = ["Espadas", "Bastos", "Oros", "Copas"];
    static NUMERO_JUGABLES = [1, 3, 4, 5, 6, 7];
    static MAX_VALOR = 9

    numero = 0;
    palo = 0;
    valor = 0;

    constructor(numero, palo, valor){
        this.setNumero(numero);
        this.setPalo(palo);
        this.setValor(valor);
    }
    
    /**
     * Muestra el texto de la carta en formato legible
     * @returns {String} texto
     */
    mostrarTextoCarta(){
        return `${this.numero} de ${Carta.NOMBRE_PALOS[this.palo]}`;
    }

    /**
     * Inserta el número de la carta
     * @param {Integer} numero
     */
    setNumero(numero){

        if(!Carta.NUMERO_JUGABLES.includes(numero)) {
            throw RangeError("El rango del número de la carta no es válido.");
        }

        this.numero = numero;
    }

    /**
     * Inserta el número identificador del palo
     * @param {Integer} palo
     */
     setPalo(palo) {

        if(palo < 0 || palo > Carta.NOMBRE_PALOS.length){
            throw RangeError("El rango del número identificador del palo no es válido.");
        }

        this.palo = palo;
    }

    /**
     * Insertar el valor de la carta
     * @param {Integer} valor
     */
    setValor(valor){
        if(valor < 1 || valor > Carta.MAX_VALOR) {
            throw RangeError("El rango del valor no es válido");
        }

        this.valor = valor;
    }

   getPalo(){
    return this.palo;
   }

   getValor(){
    return this.valor;
   }

   getNumero(){
    return this.numero;
   }  

}

/**
 * El mazo de cartas de la baraja espanyola para el Truc
 */
 class Mazo {

    /**
     * Las cartas jugables del mazo
     */
    static CARTAS = [
      new Carta(1, 0, 9),
      new Carta(1, 1, 8),
      new Carta(7, 0, 7),
      new Carta(7, 2, 6), 
      new Carta(3, 0, 5),
      new Carta(3, 1, 5),
      new Carta(3, 2, 5),
      new Carta(3, 3, 5),
      new Carta(7, 3, 4),
      new Carta(7, 1, 4),
      new Carta(6, 0, 3),
      new Carta(6, 3, 3),
      new Carta(6, 2, 3),
      new Carta(6, 1, 3),
      new Carta(5, 0, 2),
      new Carta(5, 3, 2),
      new Carta(5, 2, 2),
      new Carta(5, 1, 2),
      new Carta(4, 0, 1),
      new Carta(4, 3, 1),
      new Carta(4, 2, 1),
      new Carta(4, 1, 1),
    ];

    static MAX_CARTAS_TURNO = 6;

    cartasRestantes = [];
    cartasRepartidas = 0;

    constructor(){
        this.nuevoTurno();
    }

    /**
    * Selecciona una carta a partir del número y del palo
    * @param {Integer} numero 
    * @param {Integer} palo 
    * @returns {Carta} un objeto carta
    */
    static seleccionarCarta(numero, palo){

        let carta = Mazo.CARTAS.find((carta) => 
            carta.numero == numero
            && carta.palo == palo
        );

        return carta;
    }


    /**
     * Genera una carta aleatoria, con un límite de 6 cartas por cada turno
     * @returns {Carta} carta aleatoria
     */
    generarCartasTurnoSinRepetir() {

        let indiceAleaotrio = -1;
        let carta = null;
        
        if(this.cartasRepartidas >= Mazo.MAX_CARTAS_TURNO){
            throw RangeError("No quedan más cartas para este turno");
        }

        indiceAleaotrio = Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 0x100000000 * (Mazo.MAX_CARTAS_TURNO - 0)) + 0;

        carta = this.cartasRestantesTurno.at(indiceAleaotrio);
        this.cartasRestantesTurno.splice(indiceAleaotrio, 1);

        this.cartasRepartidas++;

        return carta;
    }

    /**
     * Rellena el mazo con todas las cartas
     */
    nuevoTurno() {
        this.cartasRestantesTurno = [...Mazo.CARTAS];
        this.cartasRepartidas = 0;
    }

}

module.exports = {
    Carta,
    Mazo
}