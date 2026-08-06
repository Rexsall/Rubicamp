function extractText(text, start, end) {
    if (start = text.length || start < 0) {
        return {
            result: "",
            success: false,
            original: text
        };
    }

    return {
        result: text.slice(start, end + 1),
        success: true,
        original: text
    };
}

console.log(extractText("JavaScript", 0, 4));
console.log(extractText("Programming", 3, 7));
console.log(extractText("Hello", 10, 15));