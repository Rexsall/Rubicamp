function analyzeElements(arr) {
    let hasil = [];

    for (let i = 0; i < arr.length; i++) {
        hasil.push({
            value: arr[i],
            index: i,
            type: typeof arr[i],
        });
    }
    return hasil;
}

console.log(analyzeElements([10, "hello", true]));
console.log(analyzeElements([1, 2, 3]));
