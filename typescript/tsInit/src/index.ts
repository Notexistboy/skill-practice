function delay(ms: number) {
    return new Promise<void>(function(resolve) {
      setTimeout(resolve, ms);
    });
  }
  async function asyncAwait() {
    console.log("Knock, knock!");
  
    await delay(1000);
    console.log("Who's there?");
  
    await delay(1000);
    console.log("async/await!");
  }
// function test(resolve, reject) {
//     var timeOut = Math.random() * 2;
//     console.log('set timeout to: ' + timeOut + ' seconds.');
//     setTimeout(function () {
//         if (timeOut < 1) {
//             console.log('call resolve()...');
//             resolve('200 OK');
//         }
//         else {
//             console.log('call reject()...');
//             reject('timeout in ' + timeOut + ' seconds.');
//         }
//     }, timeOut * 1000);
// }
// const p1 = new Promise(test);

// const p2 = p1.then(function (result) {
//     console.log('成功：' + result);
// });
// const p3 = p2.catch(function (reason) {
//     console.log('失败：' + reason);
// });
// const ha = 123;
// const str = `${ha}456`;
// export default ha;
const arr = [1,2,3,4,5];
arr.flatMap(v=>[v,v * 2])
// export default arr;


// const num : number = 123;
// const str= `${num}`;