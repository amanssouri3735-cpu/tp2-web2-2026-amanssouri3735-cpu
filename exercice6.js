let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = { nom, age, ville, score, actif };

console.log("=== Partie A : ?? ===");
for (let key in variables) {
    console.log(key + " ?? 'valeur par défaut' -> " + (variables[key] ?? "valeur par défaut"));
}

console.log("\n=== Partie B : || ===");
for (let key in variables) {
    console.log(key + " || 'valeur par défaut' -> " + (variables[key] || "valeur par défaut"));
}

console.log("\n=== Partie C : comparaison ?? vs || ===");
for (let key in variables) {
    let doubleQ = variables[key] ?? "valeur par défaut";
    let orOp = variables[key] || "valeur par défaut";
    let comparaison = doubleQ === orOp ? "même résultat" : "résultat différent";
    console.log(key + " : ?? et || -> " + comparaison);
}