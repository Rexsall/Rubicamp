let totalBelanja = 350000;
// Tulis kode if-else if statement di sini

if (totalBelanja >= 500000) {
    diskon = 20;
} else if (totalBelanja >= 200000) {
    diskon = 10;
} else if (totalBelanja >= 100000) {
    diskon = 5;
}

let totalBayar = totalBelanja - (totalBelanja * diskon / 100);

console.log("Total belanja: Rp " + totalBelanja);
console.log("diskon: % " + diskon);
console.log("Total bayar: Rp " + totalBayar);