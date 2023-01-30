const numeri = ["2", "23", "74", "15", "52", "64"];

let somma = 0;
for (let i = 0; i < numeri.length; i++) {

    const ninno = numeri[i];
    if (ninno % 2 != 0) {
        somma = somma + ninno;

    }
}

s


// const results = ["W", "W", "L", " X", " X", " W", "L", " X"];

// let vittorie = 0;
// let sconfitte = 0;
// let pareggi = 0;
// for (let i = 0; i < results.length; i++) {

//     const totale = results[i];

//     if (totale == "w") {
//         vittorie++

//     }
//     if (totale == "L") {
//         sconfitte++

//     }
//     if (totale == "X") {
//         pareggi++

//     };

// };
// console.log('le vittorie sono' + vittorie);
// console.log('le sconfitte sono' + sconfitte);
// console.log("i pareggi sono" + pareggi);
