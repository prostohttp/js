function Point(x, y) {
	this.x = x;
	this.y = y;
	console.log(`${x % y}`);
}

let p = new Point(100, 20);
let d = new Point(200, 20);