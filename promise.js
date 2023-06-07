function sleep(ms)
{
    return new Promise(function(resolve){
        setTimeout(() => {
            resolve();
        }, ms);
    });
}
sleep(1000)
.then(function(){
    console.log(1);
    return sleep(1000);
})
.then(function(){
    console.log(2);
    return new Promise(function(resolve,reject){
        reject('Loi xu ly');
})
})
.then(function(){
    console.log(3);
    return sleep(1000);
})
.then(function(){
    console.log(4);
    return sleep(1000);
})
.catch(function(err){
    console.log(err);
})
.finally(function(){
    console.log('Hoan tat');
})
// function sleep(ms) {
//     return new Promise(function(resolve) {
//       let count = 0;
//       const interval = setInterval(() => {
//         count++;
//         if (count >= ms / 1000) {
//           clearInterval(interval);
//           resolve();
//         }
//       }, 1000);
//     });
//   }
  
//   sleep(4)
//     .then(function() {
//       console.log(1);
//       return sleep(3);
//     })
//     .then(function() {
//       console.log(2);
//       return sleep(2);
//     })
//     .then(function() {
//       console.log(3);
//       return sleep(1);
//     })
//     .then(function() {
//       console.log(4);
//     });
  