//manejo de tipos de datos en typescript
/*
primero definimos una del tipo any

este tipo permite ingresar cualquier tipo de dato
primero usamos la palabra reservada y 
ingresamos el nombre con dos puntos 
indicamos el tipo de dato y le asignamos el valor
*/
export let variableCualquiera: any = "hola mundo";
console.log(variableCualquiera.length, variableCualquiera);
//esto me devuelve la cantidad de caracteres
//primero la variable inicia como un string

//ahora cambiamos el valor con otro tipo de dato
//la variable vale 20 lo que quiere decir que tiene
//un nuevo tipo de dato number
variableCualquiera = 20;

//esto me devuelve el valor 20.00
console.log(variableCualquiera.toFixed(2));
/*
que sucedio? lo que pasa al usar un tipo de dato 
como string nos permite usar metodos propios del tipo string
pero si usamos otro tipo de dato como number
este tambien nos permite usra metodos propios del tipo number
*/
//ahora definire un string pero solo sera de ese tipo
export let nombre: string = "juan";
console.log(nombre.length, nombre);
//si intento hacer esto nombre = 20;
//me da error porque el tipo de dato es string
//y no puedo asignarle un number
//mostrare los otros tipos de datos
export let activo: boolean = true; //tipo boolean

/*
en los boleanos solo existen dos valores
true y false
*/

//pero tambien puedo negar el valor true
//esto lo que hace es cambiar el valor a false
//y si el valor es false lo cambia a true
console.log("estado se encuentra activo?: ", !activo);
//ahora existe la doble negacion
//esta doble negacion es algo confuso pero devuelve el true

console.log("estado se encuentra activo?: ", !!activo);
/*
un ejemplo mas practivo
*/
export let datos: number[] = [1, 2, 3, 4, 5];
//este devuelve los datos del array
console.log("datos: ", datos);
//este devuelve un false ya que el array tiene datos
console.log("datos: ", !datos);
//este devuelve un true ya que el array tiene datos
console.log("datos: ", !!datos);

//otro ejemplo
export let apellido: null = null;

//este devuelve un valor null no hay nada
console.log("apellido: ", apellido);
//este devuelve un true ya que el valor es null
console.log("apellido: ", !apellido);
//este devuelve un false ya que el valor es null
console.log("apellido: ", !!apellido);

export let fecha: Date = new Date();
export let decimal: number = 3.14; //tipo number
/*
ahora mostrare el array este cuando no es
de algun tipo de dato normalmente es del tipo
any[] cuando tiene [] sigifnica que la variable
es del tipo array y acepta cualquier valor
*/
export let coleccionCualquiera: any[] = [1, true, "hola"];
//ahora mostrare un array de tipo number[]
//este solo aceptara una coleccion de numeros
export let coleccionNumeros: number[] = [1, 2, 3, 4, 5];
//ahora este sera una coleccion donde solo permite
//string[]
export let coleccionStrings: string[] = ["hola", "como", "estas"];
