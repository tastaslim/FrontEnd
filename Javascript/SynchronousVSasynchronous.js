// Sysnchronous way in which function2 won't complete it's task untill function 1 get executed as in
// Sysnchrounous way one program run at a time and other starts when one gets completed

// let func1 = () => {
// 	let start = new Date().getTime();
// 	let i = 0;
// 	while (new Date().getTime() - start < 5000) {
// 		i += 1;
// 	}
// 	console.log('Func1');
// };

// let func2 = () => {
// 	console.log('Function 2 started');
// 	func1();
// 	console.log('Function 2 ended');
// };

// func2();

// Asysnchronous ==> best way

let func1 = () => {
	setTimeout(() => {
		console.log('Func1');
	}, 5000);
};

let func2 = () => {
	console.log('Function 2 started');
	func1();
	console.log('Function 2 ended');
};

func2();
