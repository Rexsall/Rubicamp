function searchInText(text,searchTerm) {
    let found = text.includes (searchTerm);
    let firstindex = text.indexOf (searchTerm);
    let count = 0;

    if (found) {
        count = text.split(searchTerm).length -1;
    }

    return {
        found: found,
        firstindex: firstindex,
        count: count,
    };
}

console.log(searchInText("Hello world hello", "hello"));
console.log(searchInText("JavaScript is awesome", "Python"));
console.log(searchInText("test test test", "test"));