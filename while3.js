const prompt = require('prompt-sync')()
let pilihan; 
// Tulis kode while loop di sini untuk sistem menu

while(pilihan != 4) {
    console.log("===MENU KAKULATOR===")
    console.log("1 tambah")
    console.log("2 kurang")
    console.log("3 kali")
    console.log("4 keluar")

    pilihan = Number(prompt("pilih menu 1-4:"));

    if (pilihan == 1) {
        console.log("anda memilih tambah");
    } else if (pilihan ==2){
        console.log("anda memilih kurang");
    } else if (pilihan ==3){
        console.log("anda memilih kali");
    } else if (pilihan !=4){
        console.log("pilihan tidak valid");
    }

}
console.log("Terima kasih telah menggunakan program!");