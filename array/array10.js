function arrayAnalyzer (arr) {
      let sum = arr.reduce((total, num) => total + num, 0);
  let average = Number((sum / arr.length).toFixed(2));

  let min = arr.reduce((a, b) => (a < b ? a : b));
  let max = arr.reduce((a, b) => (a > b ? a : b));

  let ascending = [...arr].sort((a, b) => a - b);
  let descending = [...arr].sort((a, b) => b - a);
  
  let median;
  if (ascending.length % 2 === 0) {
    let mid = ascending.length / 2;
    median = (ascending[mid - 1] + ascending[mid]) / 2;
  } else {
    median = ascending[Math.floor(ascending.length / 2)];
  }

  let frequency = {};
  let mode = null;
  let maxCount = 1;

  arr.forEach(num => {
    frequency[num] = (frequency[num] || 0) + 1;
    if (frequency[num] > maxCount) {
      maxCount = frequency[num];
      mode = num;
    }
  });

  let doubled = arr.map(num => num * 2);
  let squared = arr.map(num => num * num);
  let filtered = arr.filter(num => num > average);
  let reversed = [...arr].reverse();

  let allNumbers = arr.every(item => typeof item === "number");
  let hasNegatives = arr.some(item => item < 0);
  let hasZeros = arr.includes(0);
  let hasDuplicates = new Set(arr).size !== arr.length;

  return {
    original: [...arr],
    length: arr.length,
    statistics: {
      sum,
      average,
      min,
      max,
      median,
      mode
    },
    transformations: {
      doubled,
      squared,
      filtered,
      reversed
    },
    sorted: {
      ascending,
      descending
    },
    validation: {
      allNumbers,
      hasNegatives,
      hasZeros,
      hasDuplicates
    }
  };
}

let data = [5, 2, 8, 1, 9, 3];
let result = arrayAnalyzer(data);
console.log(result);