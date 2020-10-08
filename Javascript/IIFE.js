// We generally use it when we want to secure our piece of code. Let's say I just want
// that any of my variable have scope withing my function only.
//technically, we should never declare any variable globally. it helps us to achieve our goal.
// Although from ES6 onwards we have let to deal with global variable problem but before ES6 we can use IIFE concept.

// Function is call at vthe time of it's definition incase of IIFE.
// IIFE: Immediately Invoked  Function Expression
// IIFE makes our code less and we can easily understand it.
// Lets say we want to make our function private and don't want others to use it. We can use IIFE.
(function sum(a, b) {
	console.log('Sum function');
})();

//Sum(2,4); Gives error as sum() is not accessible outside.

// Otherwise we would have done
// console.log(a);
// function sum(a,b) {
// 	console.log('Sum function');
// }

// sum(); You see now we are accessing function globallay
