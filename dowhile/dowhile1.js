let angka;
let lanjut;

// Tulis kode do-while loop di sini
let dataAngka = [5, 3];
let dataLanjut = ["y", "n"];
let i = 0;

do {
    angka = dataAngka[i];
    console.log("Masukkan angka: " + angka);
    console.log("Kuadrat dari " + angka + " adalah: " + (angka * angka));

    lanjut = dataLanjut[i];
    console.log("Apakah ingin melanjutkan? (y/n): " + lanjut);

    i++;
} while (lanjut == "y");

console.log("Terima kasih telah menggunakan program!");