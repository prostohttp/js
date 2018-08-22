// function Point(x, y) {
// 	this.x = x;
// 	this.y = y;
// 	console.log(`${x % y}`);
// }

// let p = new Point(100, 20);
// let d = new Point(200, 20);

class Human {
    constructor() {
        console.log(`PARENT`);
    }
}

class FullName extends Human {
    constructor(name, lastName) {
        super();
        this.name = name;
        this.lastName = lastName;
    }

    sayHi() {
        console.log(`${this.name} ${this.lastName}`);
    }
}

const name = new FullName('Mikele', 'Corleone');

console.log(name.sayHi());