//ejercicio de arreglos

//obtener el nombre del empleado y su sueldo

export const empleados: string[] = ["Angel", "Fernando", "Laura", "Diego"];
export const salarios: number[] = [1700, 2000, 5300, 2399];

/**
 * primero estoy llamando la palabra reservada const
 * lo que significa que las variables no se podran
 * modificar
 *
 * en empleados indico que sera un array solamente de strings
 * mientras que en salarios sera un array del tipo number
 *
 * estos arrays se conocen como iterables, lo que quiere decir que es
 * un objecto que se puede recorrer osea que se puede acceder a sus
 * elementos uno por uno
 */

//1. creamos un ciclo for para obtener los empleados
for (
  // nombramos la palabra reservada for con sus parentesis
  let posicion = 0; //declaramos la posicion que quiero
  // iniciar hay que recordar que los arrays inician desde cero
  //por lo tanto si inicio en cero significa que tendre
  //el primer elemento que sera 'Angel'
  posicion < empleados.length; //aqui estoy declarando que
  //el ciclo continuara mientras posicion sea menor o igual al
  //total de empleados y como obtuve el total de empleados?
  //use la propiedad length que me da el total de elementos
  //que contiene mi arreglo

  posicion++ //finalmente indicamos que posicion se ira //incrementando en cada ciclo
) {
  //inicio del codigo

  /**
   * 1. compruebo que el empleado exista y tambien
   * compruebo que ese empleado cuente con un
   * salario registrado
   *
   * si el empleado existe y el salario tambien
   * entonces imprime al empleado y su sueldo
   *
   * sino imprime que el empleado no existe o
   * no cuenta con salario registrado
   */

  if (empleados[posicion] && salarios[posicion]) {
    console.log(
      `${empleados[posicion]} tiene un salario de ${salarios[posicion]} \n`
    );
  } else {
    console.log("el empleado no existe o no cuenta con un salario registrado");
  }
} //fin del codigo
