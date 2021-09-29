const prompt = require('prompt-sync')({sigint: true});

let res = 0;
let val1 = parseInt(prompt("première valeur : ", "x"));
let val2 = parseInt(prompt("deuxième valeur : ", "y"));
let operateur = prompt("opérateur : ", "+");

if (operateur === "/") {
res = val1 / val2;
}
else if (operateur === "*") {
  res = val1 * val2;
}
else if (operateur === "-") {
  res = val1 - val2;
}
else if (operateur === "+") {
  res = val1 + val2;
}
else {
  console.log("operateur invalide")
}

console.log('resultat :', res);
