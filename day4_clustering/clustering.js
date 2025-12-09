const cluster = require('cluster')
const express = require('express')
const app = express()

const os = require('os')
const numCPU = os.availableParallelism() // can also use os.cpus().length

console.log(numCPU)
 
if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);
  for (let i = 0; i < numCPU; i++) {
    cluster.fork();
  }
   
} else {
  app.listen((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);
  console.log(`Worker ${process.pid} started`);
}
