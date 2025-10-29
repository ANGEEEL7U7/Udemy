//1. inicia el codigo
console.log("inicia el codigo");
//2. declaramos una variable del tipo booleano
export let estaCansado: boolean = true;

//3. creamos la condicion
/*
en el if en este caso puedo decirle estaCansado == true
el doble igual se refiere a que estaCansado debe ser igual a true
mientras que el triple igual === se refiere a que estaCansado
debe ser igual a true y del mismo tipo de dato

nota: no puede ser = porque el igual simple es para asignar valores
*/
if (estaCansado) {
  //si esta cansado entonces va a dormir
  console.log("Ir a dormir");
} else {
  //si no esta cansado entonces a estudiar
  console.log("A estudiar");
}
//4. el codigo termina
console.log("fin del codigo");


console.log("Inicio del programa");

//1. primero declaramos la variable
export let nota: number = 55;

//2. creamos la condicion
/*
if(nota >= 80){
    
        en esta condicion valido si la nota es mayor o igual
        a 80 si es el caso imprime el siguiente mensaje
    
    console.log("Buena calificacion aprobo la clase");
}

pero igual la nota puede ser menor entonces 
agrego la siguiente condicion

if(nota >=60 && nota < 79){
    
        en este bloque le digo que si el promedio es mayor o igual
        a 60 y menor a 79 entonces imprima el siguiente mensaje
    
    console.log("Calificacion regular, aprobo la clase");
}

if(nota < 60){
    ahora si ninguna de las dos se cumple entonces
    imprime el siguiente mensaje
    console.log("Reprobo la clase");
}*/

//pero esto puede ser mas corto

/*
en el codigo se esta usando el simbolo & dos veces
quiere decir que las dos condiciones deben ser verdad
ahora tambien existe || lo que quiere decir
que una de las dos condiciones debe ser verdad
*/

/*
estoy haciendo la misma validacion pero usando else if
lo que hace el codigo mas corto y alfinal
agrego otro else donde el mensaje si imprime si
ninguna de las dos primeras condiciones se cumple
*/
if(nota >= 80){
    console.log("Buena calificacion aprobo la clase");
}else if(nota >=60 && nota <= 79.9){
    console.log("Calificacion regular, aprobo la clase");
}else{
    console.log("Reprobo la clase");
}

console.log("Fin del programa");