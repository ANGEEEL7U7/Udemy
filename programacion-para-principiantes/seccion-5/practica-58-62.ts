//este codigo es de los videos
//58 a la 62

/**
 * los objectos no son mas que abstracciones de la vida real
 * creare un objeto llamado carro donde puedo crear varios
 * carros como mazda,audi,nissan pero estos siempre seran del
 * objeto carro donde tiene sus propiedades
 * como, marca, gasolina,color o si esta encendido
 */

//creacion del objeto

/**
 * readonly: cuando una propiedad tiene esta palabra reservada
 * significa que no se puede mosificar solamente en el constructor
 * y en los metodos o en el mundo exterior no podemos modificar la propiedad
 * que tenga readonly porque esta palabra indica que dicha
 * propiedad es de solo lectura
 * 
 * public: cuando la propiedad o funcion usa esta palabra reservada
 * significa que se puede acceder en el mundo exterior o en otras clases
 * si la propiedad tiene readonly significa que es publica pero de solo
 * lectura, aun que la propiedad o funcion no cuenten con esta palabra reservada
 * "public" siempre sera publica por defecto
 * 
 * private: cuando es private significa que solo se puede acceder 
 * en el objeto no se puede usar en el mundo exterior ni cualquier otra clase
 * puede usar alguna propiedad o funcion private de la clase
 * 
 * static: la diferencia del public que en este no es necesario crear una instancia
 * del objeto ya que se puede acceder de manera directa de la clase en el caso
 * del las pripiedades funciona como valores globales esto quiere decir
 * que el valor no pertenece a un objeto si no a toda la clase por lo tanto 
 * es el mismo en todo el programa
 * 
 * ejemplo: tienes varios jugadores estos usan el objeto jugador
 * y quieres tener el total de jugadores pero si usas una propiedad
 * no global cada jugador tendra su propio contador osea 1
 * pero si usas static al hacer Jugador.total este sera 3
 * porque todos los objetos jugadores comparten el mismo total
 * loque lo ira incrementando en el constructor cuando
 * se instancia la clase
 * ```ts
 * class Jugador {
 *  static totalJugadores = 0; // propiedad estática (valor global)
 *   constructor(nombre) {
 *       this.nombre = nombre;
 *       Jugador.totalJugadores++; // todos los jugadores comparten este valor
 *   }
 * }
 * const j1 = new Jugador("Ana");
 * const j2 = new Jugador("Luis");
 * const j3 = new Jugador("María");
 * console.log(Jugador.totalJugadores); // 👉 3 (valor global)
 * ```
 */
export default class Carro {
  //creacion de las propiedades
  public marca: string;
  readonly fechaCreacion: number = Date.now();
  gasolina: number;
  limiteGasolina: number;
  color: string;
  private encendido: boolean = false;

  /**
   * el constructor es un metodo especial de una clase
   * se llama automaticamente al inicializar un nuevo
   * objeto de esa clase
   *
   * osea cada que creamos un nuevo carro este metodo
   * especial se llamara
   * ```ts
   * class Saludar {
   *    constructor(){
   *      console.log('hola mundo')
   *    }
   * }
   * const saludo = new Saludar();
   * ```
   * al hacer const saludo = new saludar();
   * automaticamente llama al constructor
   * lo que imprimira el hola
   *
   * tambien el constructor sirve para establecer
   * valores a las propiedades
   * tambien se pueden ejecutar metodos desde el constructor
   * 
   * parametros en el constructor: los parmetros son lo mismo
   * que en las funciones son solicitudes que necesitamos del 
   * mundo exterior cuando inicializemos la clase este nos pedira
   * los parametros que solicitte osea
   * const audi = new Carro();
   * como en su constructor tiene parametros
   * el new Carro() nos solicitara los parametros
   * el resultado seria algo asi new Carro("Audi", 34, 100, "blanco");
   */
  constructor(
    marca: string,
    gasolina: number,
    limiteGasolina: number,
    color: string
  ) {
    //inicializando propiedades

    /**
     * this hace referencia al objeto osea a la clase
     * osea que podemos acceder y modificar propiedades
     * que permitan modificar su valor
     * y tambien acceder a metodos de la clase
     * dato: si hacemos console.log a this este imprime la
     * clase
     */
    this.marca = marca;
    this.gasolina = gasolina;
    this.limiteGasolina = limiteGasolina;
    this.color = color;
  }

