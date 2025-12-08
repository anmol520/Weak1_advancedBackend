 const fs = require('fs')
const zlib = require('zlib')
const { pipeline } = require('stream')

// Simple piping
const readStream = fs.createReadStream('input.txt')
const writeStream = fs.createWriteStream('output.txt')
readStream.pipe(writeStream)

// Complex pipeline with error handling
const source = fs.createReadStream('large-file.txt')
const gzip = zlib.createGzip()
const destination = fs.createWriteStream('compressed.gz')

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