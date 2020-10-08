// let a = '12 + 12';
// let b = String('12 + 12');
// let c = new String('12 + 12');
// console.log(eval(a), eval(b), eval(c), typeof a, typeof b, typeof c);

let str = 'My name is Taslim Arif';
let strArr = str.split(' ');
// document.write(str.length, str.charAt(5));
// document.write(str.substring(0, 5));
// document.write(str.bold()); // Bolds the string
// document.write(str.fontcolor('red'));
// document.write(str.replaceAll('i', 'I'));
// document.write(str.toLocaleLowerCase());
// document.write(str.toLocaleUpperCase());

console.log('New line begins here');
let i = 0,
	j = strArr.length - 1;
while (i < j) {
	[strArr[i], strArr[j]] = [strArr[j], strArr[i]];
	i += 1;
	j -= 1;
}
const ans = strArr.join(' ');
console.log(ans);
let str2 = '  My name is Taslim Arif   ';
console.log(str2, '\n', str2.trim());
