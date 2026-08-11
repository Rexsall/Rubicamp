const prompt = require('prompt-sync')()

let password;
let valid = false;

// Tulis kode do-while loop di sini untuk validasi password
let dataPassword = ["abc", "12345", "abc123"];
let i = 0;

do {
    password = dataPassword[i];
    console.log("Buat password Anda: " + password);

    let adaAngka = false;

    for (let j = 0; j < password.length; j++) {
        if (password[j] >= "0" && password[j] <= "9") {
            adaAngka = true;
        }
    }

    if (password.length >= 6 && adaAngka) {
        valid = true;
        console.log("Password valid!");
    } else {
        console.log("Password tidak valid! Harus minimal 6 karakter dan mengandung angka.");
    }

    i++;
} while (!valid);

console.log("Password berhasil dibuat: " + password);