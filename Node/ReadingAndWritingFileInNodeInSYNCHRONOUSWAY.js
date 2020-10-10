const fs = require('fs');
const textInput = fs.readFileSync('./file.txt', 'utf-8');
console.log(textInput);
const app = `This is what we know about taslim ${textInput} at time ${Date()}`;
fs.writeFileSync('./output.txt', app);
console.log('File has been written');
