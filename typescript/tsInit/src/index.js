"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function delay(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
function asyncAwait() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Knock, knock!");
        yield delay(1000);
        console.log("Who's there?");
        yield delay(1000);
        console.log("async/await!");
    });
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
// const arr = [1,2,3,4,5];
// arr.flatMap(v=>[v,v * 2])
// export default arr;
const num = 123;
const str = `${num}`;
