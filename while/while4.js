let kata = "programming";
let i = 0;
let ditemukan = false;
// Tulis kode while loop di sini untuk mencari huruf 'a'
while (i < kata.length && !ditemukan) {
  if (kata[i] === 'a')
    ditemukan = true
  if (!ditemukan) {

    i++;
  }
}
if (ditemukan) {
  console.log("Huruf 'a' ditemukan di posisi: " + i);
} else {
  console.log("Huruf 'a' tidak ditemukan");
}