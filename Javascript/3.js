// Array

// array = [1, 2, 3, 4, 5, 6, 7, 8];
// for (let i = 0; i < array.length; i += 1) {
// 	console.log(array[i]);
// }

let list = [1, 2, 3, 4, 4, 6, 12];
let product = 15;
let count = 0;
let i = 0;
let j = list.length - 1;
while (i < j) {
	if (list[i] * list[j] <= product) {
		let k = j - i;
		count += k;
		i += 1;
	} else {
		j -= 1;
	}
}
console.log(count);
