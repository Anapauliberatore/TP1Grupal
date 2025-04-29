// Realizado por: Rosario Jimenez Galarza

// Pedir y guardar el valor de los tres numeros.
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));

// Variable para guardar el número que sea mayor.
let mayor;

// Determina cuál es el mayor.

if (num1 > num2 && num1 > num3) {
    mayor = num1;
} else if (num2 > num1 && num2 > num3) {
    mayor = num2;
} else {
    mayor = num3;
}

// Muestra el número mayor en pantalla.
alert("El número mayor es:" + mayor);