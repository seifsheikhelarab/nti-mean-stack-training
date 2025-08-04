export default class Shape {
	static shapes = 0;
	static areas = 0;
	#color;
	constructor(color) {
		this.#color = color;
		Shape.areas++;
	}

	getColor() {
		console.log(this.#color);
	}
	setColor(color) {
		this.#color = color;
	}

	DrawShape() {
		console.log(this.#color);
	}
}
