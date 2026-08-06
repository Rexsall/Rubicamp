function textAnalyzer(text) {
    let cleaned = text.trim();
    let words = cleaned.split(" ");

    let uppercaseCount = 0;
    let lowercaseCount = 0;
    let hasNumbers = false;
    let hasSpecialChars = false;
    let sentenceCount = 0;

    for (let i = 0; i < cleaned.length; i++) {
        let ch = cleaned.charAt(i);

        if (ch >= "A" && ch <= "Z") {
            uppercaseCount++;
        } else if (ch >= "a" && ch <= "z") {
            lowercaseCount++;
        } else if (ch >= "0" && ch <= "9") {
            hasNumbers = true;
        } else if (ch !== " ") {
            hasSpecialChars = true;
        }

        if (ch === "." || ch === "!" || ch === "?") {
            sentenceCount++;
        }
    }

    let longestWord = words[0];
    let shortestWord = words[0];

    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
        if (words[i].length < shortestWord.length) {
            shortestWord = words[i];
        }
    }

    return {
        original: text,
        cleaned: cleaned,
        stats: {
            totalLength: text.length,
            cleanedLength: cleaned.length,
            wordCount: words.length,
            sentenceCount: sentenceCount,
            uppercaseCount: uppercaseCount,
            lowercaseCount: lowercaseCount
        },
        words: words,
        longestWord: longestWord,
        shortestWord: shortestWord,
        hasNumbers: hasNumbers,
        hasSpecialChars: hasSpecialChars
    };
}

let result = textAnalyzer("  Hello World! This is a TEST string.  ");
console.log(result);