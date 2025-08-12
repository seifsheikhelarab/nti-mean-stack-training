let numbers = [3, 1, 2, 4, 3, 5, 1];

// Remove duplicates
numbers = new Array(...new Set(numbers));

console.log("After removing dupes", numbers);

//Sort in ascending order
numbers.sort(function (a, b) {
  return a - b;
});

console.log("After sorting", numbers);

//Filter numbers more than 50
numbers = numbers.filter(function (num) {
  return num < 50;
});

//Display max and min numbers using user defined function
function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
console.log("Minimun and Maximum:", minMax(numbers));

//Display max and min using ES6 syntax
console.log("Minimum", Math.min(...numbers));
console.log("Maximum", Math.max(...numbers));
