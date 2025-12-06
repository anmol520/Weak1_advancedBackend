 console.log('start')
 function count(n){
    for(i=0; i<=n;i++){
        console.log(i)
    }
 }

 count(3);


setTimeout(() => {
  console.log("timeout 1");
}, 0);

Promise.resolve().then(() => {
  console.log("promise 1");
});

console.log("end");


