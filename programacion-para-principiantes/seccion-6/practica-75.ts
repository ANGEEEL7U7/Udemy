/*
9- Crear una función que reciba un arreglo como argumento, la función debe de retornar un
nuevo arreglo pero filtrando todos los nombres que empiezan con una determinada letra.

Ejemplo:
let heroes = ['Doom', 'Dr. Strange', 'Hulk', 'She Hulk', 'Spiderman', 'Captain Marvel'];
let herosWithLetterS = heroesThatStartsWith( heroes, 'S' );
console.log( herosWithLetterS ); // She Hulk, Spiderman
*/
export let heroes: string[] = [
  "Doom",
  "Dr. Strange",
  "Hulk",
  "She Hulk",
  "Spiderman",
  "Captain Marvel",
];
export function heroesInicianConLetra(
  nombres: string[],
  letra: string
): string[] {
  return nombres.filter((nombre) => nombre.startsWith(letra));
}

const letra = "H";
console.log(
  `heroes que inician con la letra ${letra} son: ${heroesInicianConLetra(
    heroes,
    letra
  )}`
);
