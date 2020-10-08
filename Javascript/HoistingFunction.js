function outer() {
	var a = 10;
	inner();
	function inner() {
		console.log(b);
		var b = 20;
	}
	inner();
}
outer();

//Exercise 1
console.log('I am a ', job);
var job = 'Web developer';
console.log('I am a', job);

function foo() {
	console.log('I am a', job);
	var job = 'Full stack';
	console.log('I am a ', job);
}

foo();
