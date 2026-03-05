let pairs = [
    [0, ""],
    [0, "0"],
    [0, false],
    ["", false],
    [null, undefined],
    [null, false],
    [NaN, NaN],
    [1, "1"],
    [" \t\n ", 0]
];

let countDifferent = 0;

for (let i = 0; i < pairs.length; i++) {
    let a = pairs[i][0];
    let b = pairs[i][1];
    let doubleEqual = (a == b);
    let tripleEqual = (a === b);

    if (doubleEqual && !tripleEqual) countDifferent++;

    console.log(
        a + " == " + b + " \t -> " + doubleEqual + " \t| " +
        a + " === " + b + " \t -> " + tripleEqual
    );
}

console.log("---");

console.log(countDifferent + " paire(s) où == et === donnent des résultats différents");