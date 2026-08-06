let saldo = 100000;
let pilihan;
let lanjut;

// Tulis kode do-while loop di sini
let menu = [1, 2];
let jumlah = [0, 50000];
let jawab = ["y", "n"];
let i = 0;

do {
    console.log("=== ATM MENU ===");
    console.log("1. Cek Saldo");
    console.log("2. Tarik Tunai");
    console.log("3. Setor Tunai");
    console.log("4. Keluar");

    pilihan = menu[i];
    console.log("Pilih menu: " + pilihan);

    if (pilihan == 1) {
        console.log("Saldo Anda: Rp " + saldo);
    } else if (pilihan == 2) {
        console.log("Masukkan jumlah: " + jumlah[i]);
        saldo = saldo - jumlah[i];
        console.log("Penarikan berhasil. Saldo: Rp " + saldo);
    } else if (pilihan == 3) {
        console.log("Masukkan jumlah: " + jumlah[i]);
        saldo = saldo + jumlah[i];
        console.log("Setoran berhasil. Saldo: Rp " + saldo);
    } else if (pilihan == 4) {
        console.log("Keluar");
    }

    lanjut = jawab[i];
    console.log("Apakah ingin melakukan transaksi lain? (y/n): " + lanjut);

    i++;
} while (lanjut == "y");

console.log("Terima kasih telah menggunakan ATM!");