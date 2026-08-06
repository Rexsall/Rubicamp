let soal = ["5 + 3 = ?", "10 - 4 = ?", "7 * 2 = ?"];
let jawaban = [8, 6, 14];
let jawabanUser;
let lanjut;
let nomorSoal = 0;
let benar = 0;

// Tulis kode do-while loop di sini untuk kuis
let jawabUser = [8, 5, 14];
let pilih = ["y", "y", "n"];

do {
    console.log("Soal " + (nomorSoal + 1) + ": " + soal[nomorSoal]);

    jawabanUser = jawabUser[nomorSoal];
    console.log("Jawaban Anda: " + jawabanUser);

    if (jawabanUser == jawaban[nomorSoal]) {
        console.log("Benar!");
        benar++;
    } else {
        console.log("Salah! Jawaban yang benar: " + jawaban[nomorSoal]);
    }

    lanjut = pilih[nomorSoal];
    console.log("Lanjut ke soal berikutnya? (y/n): " + lanjut);

    nomorSoal++;

} while (lanjut == "y" && nomorSoal < soal.length);

console.log("Kuis selesai! Skor: " + benar + "/" + nomorSoal);