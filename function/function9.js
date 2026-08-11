// Tulis function processOrder di sini
function processOrder(namaItem, jumlah) {
    const harga = 15000;
    const subtotal = harga * jumlah;

    console.log(`
       === Detail Pesanan ===
Item: ${namaItem}
Jumlah: ${jumlah}
Harga per item: Rp ${harga}
Subtotal: Rp ${subtotal}
`);

    return subtotal;

}
// Panggil function dan gunakan return value
let totalBayar1 = processOrder("Nasi Goreng", 2);
let totalBayar2 = processOrder("Mie Ayam", 3);
console.log("Total yang harus dibayar: Rp " + (totalBayar1 + totalBayar2));