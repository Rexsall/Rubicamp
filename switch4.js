let bulan = 10;
// Tulis kode switch statement di sini

switch (bulan) {
  case 1:
    console.log("Bulan ke-1 (Januari) memiliki 31 hari");
    break;

  case 2:
    console.log("Bulan ke-2 (Februari) memiliki 28 hari");
    break;

  case 3:
    console.log("Bulan ke-3 (Maret) memiliki 31 hari");
    break;

  case 4:
  case 6:
  case 9:
  case 11:
    let namaBulan30;

    switch (bulan) {
      case 4:
        namaBulan30 = "April";
        break;
      case 6:
        namaBulan30 = "Juni";
        break;
      case 9:
        namaBulan30 = "September";
        break;
      case 11:
        namaBulan30 = "November";
        break;
    }

    console.log(`Bulan ke-${bulan} (${namaBulan30}) memiliki 30 hari`);
    break;

  case 5:
    console.log("Bulan ke-5 (Mei) memiliki 31 hari");
    break;

  case 7:
    console.log("Bulan ke-7 (Juli) memiliki 31 hari");
    break;

  case 8:
    console.log("Bulan ke-8 (Agustus) memiliki 31 hari");
    break;

  case 10:
    console.log("Bulan ke-10 (Oktober) memiliki 31 hari");
    break;

  case 12:
    console.log("Bulan ke-12 (Desember) memiliki 31 hari");
    break;

  default:
    console.log("Nomor bulan tidak valid");
}