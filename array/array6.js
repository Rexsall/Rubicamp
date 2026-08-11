// Tulis function validateArrayData di sini

function validateArrayData(arr) {
  let allNumbers = arr.every(item => typeof item === "number");
  let hasNulls = arr.some(item => item === null);
  let hasUndefined = arr.some(item => item === undefined);

  let stats = {
    total: arr.length,
    numbers: arr.filter(item => typeof item === "number").length,
    strings: arr.filter(item => typeof item === "string").length,
    nulls: arr.filter(item => item === null).length,
    undefined: arr.filter(item => item === undefined).length
  };

  let cleaned = arr.filter(item => typeof item === "number");

  return {
    isValid: allNumbers && !hasNulls && !hasUndefined,
    allNumbers,
    hasNulls,
    hasUndefined,
    stats,
    cleaned
  };
}

// Driver code
let data1 = [1, 2, 3, 4, 5];
let data2 = [1, "2", 3, null, 5, undefined];

console.log(validateArrayData(data1));
console.log(validateArrayData(data2));