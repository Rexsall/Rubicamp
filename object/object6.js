// Tulis function createCalculator di sini
function createCalculator() {
    let history = [];

    function calculate(operation, a, b, fn) {
        let result = fn(a, b);

        history.push({
            operation,
            operands: [a, b],
            result
        });

        return result;
    }

    return {
        add(a, b) {
            return calculate("add", a, b, (x, y) => x + y);
        },

        multiply(a, b) {
            return calculate("multiply", a, b, (x, y) => x * y);
        },

        divide(a, b) {
            return calculate("divide", a, b, (x, y) => x / y);
        },

        getHistory() {
            return history;
        },

        reset() {
            history = [];
        }
    };
}

let calc = createCalculator();

console.log(calc.add(5, 3));
console.log(calc.multiply(4, 2));
console.log(calc.divide(10, 2));
console.log(calc.getHistory());

calc.reset();

console.log(calc.getHistory());