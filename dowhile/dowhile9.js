const prompt = require('prompt-sync')()

let tahapInstalasi = [
  "Download file",
  "Extract file",
  "Install program",
  "Setup konfigurasi"
];

let berhasil = false;
let percobaan = 0;
let jawaban = "y"; 

// Tulis kode do-while loop di sini untuk simulasi instalasi
do {
  percobaan++;
  console.log("=== PERCOBAAN INSTALASI " + percobaan + " ===");

  berhasil = true;

  for (let i = 0; i < tahapInstalasi.length; i++) {
    // Simulasi berhasil/gagal (80% berhasil)
    let sukses = Math.random() < 0.8;

    if (sukses) {
      console.log(tahapInstalasi[i] + "... berhasil");
    } else {
      console.log(tahapInstalasi[i] + "... GAGAL!");
      berhasil = false;
      break;
    }
  }

  if (!berhasil) {
    console.log("Instalasi gagal! Coba lagi? (y/n): " + jawaban);

    if (jawaban === "n") {
      break;
    }
  }

} while (!berhasil);

if (berhasil) {
  console.log("Instalasi berhasil dalam " + percobaan + " percobaan!");
} else {
  console.log("Instalasi dibatalkan setelah " + percobaan + " percobaan.");
}