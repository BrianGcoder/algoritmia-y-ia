let costo = Number(prompt("¿Cuanto cuesta el audifono que te quieres comprar?"));
console.log("El audífono cuesta: $" + costo);

let semana = 0;
let ahorro = 0;

while (ahorro < costo) {
    ahorro = ahorro + 5000;
    semana = semana + 1;
    console.log('semana', semana,'llevas', ahorro)
}

console.log(semana)