const prompt = require('prompt-sync')()

let antrian = ["Budi", "Sari", "Andi"];
let nasabahDilayani = 0;
let adaNasabahBaru;

// Tulis kode do-while loop di sini untuk simulasi antrian bank
do {
  let nasabah = antrian.shift();
  console.log("Melayani nasabah: " + nasabah);
  nasabahDilayani++;

  if (antrian.length > 0) {
    console.log("Sisa antrian: " + antrian.length + " orang");
  } else {
    console.log("Antrian kosong.");

    if (nasabahDilayani === 3) {
      adaNasabahBaru = "y";
    } else {
      adaNasabahBaru = "n";
    }

    console.log("Ada nasabah baru yang datang? (y/n): " + adaNasabahBaru);

    if (adaNasabahBaru === "y") {
      let nasabahBaru = "Dewi";
      console.log("Nasabah baru: " + nasabahBaru);
      antrian.push(nasabahBaru);
    }
  }

} while (antrian.length > 0);

console.log("Bank tutup. Total nasabah dilayani: " + nasabahDilayani);