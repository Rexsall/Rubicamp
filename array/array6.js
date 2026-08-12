function searchArray(arr, criteria) {
  let found;
  let filtered = [];

  if (criteria.type === "number" && criteria.condition === "greater") {
    found = arr.find(num => num > criteria.value);
    filtered = arr.filter(num => num > criteria.value);
  }

  if (criteria.type === "string" && criteria.condition === "contains") {
    found = arr.find(word => word.includes(criteria.value));
    filtered = arr.filter(word => word.includes(criteria.value));
  }

  return {
    found: found,
    filtered: filtered,
    includes: arr.includes(criteria.value),
    count: filtered.length
  };
}

let numbers = [1, 5, 10, 15, 20];
console.log(searchArray(numbers, { type: "number", value: 10, condition: "greater" }));

let words = ["apple", "banana", "cherry"];
console.log(searchArray(words, { type: "string", value: "an", condition: "contains" }));