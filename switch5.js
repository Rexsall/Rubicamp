let angka1 = 15;
let angka2 = 4;
let operator = "%";
// Tulis kode switch statement di sini

switch(operator) {
  case "+":
    console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);
    break;

  case "+":
    console.log(`${angka1} + ${angka2} = ${angka1 + angka2}`);
    break;

  case "*":
    console.log(`${angka1} * ${angka2} = ${angka1 * angka2}`);
    break;
    
  case "/":
    if (angka2 !== 0) {
      console.log(`${angka1} / ${angka2} = ${angka1 / angka2}`);
    } else {
      console.log("Error: Pembagian dengan nol tidak diperbolehkan.");
    }
    break;

  case "%":
    console.log(`${angka1} % ${angka2} = ${angka1 % angka2}`);
    break;

default:
    console.log("Error: Operator tidak valid");  
}

