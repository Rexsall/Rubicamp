function aggregateArray(arr) {
    let result = {
        original: [...arr]
    };

    if (arr.length === 0) {
        return result;
    }

    if (typeof arr[0] === "number") {
        result.sum = arr.reduce((total, num) => total + num, 0);

        result.product = arr.reduce((total, num) => total * num, 1);

        result.max = arr.reduce((max, num) => num > max ? num : max);

        result.min = arr.reduce((min, num) => num < min ? num : min);

        result.sortedAsc = [...arr].sort((a, b) => a - b);
        result.sortedDesc = [...arr].sort((a, b) => b - a);
    }

    else if (typeof arr[0] === "string") {
        result.concatenated = arr.reduce((text, word) => text + word, "");

        result.longest = arr.reduce((longest, word) =>
            word.length > longest.length ? word : longest
        );

        result.shortest = arr.reduce((shortest, word) =>
            word.length < shortest.length ? word : shortest
        );

        result.sortedAsc = [...arr].sort();
        result.sortedDesc = [...arr].sort().reverse();
    }

    return result;
}

console.log(aggregateArray([3, 1, 4, 1, 5, 9, 2, 6]));
console.log(aggregateArray(["banana", "apple", "cherry", "date"]));