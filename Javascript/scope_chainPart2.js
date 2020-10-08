function outer() {
	console.log('This is', a + b + c + d);
}
let d = 'I am 20 years old.';
function one() {
	// a yha mil gya great a use it but d nhi mila. Again move upwards in bootom to up manner and search for
	// d in nested heierachy but nested heirarchy toh hai hi na wo khatam ho gyi, hence look in
	//global context for variable d.
	let a = 'My name ';
	function two() {
		// b yha mil gya use it but a nhi mila. Again move upwards in bootom to up manner and search for
		// a in nested heierachy.
		let b = 'is Taslim';
		function three() {
			let c = ' Arif';
			// a b and c ko search karo in function three execution context. c mil gya great
			// a and b nhi mila then look in bottom to up manner in nested function heirarchy.
			console.log(a + b + c + d);
			outer();
		}
		three();
	}
	two();
}

one();

// function outer() {
// 	console.log('This is', a + b + c + d);
// }

// This will throw an error saying that a is not defined because function outer() ke liye toh
//a b c d accessible hi nhi hai n.function outer will firstly check for a,b,c,d in its' oen execution context
// if it does not find it will go up in heirarchy but outer function me toh koi heirarchy hi nhi hai. Hence it
// Will directly jump to global execution context and it finds d but a,b,c mila hi na. Hence error
