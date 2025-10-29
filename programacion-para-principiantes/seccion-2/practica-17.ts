//practica para resolver crear una funcion
// para imprimir las linea #

export let numberLines = 1;

/*
estoy creando una funcion llamada printNumberLine
esta no recibe parametros
primero imprime el valor actual de number
despues incrementa el valor se hace al final
porque si se suma antes ya no mostraria el primer numero
si lo hago antes la impresion empezaria en 2
*/
export function printNumberLine() {
  console.log("linea # ", numberLines);
  numberLines++;
}
//el orden puede cambiar para empezar a incrementar
// y despues imprimir o viseversa
//si empieza a incrementar lo primero es que
//la variable inicie con 0

//imprime 1 y incrementa
printNumberLine();
//imprime 2 y incrementa
printNumberLine();
//imprime 3 y incrementa
printNumberLine();
