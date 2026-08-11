const prompt = require('prompt-sync')()

let angka;
let lanjut;

do {
    angka = Number(prompt("masukan angka: "));

    console.log("kuadrat dari " + angka + "adalah" + (angka * angka));

    lanjut = prompt("apakah ingin melanjutkan? y/n: ");

} while (lanjut == "y");

console.log("Terima kasih telah menggunakan program!");
