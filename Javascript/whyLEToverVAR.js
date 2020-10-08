// for (var i = 0; i <= 5; i++) {
// 	console.log('Before loop:');
// 	setTimeout(() => {
// 		console.log(i);
// 	}, 1000);
// }
// console.log('After loop:', i);

//Above code will give output:

// Before loop:
// Before loop:
// Before loop:
// Before loop:
// Before loop:
// Before loop:
// After loop: 6
// 6
// 6
// 6
// 6
// 6
// 6
// Since i had a global scope as we are using var, hence loop will run for 6 times and setTimeout function
// content will be put into a waiting box which will execute after 1 sec
// Hence After loop will execute and for that i becomes 6. When setTimeout executes at that time i has alreday become 6 hence we getv 6
// But we don't want it right.

// Hence we use let

for (let i = 1; i <= 5; i++) {
	console.log('Before loop:');
	setTimeout(() => {
		console.log(i);
	}, 1000);
}
// console.log('After loop:', i); // gives error as i has local scope only and waiting list will have local i only which is different for
//each iteration. hence we get 1 2 3 4 5
