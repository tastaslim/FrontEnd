let a = '10.5';
console.log(a);
console.log(typeof a);
console.log(typeof Infinity); // gives output as number
// Infinity is any number which is greater than max of number==> Number.MAX_VALUE;

console.log(typeof NaN); //Kind of bug in javascript as it gives number as output

let b = 34;
console.log(b.MAX_VALUE);

let str = 12 + 'tads';
let str2 = 'tas' + 23 + 12; // Letf to right everything will be merged 'tas23'+12==> 'tas2312'
console.log(str2, typeof str2);
console.log(str, typeof str);

let str3 = 23 + 12 + 'tas'; // Remember left to right concept 23+12=35 ==> 35+'tas'==> '35tas'
console.log(str3, typeof str3);
