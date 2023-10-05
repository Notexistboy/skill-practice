// setTimeout(() => {
//     setTimeout(() => {
//         console.log('setTimeout');
//     }, 0);
//     setImmediate(() => {
//         console.log('setImmediate');
//     });
//     console.log(1);
//     Promise.resolve().then(() => {
//         console.log(2);
//     });
//     setTimeout(() => {
//         console.log(0)
//     }, 0);
// }, 0)

// setTimeout(() => {
//     console.log(3);
//     Promise.resolve().then(() => {
//         console.log(4);
//     });
// }, 0)
// console.log('outer');






// outer 1 2 3 4 setImmediate setTimeout 0

// setTimeout(() => {
//     console.log('setTimeout1');
// }, 0);
// setImmediate(() => {
//     console.log('setImmediate1');
// });
// console.log(11);
// Promise.resolve().then(() => {
//     console.log(21);
// });
// setTimeout(() => {
//     console.log(01)
// }, 0);
// console.log(31);
// Promise.resolve().then(() => {
//     console.log(41);
// });
// setImmediate(() => {
//     console.log('setImmediate1')
//     setTimeout(() => {
//         console.log('setTimeout1')
//     }, 0)
// });

// setTimeout(() => {
//     console.log('setTimeout2')
//     process.nextTick(() => { 
//         console.log('nextTick1')
//     })
//     setImmediate(() => {
//         console.log('setImmediate2')
//     })
// }, 0)

//outer 11 31 21 41   1 2(1产生的微任务) 3 4  setTimeout1 setImmediate1 setImmediate setTimeout 0

console.log('1');
async function async1() {
    console.log('2');
    await async2();
    console.log('3');
}
async function async2() {
    console.log('4');
}

process.nextTick(function () {
    console.log('5');
})

setTimeout(function () {
    console.log('6');
    process.nextTick(function () {
        console.log('7');
    })
    new Promise(function (resolve) {
        console.log('8');
        resolve();
    }).then(function () {
        console.log('9')
    })
})

async1();

new Promise(function (resolve) {
    console.log('10');
    resolve();
}).then(function () {
    console.log('11');
});
console.log('12');
// 1 2 4 10 12 5 3 11 6 8 7 9