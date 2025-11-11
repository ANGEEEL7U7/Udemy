// 4- Dado el siguiente arreglo:
export let numbers: number[] = [1, 6, 8, 4, 2, 7, 10, 3, 5];

export let numeroMayor: number = numbers[0] || 0; 
for (let indice = 0; indice <= numbers.length; indice++) {
  if (numbers[indice] > numeroMayor) {
    const anterior = numeroMayor;
    numeroMayor = numbers[indice];
    console.log(
      `se registro un numero mayor anterior: ${anterior}, nuevo: ${numeroMayor}`
    );
  }
}
console.log(`numero mayor del arreglo es: ${numeroMayor}`);