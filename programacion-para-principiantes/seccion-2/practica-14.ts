//Programacion de manera secuencial seccion2 clase 14
/*
hare una suma de numeros pero de manera secuencial
primero declaro una variable donde su valor sera 3
imprimire ese valor y despues sumare la variable mas 2
y al final imprimire el resultado
*/

//1. declaro la variable
export let numero = 3;
//2. imprimo la variable
console.log(numero); //resultado 3
//3. sumare la variable mas 2
numero = numero + 2;
//4. imprimo el resultado
console.log(numero); //resultado 5

//Continuacion de la practica

/*
1. primero declare la variable
2. imprimi su valor
3. incremente su valor mas 1
4. imprimi el resultado que es 2
5. incremente su valor usando una expresion mas corta
6. imprimi el resultado que es 3
7. multiplique su valor por 3
8. imprimi el resultado que es 9
*/
export let numeroLineas = 1;

console.log("linea # ",numeroLineas);

numeroLineas = numeroLineas + 1;
console.log("linea # ",numeroLineas);

numeroLineas++;
console.log("linea # ",numeroLineas);

numeroLineas = numeroLineas * 3;
console.log("linea # ",numeroLineas);
