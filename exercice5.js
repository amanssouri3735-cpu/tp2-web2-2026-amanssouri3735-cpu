let nombres = [
    0,
    NaN,
    Infinity,
    -Infinity,
    42,
    3.14,
    Number.MAX_SAFE_INTEGER + 1,
    -0
];

for (let i = 0; i < nombres.length; i++) {
    let val = nombres[i];
    let affiche = "";

    if (Number.isNaN(val)) {
        affiche = "INVALIDE";
    } else if (val === Infinity || val === -Infinity) {
        affiche = "INFINI";
    } else if (val === 0 && 1 / val === -Infinity) {
        affiche = "ZERO NEGATIF";
    } else if (Number.isInteger(val)) {
        if (Math.abs(val) <= Number.MAX_SAFE_INTEGER) {
            affiche = "ENTIER SUR";
        } else {
            affiche = "ENTIER HORS LIMITES";
        }
    } else {
        affiche = "DECIMAL";
    }

    console.log(val + " -> " + affiche);
}