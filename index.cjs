/*
* Este es un programa por línea de comandos que sirve para jugar al juego "Truc Valencià*
*/

/**
 * Esta clase define una carta de la baraja espanyola
 */
class Carta {

    static #NOMBRE_PALOS = ["Oros", "Copas", "Espadas", "Bastos"];
    static #NUMERO_JUGABLES = [1, 3, 4, 5, 7];
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

    set setValor(valor){
        if(valor < 1 || valor > Carta.#MAX_VALOR) {
            throw RangeError("El rango del valor no es válido");
        }

        this.valor = valor;
    }

    /**
     * Muestra la carta en formato texto legible por el jugador
     */
    get mostrarTextoCarta(){
        return `${this.numero} de ${Carta.#NOMBRE_PALOS.get(this.numeroPalo)}`;
    }
}

 class Mazo {

    #cartas = [
      new Carta()  
    ];

    constructor(){
        
    }
 }


