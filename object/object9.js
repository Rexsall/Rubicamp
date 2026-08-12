// Tulis function createDataStore di sini
function createDataStore() {
    let data = [];
    let index = {};

    function insert(item) {
        data.push(item);

        if (!index.department) index.department = {};

        if (!index.department[item.department]) {
            index.department[item.department] = [];
        }

        index.department[item.department].push(item.id);

        return item;
    }

    function find(query) {
        return data.filter(item =>
            Object.keys(query).every(key => item[key] === query[key])
        );
    }

    function update(id, changes) {
        let item = data.find(item => item.id === id);

        if (!item) {
            return { succes: false, massage: "Data tidak di temukan" };
        }

        Object.assign(item, changes);

        return {
            succes: true,
            update: item
        };
    }

    function getStats() {
        let salaries = data.map(item => item.salary);

        return {
            totalRecords: data.length,
            departments: [...new Set(data.map(item => item.department))],
            averageSalary:
                salaries.reduce((total, salary) => total + salary, 0) / salaries.length,
            salaryRange: {
                min: Math.min(...salaries),
                max: Math.max(...salaries)
            }
        };
    }

    return {
        insert,
        find,
        update,
        getStats
    };
}

let store = createDataStore();
store.insert({ id: 1, name: "Alice", department: "IT", salary: 5000 });
store.insert({ id: 2, name: "Bob", department: "HR", salary: 4500 });
store.insert({ id: 3, name: "Charlie", department: "IT", salary: 5500 });

console.log(store.find({ department: "IT" }));
console.log(store.update(2, { salary: 4800 }));
console.log(store.getStats());