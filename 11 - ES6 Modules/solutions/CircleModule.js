import Shape from "./shapeModule.js";

export class Circle extends Shape {
	constructor(color, radius) {
		super(color);
		this.radius = radius;
	}
	getArea() {
		this.DrawShape();
		Shape.areas++;
		console.log(this.radius * this.radius * Math.PI);
	}
}
