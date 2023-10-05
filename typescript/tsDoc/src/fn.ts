/* ts中定义函数的方法 */
//1.函数声明法
function run():string{
        return 'run';
}
//2.匿名函数
const fun = function(): number{
    return 123;
}

/* 没有返回值的方法 */ 
function run1():void{
    console.log('run');
}

/* ts中定义方法传参 */
function getInfo(name:string, age:number):string{
    return `${name} --- ${age}`;

}
console.log(getInfo('zhangsan',20));

//方法可选参数
function getInfo1(name:string, age?:number):string{
    if(age){
        return `${name} --- ${age}`;
    }else{
        return `${name} --- 年龄保密`;
    }
}

//Tip:可选参数必须配置到参数的最后面
// function getInfo2(name?:string, age:number):string{
//     if(age){
//         return `${name} --- ${age}`;
//     }else{
//         return `${name} --- 年龄保密`;
//     }
// }

//默认参数
function getInfo3(name:string, age:number = 20):string{
    if(age){
        return `${name} --- ${age}`;
    }else{
        return `${name} --- 年龄保密`;
    }
}
console.log(getInfo3('张三'));

//箭头函数
setTimeout(():string=>{
    return '123'
},1000);

