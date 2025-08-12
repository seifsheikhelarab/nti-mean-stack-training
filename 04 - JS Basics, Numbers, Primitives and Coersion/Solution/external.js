var c1 = num1 + Number(num2);
console.log(c1.toFixed(6));
console.log(num1 + num3);
console.log(num1 * x);

var v1 = prompt("insert first value");
var v2 = prompt("insert second value");

if (parseInt(v1) != NaN && parseInt(v2) != NaN) {
  alert(parseInt(v1) + parseInt(v2));
} else {
  alert(v1 + v2);
}

var b1 = Number(prompt("enter first number")).toFixed(5);
var b2 = Number(prompt("enter second number")).toFixed(5);
var b3 = Number(prompt("enter third number")).toFixed(5);
var b4 = Number(prompt("enter fourth number")).toFixed(5);
var b5 = Number(prompt("enter fifth number")).toFixed(5);

console.log(b1, b2, b3, b4, b5);
