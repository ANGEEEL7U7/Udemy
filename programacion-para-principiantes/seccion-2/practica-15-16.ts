//introduccion a funciones
// primera funcion de ejemplo

export function saludar() {
  console.log("Hola");
}

saludar();

//introduccion a funciones
// primera funcion de ejemplo

/*
En esta funcion estoy llamando la funcion
con el nombre de imprimirMensaje en este
dentro del parentesis estoy agregando un parametro
llamado texto este servira para imprimir en el console log
*/
export function imprimirMensaje(texto: string) {
  //el parametro que solicito lo estoy agregando
  //dentro del console.log
  console.log(texto); //imprime el texto que yo envie
  //al parametro texto
}

//llamo la funcion agrego el texto que quiero imprimir
imprimirMensaje("Hola");

//ERRORES DE SINTAXIS
//imprimirMensaje(); //error porque no le estoy enviando el parametro que solicita la funcion
//impreMensaje("Hola"); //Es un error por que no existe una funcion con ese nombre
