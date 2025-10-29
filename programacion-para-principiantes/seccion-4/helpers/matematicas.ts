function operacionBasica(
  simbolo: "+" | "-" | "*" | "/",
  a: number,
  b: number
): number {
  let total = 0;

  switch (simbolo) {
    case "+":
      total = suma(a, b);
      break;
    case "-":
      total = resta(a, b);
      break;

    case "*":
      total = multiplicacion(a, b);
      break;

    case "/":
      total = division(a, b);
      break;
    default:
      console.error("Operacion no encontrada");
      break;
  }
  return total;
}

function suma(a: number, b: number): number {
  return a + b;
}

function resta(a: number, b: number): number {
  return a - b;
}

function division(a: number, b: number): number {
  return a / b;
}

function multiplicacion(a: number, b: number): number {
  return a * b;
}

function imprimirTablaMultiplicar(
  base: number,
  limite: number = 10,
  numeroPartida: number = 0
): void {
  if (limite <= 0) {
    throw new Error("Solo numeros positivos");
  }

  for (let indice = numeroPartida; indice <= limite; indice++) {
    console.log(`${base} x ${indice} = ${multiplicacion(base, indice)}`);
  }
}

export { operacionBasica, imprimirTablaMultiplicar };
