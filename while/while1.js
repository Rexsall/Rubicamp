const prompt = require('prompt-sync')()

let angka = Number(prompt("masukan angka disini : "))
// Tulis kode while loop di sini untuk validasi input

while (angka < 1 || angka > 10) {
    console.log("Input tidak valid, masukkan angka 1-10")
    angka = Number(prompt("masukan angka disini : "))

}
console.log("Angka valid yang dimasukkan: " + angka);                                 