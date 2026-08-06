let statusCode = 404;
// Tulis kode switch statement di sini

switch (statusCode) {
    case 200:
        console.log("200: OK - Halaman ditemukan");
        break;

    case 404:
        console.log("404: Not Found - Halaman tidak ditemukan");
        break;    

    case 500:
        console.log("500: Internal Server Error - Kesalahan Server Internal");
        break;    

    case 403:
        console.log("403: Forbidden - Kesalahan Server Internal");
        break;    

default:
        console.log("Unknown Status");
}