function manageQueue(arr, operations) {
    let queue = [...arr];

    let enqueued = 0;
    let dequeued = 0;

    for (let i = 0; i < operations.length; i++) {
        if (operations[i].startsWith("enqueue:")) {
            let value = operations[i].split(":")[1];
            queue.push(value);
            enqueued++;
        } else if (operations[i] === "dequeue") {
            if (queue.length > 0) {
                queue.shift();
                dequeued++;
            }
        }
    }

    return {
        result: queue,
        stats: {
            enqueued: enqueued,
            dequeued: dequeued,
            operations: operations.length
        }
    };
}

console.log(manageQueue([1, 2], ["enqueue:3", "dequeue", "enqueue:4"]));
console.log(manageQueue([], ["enqueue:x", "enqueue:y", "dequeue"]));   