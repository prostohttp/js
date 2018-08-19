function Point(x, y) {
	this.x = x;
	this.y = y;
	this.toString = function () {
		return this.x + this.y;
	}
	// console.log(`${x % y}`);
}

let p = new Point(100, 20);
let d = new Point(200, 20);
// console.log(p.func(10, 20));
console.log(p.a);
console.log(p);