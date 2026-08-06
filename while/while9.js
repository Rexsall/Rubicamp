let angka = 2;
let iterasi = 0;

// Tulis kode while loop di sini untuk pengkuadratan berulang
while (angka <= 1000) {
    let sebelum = angka;
    angka = angka * angka;
    iterasi++;

    console.log("Iterasi " + iterasi + ": " + sebelum + "^2 = " + angka);
}

console.log("Angka 2 harus dikuadratkan " + iterasi + " kali untuk melebihi 1000");
console.log("Hasil akhir: " + angka);