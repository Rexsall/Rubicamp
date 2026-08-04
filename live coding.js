let angka;

// Perulangan akan terus berjalan selama input tidak valid
while (true) {
    angka = Number(prompt("Masukkan angka (1-10):"));

    if (angka >= 1 && angka <= 10) {
        break; // Keluar dari perulangan jika input valid
    }

    console.log("Input tidak valid, masukkan angka 1-10");
}

console.log("Angka valid yang dimasukkan: " + angka);