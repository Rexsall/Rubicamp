function arrayOperations(arr, start, deleteCount, items) {
    let sliced = arr.slice(start, start + deleteCount);

    let spliced = arr.slice();

    let removed = spliced.splice(start, deleteCount, ...items);

    return {
        ariginal: arr,
        sliced: sliced,
        spliced: spliced,
        removed: removed
    };
}

console.log(arrayOperations([1, 2, 3, 4, 5], 1, 2, [10, 20]));
console.log(arrayOperations(["a", "b", "c", "d"], 0, 1, ["x"]));