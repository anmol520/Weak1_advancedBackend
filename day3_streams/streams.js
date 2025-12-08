const fs = require('fs');
const path = require('path')
 
let input =  fs.createReadStream('a.txt');

let output = fs.createWriteStream('output.txt');
input.pipe(output);