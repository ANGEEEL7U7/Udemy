/*
Realizar un programa que muestra la nota
del alumno como: A, B, C, D, F
donde:
a >= 90
b >= 80
c >= 70
d >= 60
f < 60
*/
export let calificacion: number = 79.1;

function imprimirNota(letra: string): void {
  console.log("La nota del alumno es: " + letra);
}
if (calificacion >= 90) {
  imprimirNota("A");
} else if (calificacion >= 80 && calificacion <= 89.9) {
  imprimirNota("B");
} else if (calificacion >= 70 && calificacion <= 79.9) {
  imprimirNota("C");
} else if (calificacion >= 60 && calificacion <= 69.9) {
  imprimirNota("D");
} else {
  imprimirNota("F");
}
