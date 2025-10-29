//bucles

//1. ciclo while
//este ciclo se ejecuta mientras su condicion sea verdadera
//ejemplo
export let bateria: number = 100;

//mientras mi telefono tenga baterial seguire usando el celular
while (bateria >= 0) {
  console.log("Sigo usando el telefono", bateria);
  bateria--;
}
//cuando mi bateria se acabe entonces el telefono se apaga
console.log("telefono apagado");

//do while este se ejecuta y despues hace la validacion
export let camino: number = 10;
do {
  //do va ejecutar primero la validacion

  //el detalle que si camino es -10 ejecuta el programa
  //y despues hace la validacion
  console.log("me falta por caminar: ", camino);
  camino--;
} while (camino > 0);

console.log("El camino termino");
