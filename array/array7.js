function transformArray(arr, operations) {
    let transformed = arr.map(item => item * operations.multiply + operations.add);

    if (operations.logEach) {
        arr.forEach((item, i) => {
            console.log(`processing ke-${i + 1}: ${item} ->${transformed[i]}`)
        });
    }

    let sum = transformed.reduce((a, b) => a + b, 0);

    return {
        original: arr,
        transformed,
        stats: {
            processed: transformed.length,
            sum,
            average: sum / transformed.length
        }
    };
}

let numbers = [1, 2, 4, 6, 9];
console.log(transformArray(numbers, {
    multiply: 2,
    add: 1,
    logEach: true
}));