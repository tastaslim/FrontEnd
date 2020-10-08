//Each function has it's own execution context and it looks for anything withing it's execution context first.
// If it did not find it and it is a nested heirarchy of functions, it goes bootom to up direction
// and looks for that thing. If there is no nested heirarchy, it looks for it's execution context first and then in global context.
//(Same funda as c++)

// Great d yha mil gya use it. If we are not able to find anything even in global context as well after completeing all
// heirarchy stetps and all, we say variable is not declared and hene error.

var d = 'I am 20 years old.';
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
		}
		three();
	}
	two();
}

one();
