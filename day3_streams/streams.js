const fs = require('fs')
const zlib = require('zlib')
const { pipeline } = require('stream')
const path = require ('path')
const inputpath = path.join(__dirname, "input.txt")
const outputpath = path.join(__dirname, "output.txt")


 //Simple piping
const readStream = fs.createReadStream(inputpath,{highWaterMark:10})
readStream.on('data',(chunk)=>{
    console.log("indivisual chunk : " ,chunk.toString())

})
const writeStream = fs.createWriteStream( outputpath)

readStream.on('error', (err) => console.error("Read error:", err));
writeStream.on('error', (err) => console.error("Write error:", err));

readStream.pipe(writeStream);


 

// Complex pipeline with error handling
const source = fs.createReadStream(inputpath)
const gzip = zlib.createGzip()
const destination = fs.createWriteStream(outputpath)

pipeline(
  source,
  gzip,
  destination,
  (error) => {
    if (error) {
      console.error('Pipeline failed:', error)
    } else {
      console.log('Pipeline succeeded')
    }
  }
)