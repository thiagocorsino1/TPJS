//#region
/* Imprimir por consola los siguientes datos: variables, let, constantes. */
var nombre = `thiago`;
let fruta = `banana`;
const hello = `hola`;

console.log(nombre);
console.log(fruta);
console.log(hello);

//#endregion

//#region
/* Generar funciones de cálculos matemáticos*/
var num = 5;

function square(num) {
    return (num * num);
}
console.log(square)

var num2 = 10;

function suma(num2) {
    return num2 + num2;
}
console.log(suma);

var num3 = 20;

function division(num3) {
    return num3 / num3;
}

//#endregion
//#region
/* Generar un tipo de array y recorrerlo*/

let estaciones = ["verano", "otoño", "invierno"];
let [a, b, c] = estaciones;
console.log(a, b, c);
//#endregion