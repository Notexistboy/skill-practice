let flag:boolean = true; //boolean
let num: number = 123; //number
let str:string = 'this is ts'; //string
let arr1:number[] = [1,2,3]; //第一种定义数组的方式
let arr2:Array<number> = [11,22];//第二种定义数组的方式
let tuple:[number, string] = [123, 'this is ts'];//元组类型 属于数组的一种
//任意类型
let anyType:any = 123;
anyType = 'str';
anyType = true;
//任意类型的用处
// const textareaEle:any = document.querySelector('#textarea');
// textareaEle.style.color = 'red';

//枚举类型（enum）
//随着计算机的不断普及，程序不仅只用于数值计算，还更广泛地用于处理非数值的数据。
//例如：性别，月份，星期几，颜色，单位名，学历，职业等，都不是数值数据。
//在其它程序设计语言中，一般用一个数值来代表某一个状态，这种处理方法不直观，易读性差。
//如果能在程序中用自然语言中有相应含义的单词来代表某一状态，则程序就很容易阅读和理解。
//也就是说，事先考虑到某一变量可能取的值，尽量用自然语言中含义清楚的单词来表示它的每一个值。
//这种方法称为枚举方法，用这种方法定义的类型称枚举类型。
/*
enum 枚举名{
    标识符[=整形常数]，
     标识符[=整形常数]，
     ...
      标识符[=整形常数]
};
*/ 
enum Flag { success = 1, error = 2};
let s:Flag = Flag.success;

enum Color {blue, red, 'orange'}; 
const c:Color = Color.red;

//enum Color {blue, red = 3, 'orange'}; 
//const c:Color = Color.orange;

enum Err {'undefined' = -1, 'null' = -2, 'success' = 1};
const e:Err = Err.success;
//console.log(e)

//undefined
//let num1:number;
//console.log(num1);
let num2:undefined;
//console.log(num2);

let num3 :number | undefined;
num3 = 123;
//console.log(num3);

//null
let num4:null;
num4 = null;
//console.log(num4);

//void(表示方法没有返回任何类型)
function run0():void{
    console.log('run');
}
//run();

//nerver
// let bar: never = (() => {
//     throw new Error('Throw my hands in the air like I just dont care');
//   })(); 
const bar = () : never => {
    throw new Error('Throw my hands in the air like I just dont care');
  }; 

// function fail(message: string): never {
//     throw new Error(message);
// }
// fail('hah')

/*
与 void 的差异
一旦有人告诉你，never 表示一个从来不会优雅的返回的函数时，
你可能马上就会想到与此类似的 void，然而实际上，void 表示没有任何类型，never 表示永远不存在的值的类型。
当一个函数返回空值时，它的返回值为 void 类型，但是，当一个函数永不返回时（或者总是抛出错误），
它的返回值为 never 类型。void 类型可以被赋值（在 strictNullChecking 为 false 时），
但是除了 never 本身以外，其他任何类型不能赋值给 never。
*/