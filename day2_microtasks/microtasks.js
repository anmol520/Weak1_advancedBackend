 console.log('hiii')

 Promise.resolve().then(() => console.log("D"));
 queueMicrotask(() => console.log("Microtask"));
console.log("Last line");

console.log("before block");         
const start = Date.now();           
while (Date.now() - start < 3000) {}  
console.log("after block");         


