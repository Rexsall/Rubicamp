function processWords(sentence) {
    let words = sentence.split(" ");
    let count = words.length;
    let reversed = words.slice().reverse().join(" ");

    return {
        words: words,
        count: count,
        reversed: reversed
    };
}

// Driver Code
console.log(processWords("Hello beautiful world"));
console.log(processWords("JavaScript is awesome"));