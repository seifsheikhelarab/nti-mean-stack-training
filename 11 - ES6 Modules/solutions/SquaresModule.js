import Shape from "./shapeModule.js";

export class Rectangle extends Shape {
	constructor(color, width, height) {
		super(color);
		this.width = width;
		this.height = height;
	}

	getArea() {
		this.DrawShape();
		Shape.areas++;
		console.log(this.width * this.height);
	}
}

export class Square extends Rectangle {
	constructor(color, side) {
		super(color);
		this.side = side;
	}

	getArea() {
		this.DrawShape();
		Shape.areas++;
		console.log(this.side * this.side);
	}
}
