// Tulis function getCurrentTime di sini
function getCurrentTime() {
    let sekarang = new Date();

    let jam = String(sekarang.getHours()).padStart(2, "0");
    let menit = String(sekarang.getHours()).padStart(2, "0");
    let detik = String(sekarang.getHours()).padStart(2, "0");

    return jam + ":" + menit + ":" + detik;
}
// Panggil function dan simpan hasilnya
let waktu = getCurrentTime();
console.log("Waktu sekarang: " + waktu);