function Object(a, b) {
	let name = a;
	let lastName = b;
	Object.prototype.setString = function (name, lastName) {
		return `${name} ${lastName}`;
	}
}

let newObj = new Object();
console.log(newObj.setString('Mikele', 'Corleone'));