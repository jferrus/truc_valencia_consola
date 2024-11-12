/*
* Este es un programa por línea de comandos que sirve para jugar al juego "Truc Valencià*
*/

/**
 * Esta clase define una carta de la baraja espanyola
 */
class Carta {

    static #NOMBRE_PALOS = ["Espadas", "Bastos", "Oros", "Copas"];
    static #NUMERO_JUGABLES = [1, 3, 4, 5, 6, 7];
    static #MAX_VALOR = 9

    constructor(numero, palo, valor){
        this.setNumero(numero);
        this.setPalo(palo);
        this.setValor(valor);
    }

    /**
     * Inserta el número de la carta
     * @param {Integer} numero
     */
    set setNumero(numero){

        if(!Carta.#NUMERO_JUGABLES.includes(numero)) {
            throw RangeError("El rango del número de la carta no es válido.");
        }

        this.numero = numero;
    }

    /**
     * Inserta el número identificador del palo
     * @param {Integer} palo
     */
    set setPalo(palo) {

        if(numeroPalo < 0 || numeroPalo > Carta.#NOMBRE_PALOS.length()){
            throw RangeError("El rango del número identificador del palo no es válido.");
        }

        this.palo = palo;
    }

    /**
     * Insertar el valor de la carta
     * @param {Integer} valor
     */
    set setValor(valor){
        if(valor < 1 || valor > Carta.#MAX_VALOR) {
            throw RangeError("El rango del valor no es válido");
        }

        this.valor = valor;
    }

    /**
     * Muestra la carta en formato texto legible por el jugador
     */
    mostrarTextoCarta(){
        return `${this.numero} de ${Carta.#NOMBRE_PALOS.get(this.numeroPalo)}`;
    }

   get getPalo(){
    return this.palo;
   }

   get getValor(){
    return this.valor;
   }

   get getNumero(){
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
    static #CARTAS = [
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

    constructor(){
        
    }

    /**
     * Devuelve el valor de la carta
     * @param {Integer} numero 
     * @param {Integer} palo 
     * @returns {Integer} valor
     */
   static valorCarta(numero, palo){

    const carta = Mazo.#CARTAS.filter((carta) => 
        carta.numero = numero
        && carta.palo == palo
    );

    return carta.getValor();    
 }
}

let mazo = new Mazo();

mazo.valorCarta(1, 1);