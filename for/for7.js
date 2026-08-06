let kata = "programming";
let jumlahVokal = 0;
// Tulis kode for loop di sini untuk menghitung vokal

for (let i = 0; i < kata.length; i++) {
    if (
        kata[i] == "a" ||
        kata[i] == "i" ||
        kata[i] == "u" ||
        kata[i] == "e" ||
        kata[i] == "o"
    ) {
        jumlahVokal++;
    }
}

console.log("Jumlah vokal: " + jumlahVokal);