let tahap = ["Mengisi air", "Mencuci", "Membilas", "Mengeringkan"];
let tambahBilas;
let siklusSelesai = 0;

// Tulis kode do-while loop di sini untuk simulasi mesin cuci
let jawaban = ["y", "n"];
let i = 0;

do {
    siklusSelesai++;
    console.log("=== SIKLUS PENCUCIAN " + siklusSelesai + " ===");

    for (let j = 0; j < tahap.length; j++) {
        console.log(tahap[j] + "... selesai");
    }

    tambahBilas = jawaban[i];
    console.log("Tambah siklus pembilasan? (y/n): " + tambahBilas);

    i++;
} while (tambahBilas == "y");

console.log("Mesin cuci selesai! Total siklus: " + siklusSelesai);