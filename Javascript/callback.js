// Fetch a roll number after 2 second
// After 2 second fetch name and age corresponding to above roll number
// After 2 second fetch department and salary corresponding to above name

let InformationAPI = () => {
	console.log('My information API');
	setTimeout(() => {
		console.log('Fetching roll number API');
		let rollNumberArray = [1, 2, 3, 4, 5, 6];
		// console.log('Required roll number:', rollNumberArray[2]);
		setTimeout(
			(roll) => {
				console.log('Fetching name and age API');
				let obj = {
					name: 'Taslim',
					age: 20,
				};
				// console.log(`Name is {name} and age is {age}`);
				setTimeout(
					(passedname) => {
						console.log('fetching department and salary API');
						let department = 'Software Engineering';
						let salary = 80000;
						let ans = [
							rollNumberArray[2],
							obj.name,
							obj.age,
							department,
							salary,
						];

						console.log(`Employee information:\n[${ans}]`);
					},
					2000,
					obj.name
				);
			},
			2000,
			rollNumberArray[2]
		);
	}, 2000);
};
//You see if we keep on call setTimeout() inside one again and again. It would create a callBack hell
// Which is very difficult to management and makes it impossible to understand the code.
//Hence to deal with this problem we use promises

InformationAPI();
