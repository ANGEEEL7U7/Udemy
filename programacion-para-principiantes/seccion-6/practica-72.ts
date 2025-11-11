// 6- Realice un algoritmo, que permita la impresión en consola de la siguiente tabla: 5 x 5

for (let row = 1; row <= 5; row++) {
  let line = "";
  for (let column = 1; column <= 5; column++) {
    line += " " + column * row;
  }
  console.log(line);
}
