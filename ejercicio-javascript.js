const prompt = require('prompt-sync')({sigint: true})

// Solicitar al usuario tres numeros
let num1 = Number(prompt("Ingrese su primer numero: "));
let num2 = Number(prompt("Ingrese su segundo numero: "));
let num3 = Number(prompt("Ingrese su tercer numero: "));

// Verificar si los numeros son iguales
if (num1 == num2 && num2 == num3){
    console.log("Los numeros son iguales.", num1, num2, num3);
} else {
    // Guardar los numeros en un array
    const numeros = [num1, num2, num3];

    // Ordenar los numeros de mayor a menor
    const ordenMayorAMenor = [...numeros].sort((a, b) => b - a);
    console.log("Numeros ordenadors de mayor a menor: ", ordenMayorAMenor);

    // Ordenar los numeros de menor a mayor
    const ordenMenorAMAyor = [...numeros].sort((a, b) => a - b);
    console.log("Numeros ordenados de menor a mayor: ", ordenMenorAMAyor);

    // Identificar el mayor, el del medio y el menor
    const mayor = ordenMayorAMenor[0];
    const medio = ordenMayorAMenor[1];
    const menor = ordenMayorAMenor[2];

    console.log(`Mayor: ${mayor}, Medio: ${medio}, Menor: ${menor}`);
}








