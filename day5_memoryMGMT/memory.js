/*const v8 = require('node:v8');
const { heap_size_limit } = v8.getHeapStatistics();
const heapSizeInGB = heap_size_limit / (1024 * 1024 * 1024);
console.log(`${heapSizeInGB} GB`);*/

console.log(process.memoryUsage());
