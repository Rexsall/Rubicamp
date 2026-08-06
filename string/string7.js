function replaceText(text, oldText, newText) {
    let replacements = 0;

    let parts = text.split(oldText);
    replacements = parts.length - 1;

    let result = text.replaceAll(oldText, newText);

    return {
        result: result,
        replacements: replacements,
        original: text
    };
}

console.log(replaceText("Hello world hello", "hello", "hi"));
console.log(replaceText("test test test", "test", "exam"));
console.log(replaceText("JavaScript", "Python", "Java"));