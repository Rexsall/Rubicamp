// Tulis function transformObjectArray di sini
function transformObjectArray(data, config) {
    let result = [...data];

    // FILTER
    if (config.filter) {
        let { key, operator, value } = config.filter;

        result = result.filter(item => {
            if (operator === ">=") return item[key] >= value;
            if (operator === ">") return item[key] > value;
            if (operator === "<=") return item[key] <= value;
            if (operator === "<") return item[key] < value;
            if (operator === "===") return item[key] === value;
            return true;
        });
    }

    // MAP
    if (config.map) {
        let key = Object.keys(config.map)[0];
        let expression = config.map[key];

        result = result.map(item => {
            let [field, multiplier] = expression.split("*");

            return {
                ...item,
                [key]: item[field.trim()] * Number(multiplier)
            };
        });
    }

    // SORT
    if (config.sort) {
        let { key, order } = config.sort;

        result.sort((a, b) => {
            return order === "desc"
                ? b[key] - a[key]
                : a[key] - b[key];
        });
    }

    // GROUP
    if (config.group) {
        let grouped = {};

        result.forEach(item => {
            let category = item[config.group];

            if (!grouped[category]) {
                grouped[category] = [];
            }

            grouped[category].push(item);
        });

        return grouped;
    }

    return result;
}

let products = [
    { id: 1, name: "Laptop", price: 1000, category: "Electronics", rating: 4.5 },
    { id: 2, name: "Phone", price: 500, category: "Electronics", rating: 4.2 },
    { id: 3, name: "Book", price: 20, category: "Education", rating: 4.8 }
];

let config = {
    filter: { key: "price", operator: ">=", value: 100 },
    map: { priceWithTax: "price * 1.1" },
    sort: { key: "rating", order: "desc" },
    group: "category"
};

console.log(transformObjectArray(products, config));