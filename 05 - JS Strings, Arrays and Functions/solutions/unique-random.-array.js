// Write a JavaScript function that returns a random array of numbers between 1 and 10

let randomArray = [];
while (randomArray.length < 8) {
  let num = Math.floor(Math.random() * 10) + 1;
  if (!randomArray.includes(num)) {
    randomArray.push(num);
  }
}
console.log(randomArray);
