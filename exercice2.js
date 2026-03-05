let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let val = valeurs[i];
    let strVal = String(val);
    let truthyOrFalsy = val ? "truthy" : "falsy";
    console.log(strVal + " -> " + truthyOrFalsy);
}