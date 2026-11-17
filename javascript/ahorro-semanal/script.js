let costo = Number(prompt("¿Cuánto cuesta el audífono que te quieres comprar?"));
console.log("El audífono cuesta: $" + costo);

let semana = 0;
let ahorro = 0;

while (ahorro < costo) {
    ahorro = ahorro + 5000;
    semana = semana + 1;
    console.log("Semana", semana, "llevas", ahorro);
}

console.log("Semanas necesarias:", semana);