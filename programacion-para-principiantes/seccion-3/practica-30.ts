//sentencia switch

//1. primero asignamos la variable dei tipo numerico
export let diaSemana: number = 1;

//2. si el dia de la semana es menor o igual a 0
//entonces muestra un error
if (diaSemana <= 0) {
  throw new Error("Opcion no valida");
}

/*
La sentencia switch ejecuta diferentes opciones 
dependiendo del valor que pongamos en su parentesis
para evaluar 

se escribe la sentencia y dentro del parentesis
ingresamos la variable o funcion que nos devuelva un valor
que no sea booleano porque si fuera booleano mejor usamos
if(){}

en este caso ingrese el dia de la semana
que es 1 ahora dentro del switch usamos la palabra reservada
case despues hacemos la validacion del parametro que ingresamos
en el parentesis del switch

para terminar el case agregamos :
asi seria 

case "validacion":
    aqui es donde ponemos el codigo que ejecutaremos
brake; esto finaliza el case

si el valor no pertenece algun case
entonces usamos default

default
    "codigo aqui"
break;
*/
switch (diaSemana) {
  case 1:
    console.log("lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miercoles");
    break;

  default:
    console.log("opcion desconocida");
    break;
}
