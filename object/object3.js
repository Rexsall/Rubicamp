// Tulis function processObjectData di sini
function processObjectData(obj) {
    let entries = Object.entries(obj);

    let strings = entries.filter(([Key, value]) => typeof value === "string");
    let numbers = entries.filter(([Key, value]) => typeof value === "number");
    let booleans = entries.filter(([Key, value]) => typeof value === "boolean");

    let transformed = Object.fromEntries(
        entries.map(([key, value]) => {
            if (typeof value === "string") {
                return [key.toUpperCase(), value.toUpperCase()];
            }

            if (typeof value === "number") {
                return [key.toUpperCase(), value * 2];
            }

            return [key.toUpperCase(), value];
        })
    );

    return {
        original: obj,
        byType: {
            strings: Object.fromEntries(strings),
            numbers: Object.fromEntries(numbers),
            booleans: Object.fromEntries(booleans)
        },
        transformed: transformed
    };
}
let data = {
    name: "Product A",
    price: 100,
    inStock: true,
    category: "Electronics",
    rating: 4.5
};
console.log(processObjectData(data));