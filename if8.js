let berat = 70; 
let tinggi = 1.75;

let bmi = berat / (tinggi * tinggi);

if (bmi < 18.5) {
    console.log("Kategori: Underweight");
} else if (bmi < 25) {
    console.log("Kategori: Normal");
} else if (bmi < 30) {
    console.log("Kategori: Overweight");
} else {
    console.log("Kategori: Obese");
}

console.log("BMI:",bmi.toFixed(2));