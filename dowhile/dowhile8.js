let namaDepan = "user";
let username;
let puas;
let percobaan = 0;

// Tulis kode do-while loop di sini untuk generate username
let angkaRandom = [1234, 5678];
let jawaban = ["n", "y"];
let i = 0;

do {
    percobaan++;

    username = namaDepan + angkaRandom[i];
    console.log("Percobaan " + percobaan + ": Username yang dihasilkan: " + username);

    puas = jawaban[i];
    console.log("Apakah Anda puas dengan username ini? (y/n): " + puas);

    i++;
} while (puas == "n");

console.log("Username final: " + username + " (dibuat dalam " + percobaan + " percobaan)");