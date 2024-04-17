/* Escribir una función llamada contrasenaValida que reciba un string y retorne true si el string es igual a "2Fj(jjbFsuj" o "eoZiugBf&g9". De lo contrario debe retornar false. */

/* let contra = prompt("Digita una contrasena");

function contrasenaValida(password) {
  if (password === "pepito" || password === "juan") {
    return console.log(true);
  } else {
    return console.log(false);
  }
}

contrasenaValida(contra); */

/* Escribir una función llamada calcularImpuestos que reciba dos argumentos numéricos: edad e ingresos. Si edad es igual o mayor a 18 y los ingresos son iguales o mayores a 1000 debe retornar ingresos * 40%. De lo contrario retornar 0. */

let edad = prompt("Digita la edad");
let ingresos = prompt("Digita el ingreso");

function calcularImpuestos(edad, ingresos) {
  if (edad >= 18 && ingresos >= 1000) {
    console.log(typeof ingresos);
    return console.log(ingresos * 0.4);
  } else {
    return console.log(0);
  }
}

let num = parseInt(ingresos);

calcularImpuestos(edad, ingresos);
