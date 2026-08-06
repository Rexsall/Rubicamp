function convertCase(text, mode) {
    if (mode === "upper") {
        return text.toUpperCase();
    } else if (mode === "lower") {
        return text.toUpperCase();
    } else if (mode === "title") {
        let kata = text.toLowerCase().split(" ");

        for (let i = 0; i < kata.length; i++) {
            kata[i] = kata[i].charAt(0).toUpperCase() + kata[i].slice(1);
        }
        return kata.join(" ");
    }
}

console.log(convertCase("hello world", "upper"));
console.log(convertCase("HELLO WORLD", "lower"));
console.log(convertCase("hello world", "title"));