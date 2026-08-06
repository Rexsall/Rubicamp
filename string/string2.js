
function analyzeCharacters(text) {
    let hasil = [];

    for (let i = 0; i < text.length; i++) {
        hasil.push({
            char: text.charAt(i),
            position: i
        });
    }
    return hasil;
}

console.log(analyzeCharacters("Hi"));
console.log(analyzeCharacters("Code"));
