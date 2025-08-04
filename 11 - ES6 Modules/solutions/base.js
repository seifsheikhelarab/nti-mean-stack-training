import Shape from "./shapeModule.js";
import { Rectangle, Square } from "./SquaresModule.js";
import { Circle } from "./CircleModule.js";

let circle1 = new Circle("red", 5);
let rec1 = new Rectangle("blue", 5, 6);
let sq1 = new Square("green", 5);

console.log(Shape.areas);
console.log(Shape.shapes);

circle1.getArea();
