const prompt = require('prompt-sync')()
let angkaRahasia = 7;
let tebakan;
let percobaan = 0;

while (true) {
    tebakan = Number(prompt("masukan angka disini : "))
    percobaan++
    if(tebakan > angkaRahasia){
        console.log("Terlalu besar! Coba lagi.")
    } else if(tebakan < angkaRahasia){
        console.log("Terlalu kecil! Coba lagi.")
    } else if(tebakan == angkaRahasia){
        break;
    }
}                             

console.log("Selamat! Anda berhasil menebak dalam " + percobaan + " percobaan");