  /**
   * los metodos en la clase son como las acciones
   * del objeto en la vida real en el caso del carro
   * el metodo encenderCarro significa que el carro
   * tiene la accion de encenderse
   */
  encenderCarro() {
    if (this.encendido) {
      console.log("El auto esta encendido");
      return;
    }

    if (this.gasolina <= 0) {
      console.log("no tengo gasolina");
      return;
    }

    this.encendido = true;
    console.log("auto encendido");
  }

  conducir() {
    while (this.gasolina > 0) {
      console.log("conduciendo gasolina al nivel: ", this.gasolina);
      this.gasolina--;
    }
    /**
     * tambien podemos llamar a otro metodo de la clase
     * ya que this hace referencia a la clase
     * como decia esto permite acceder a los metodos de la clase
     */
    this.apagarCarro();
  }

  apagarCarro() {
    if (!this.encendido) {
      console.log("auto esta apagado");
      return;
    }
    if (this.gasolina <= 0) {
      this.encendido = false;
      console.log("el auto fue apgado por falta de gasolina");
    } else {
      this.encendido = false;
      console.log("auto apgado aun cuenta con gasolina");
    }
  }

  /**
   * los parametros en las funciones son solicitudes
   * que necesitamos del mundo exterior para poder llenar
   * el tanque al carro necesita de un valor del mundo exterior
   * para el carro cuente con gasolina
   *
   * un ejemplo del mundo exterior seria un formulario
   * y en ese formulario agrego mi nombre y edad
   * entonces el usuario ingresara esos datos y abajo del formulario
   * hay un boton llamado enviar el cual es una funcion que tiene
   * como parametros nombre y edad osea del mundo exterior
   * recibe esos datos mediante el formulario que escribe el usuario
   * @param gasolinaSolicitado
   * gasolina es el parametro que recibimos del mundo exterior
   */
  llenarTanque(gasolinaSolicitado: number) {
    let gasolinaLlenar = gasolinaSolicitado;
    if (gasolinaSolicitado < 0) {
      console.log("no puedes ingresar valores negativos");
      return;
    }

    const prediccionLlenado = this.gasolina + gasolinaSolicitado;
    if (prediccionLlenado > this.limiteGasolina) {
      gasolinaLlenar = this.limiteGasolina - this.gasolina;
      console.log(
        `la cantidad ingresada supera el limite, solo se llenara la cantidad faltante que es: ${gasolinaLlenar}`
      );
    }

    for (let index = 1; index <= gasolinaLlenar; index++) {
      this.gasolina = this.gasolina + 1;
      console.log("llenando tanque:", this.gasolina, " de ", index);
    }
    console.log("nivel actual del tanque: ", this.gasolina);
  }
}
/*
export const mazda = new Carro();
para acceder al metodo solo basta con usar
la referencia por punto y llamar al metodo
mazda.tumetodo();
console.log(mazda); //quiero ver si el auto esta encendido
mazda.encenderCarro(); //enciendo el auto
console.log(mazda); //verifico si el auto esta encendido
mazda.encenderCarro(); //intento encenderlo de nuevo
*/

export const audi = new Carro("Audi", 34, 100, "blanco");
audi.encenderCarro();
/**
 * conducir se activa y mientras halla gasolina
 * el auto seguira conduciendo
 */
//audi.conducir();
/**
 * ahora aqui al intentar encender el carro
 * como la gasolina es cero entonces dira
 * que no se puede encender porque no cuenta con gasolina
 */
audi.encenderCarro();
audi.llenarTanque(100);

console.log(audi.fechaCreacion);//solo podemos acceder a ella
//audi.fechaCreacion = 0; pero hacer esto marca error porque no podemos
//modificar su valor

console.log(audi.marca);
//si podemos ver de que marca es porque es una propiedad
//publica

//console.log(audi.encendido)
//nos marca error porque la propiedad es privada
//solo podemos acceder dentro de la clase Carro