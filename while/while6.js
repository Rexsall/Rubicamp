let password;
let percobaan = 0;
let maxPercobaan = 3;
let berhasil = false;

let input = ["123", "admin", "admin123"];
let i = 0;

// Tulis kode while loop di sini untuk validasi password
while (percobaan < maxPercobaan && !berhasil) {
    password = input[i];
    i++;

    if (password == "admin123") {
        berhasil = true;
    } else {
        percobaan++;
        console.log("Password salah. Sisa percobaan: " + (maxPercobaan - percobaan));
    }
}

if (berhasil) {
    console.log("Login berhasil!");
} else {
    console.log("Akses ditolak. Terlalu banyak percobaan gagal.");
}