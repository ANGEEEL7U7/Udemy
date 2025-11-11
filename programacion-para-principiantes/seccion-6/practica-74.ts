/*
8- Crear una función que reciba como argumento un arreglo, la función debe de retornar el
nombre que tenga más letras del arreglo, y debe de trabajar así:

let heroes = ['Deadpool', 'Ciclope', 'Magneto', 'Profesor Charles Xavier'];
let hero = largestNameOfArray( heroes );
console.log( hero ); // Profesor Charles Xavier 
*/
export const nombres: string[] = [
  "Deadpoold",
  "Ciclope",
  "Magneto",
  "Profesor Charles Xavier",
];
export function nombreLargoArreglo(nombres: string[]): string {
  let nombreMayor = "";

  nombres.map(nombre =>
    nombre.length > nombreMayor.length ? (nombreMayor = nombre) : null
  );
  return nombreMayor;
}

console.log(nombreLargoArreglo(nombres));
