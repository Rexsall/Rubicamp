let tombol = "SPACE";
// Tulis kode switch statement di sini

switch (tombol) {
    case "W":
        console.log("tombol W = karakter maju");
        break;

    case "S":
        console.log("tombol S = karakter mundur");
        break;   

    case "A":
        console.log("tombol A = karakter kiri");
        break;    

    case "D":
        console.log("tombol d = karakter kanan");
        break;    

    case "SPACE":
        console.log("tombol SPACE = karakter lompat");
        break;   
        
    case "ESC":
        console.log("tombol ESC = karakter pause");
        break;        

default:
    console.log("Tombol tidak valid");        
}