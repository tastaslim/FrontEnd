// class myclass {
// 	constructor(name, age, gender) {
// 		this.name = name;
// 		this.age = age;
// 		this.gender = gender;
// 	}
// 	getInfo() {
// 		return [this.name, this.age, this.gender];
// 	}
// }

// class vehicle extends myclass {
// 	constructor(price, door) {
// 		super(price, door);
// 		this.price = price;
// 		this.door = door;
// 	}
// 	getInfo() {
// 		super.getInfo();
// 		return [this.price, this.door];
// 	}
// }
// let obj1 = new vehicle(2003030, 4);
// console.log(obj1.getInfo());

class car {
	constructor(doors, wheels, handle) {
		this.doors = doors;
		this.handle = handle;
		this.wheels = wheels;
	}
	getInfo() {
		return [this.doors, this.wheels, this.handle];
	}
}

class ferari extends car {
	constructor(doors, wheels, handle, AI, design) {
		super(doors, handle, wheels);
		this.doors = doors;
		this.handle = handle;
		this.wheels = wheels;
		this.AI = AI;
		this.design = design;
	}

	getInfo() {
		super.getInfo();
		return [this.doors, this.wheels, this.handle, this.AI, this.design];
	}
}

// class mustang extends car {

// }
let obj1 = new car(4, 2, 1);
let obj2 = new ferari(
	obj1.doors,
	obj1.wheels,
	obj1.handle,
	'Science',
	'Awesome'
);
console.log(obj2.getInfo());
