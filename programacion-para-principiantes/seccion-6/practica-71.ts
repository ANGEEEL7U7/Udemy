/**
 * 5- Dado el siguiente arreglo
 * Haga una impresión en consola asi:
 * 1 es un número impar
 * 2 es un número par
 *
 */
export let numerosParInpar = [1, 6, 8, 4, 2, 7, 10, 3, 5];
for (let index = 0; index < numerosParInpar.length; index++) {
  if (numerosParInpar[index] % 2 === 0) {
    console.log(`${numerosParInpar[index]} es un número par`);
  } else {
    console.log(`${numerosParInpar[index]} es un número impar`);
  }
}
