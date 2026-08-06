let angkaRandom;
let percobaan = 0;

// Tulis kode do-while loop di sini untuk generate angka genap
let random = [37, 83, 24];
let i = 0;

do {
    angkaRandom = random[i];
    percobaan++;

    if (angkaRandom % 2 == 0) {
        console.log("Percobaan " + percobaan + ": " + angkaRandom + " (genap, selesai!)");
    } else {
        console.log("Percobaan " + percobaan + ": " + angkaRandom + " (ganjil, coba lagi)");
    }

    i++;
} while (angkaRandom % 2 != 0);

console.log("Angka genap ditemukan: " + angkaRandom + " dalam " + percobaan + " percobaan");