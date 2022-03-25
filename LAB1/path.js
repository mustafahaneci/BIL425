const path = require("path");

console.log(path.join('first', 'second'));

console.log(path.join(__dirname, 'first', 'second'));

console.log(path.resolve('/first', 'second'));

const fullPath = path.resolve("first.jpeg");
console.log(path.basename(fullPath));

console.log(path.extname(fullPath));

const pageURL = "http://localhost:9001/user?id=400"

const url = new URL(pageURL);
console.log(url);