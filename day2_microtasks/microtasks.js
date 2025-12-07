 console.log('hiii')

 Promise.resolve().then(() => console.log("D"));
 queueMicrotask(() => console.log("Microtask"));
console.log("Last line");

console.log("before block");         
const start = Date.now();           // Captures current timestamp
while (Date.now() - start < 3000) {} // Busy-wait loop for 3 seconds
console.log("after block");         // Prints after 3 seconds
    

