const prompt = require('prompt-sync')()

let dadu;
let mainLagi;
let totalSkor = 0;

// Tulis kode do-while loop di sini untuk game dadu
let hasilDadu = [3, 6, 2];
let jawaban = ["y", "y", "n"];
let i = 0;

do {
    console.log("Melempar dadu...");

    dadu = hasilDadu[i];
    console.log("Hasil: " + dadu);

    totalSkor += dadu;

    if (dadu == 6) {
        console.log("JACKPOT! Bonus lemparan!");
    }

    console.log("Total skor: " + totalSkor);

    mainLagi = jawaban[i];
    console.log("Main lagi? (y/n): " + mainLagi);

    i++;
} while (mainLagi == "y");

console.log("Game selesai! Total skor: " + totalSkor);