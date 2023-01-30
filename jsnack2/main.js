const greenelement = document.getElementById("verde");
const redelement = document.getElementById("rosso");
const numeri = ["2", "23", "74", "15", "52", "64"];
console.log(numeri);
for (let i = 0; i < numeri.length; i++) {
    const numerini = numeri[i];
    if (numerini % 2 == 0) {
        greenelement.append(numerini);
    }

    else {
        redelement.append(numerini);
    }
}
