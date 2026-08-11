function manageStack(arr, operations) {
    let result = [...arr]; 
    let log = [];

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].startsWith("push:")) {
            let value = operations[i].split(":")[1];
            result.push(value);
            log.push("Added " + value);
        } else if (operations[i] === "pop") {
            let removed = result.pop();
            log.push("Removed " + removed);
        }
    }

    return {
        result: result,
        log: log
    };
}

console.log(manageStack([1, 2], ["push:3", "push:4", "pop"]));
console.log(manageStack([], ["push:a", "push:b", "pop", "push:c"]));