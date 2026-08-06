function cleanAndFormat(text, width) {
    let cleaned = text.trim().split(/\s+/).join(" ");

    let totalPadding = width - cleaned.length;
    let leftPadding = Math.floor(totalPadding / 2);
    let rightPadding = totalPadding - leftPadding;

    let padded = cleaned
        .padStart(cleaned.length + leftPadding)
        .padEnd(width);

    return {
        cleaned: cleaned,
        padded: padded,
        length: padded.length
    };
}


console.log(cleanAndFormat("  Hello   World  ", 15));
console.log(cleanAndFormat("JavaScript", 12));
console.log(cleanAndFormat("  Code  ", 8));