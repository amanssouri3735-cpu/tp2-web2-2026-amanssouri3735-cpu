let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

nom = nom.trim() || "Inconnu";
age = parseInt(age);
let ageValide = !isNaN(age) && age > 0;

let emailValide = email.includes("@") && email.indexOf(".", email.indexOf("@")) > -1;

scoreJeu = parseInt(scoreJeu);
scoreJeu = isNaN(scoreJeu) ? 0 : scoreJeu;

estAdmin = estAdmin === "true" ? true : false;

derniereConnexion = derniereConnexion ?? "Jamais connecté";

nombreConnexions = Number(nombreConnexions);
nombreConnexions = nombreConnexions === 0 ? "Aucune connexion" : nombreConnexions;

console.log("\n===== RAPPORT UTILISATEUR =====");
console.log('nom              : "' + nom + '" (corrigé : espaces supprimés)');
console.log("age              : " + age + " (" + (ageValide ? "valide" : "invalide") + ")");
console.log('email            : "' + email + '" (' + (emailValide ? "valide" : "invalide : pas de point après @") + ")");
console.log("scoreJeu         : " + scoreJeu + " (extrait depuis '150pts')");
console.log("estAdmin         : " + estAdmin + " (attention : Boolean('false') = true, conversion manuelle requise)");
console.log('derniereConnexion: "' + derniereConnexion + '" (valeur par défaut via ??)');
console.log("nombreConnexions : " + nombreConnexions);
console.log("================================");