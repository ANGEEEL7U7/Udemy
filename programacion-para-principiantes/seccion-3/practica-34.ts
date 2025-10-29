/*
Sentencia for es un bucle donde conocemos el limite de nuestra lista
podria ser como las tablas de multiplicar por ejemplo quiero la tabla del 1
pero esta va terminar hasta 10 entonces el loop realizara la tarea mientras 
no se haya pasado del limite osea el for seguira ejecutandose hasta que sea menor
o igual a 10
*/

//en mi tabla de multiplicar usare el numero 7 osea 7 x 1 = 7
export const base: number = 7;

//esta variable sera el limite de mi multiplicacion osea
//7 x 1 = 7 ...hasta... 7 x 12 = 84
export const limite: number = 12;

//llamo a la palabra reservada for
for (
  let i = 0; //esto dice que mi tabla empezara en el numero 0 osea 7 x 0 = 0
  i <= limite; //le estoy diciendo que mientras i sea menor al limite
  //este seguira ejecutandose hasta que i ya sea igual o mayor a limite
  i++ //aqui le especifico al ciclo que en cada vuelta i se ira incrementando en 1
) {
  //inicio de bloque de codigo
  console.log(`${base} x ${i} = ${base * i}`); /* dentro del bucle estoy ejecutando el siguiente codigo
  imprimo mi numero base que es 7 agrego la equis "x" y despues uso el indice ya que ese
  sera el que me indicara la cantidad de multiplicaciones como 7 x 0, 7 x 1, 7 x 2....
  luego realizo una operacion donde multiplico la base con i lo que nos dara el resultado de la
  multiplicacion*/

  //fin del bloque de codigo
}
