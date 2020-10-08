//it will work but is'nt it problematic as we have not declared c (using let var or const ....)
// function sum(a, b) {
// 	c = 10;
// 	console.log(a + b + c);
// }

// sum(3, 4);

// Hence always use strict mode. Ab ye error dega
// 'use strict';
// function sum(a, b) {
// 	c = 10;
// 	console.log(a + b + c);
// }

// sum(3, 4);

// It should give us error right because we can not pass duplicate parameters in a function as browser kaise samajhe ki which
// a we want to use
// function sum(a, a) {
// 	console.log(a + 20);
// }

// sum(10, 20);

// Now it will give error
'use strict';
function sum(a, a) {
	console.log(a + 20);
}

sum(10, 20);
