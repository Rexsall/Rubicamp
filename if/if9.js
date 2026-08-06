let jenisKendaraan = "mobil";
let durasi = 3; // jam
let tarifPerJam;
// Tulis kode if-else if-else statement di sini
if (jenisKendaraan === "motor") {
   tarifPerJam = 2000;
} else if (jenisKendaraan === "mobil") {
   tarifPerJam = 5000;
} else if (jenisKendaraan === "truk") {
   tarifPerJam = 10000;
} else {
   console.log("Kendaraan tidak diizinkan");
}

if (tarifPerJam) {
   let totalBayar = tarifPerJam * durasi;

   console.log("Jenis kendaraan: " + jenisKendaraan);
   console.log("Durasi parkir: " + durasi + " jam");
   console.log("Tarif per jam: Rp " + tarifPerJam);
   console.log("Total bayar: Rp " + totalBayar);
}