/* 
接口的作用，在面向对象的编程中，接口是一种规范的定义，
它定义了行为和动作的规范，在程序设计里面，接口起到一种限制和规范的作用。
接口定义了某一批类所需要遵守的规范，接口不关心这些类的内部状态数据，
也不关心这些类里方法的实现细节，它只规范这批类里必须提供某些方法，
提供这些方法的类就可以满足实际需要。typescript中的接口类似于java，
同时还增加了更灵活的接口类型，包括属性、函数、可索引和类等

typescript中的接口
属性类型接口
函数类型接口
可索引接口
类类型接口
接口扩展

关键字interface
*/ 

//属性接口
interface FullName{
    firstName:string;
    secondName:string;
}

function printInfo(info:FullName): FullName{
    console.log(info.firstName + info.secondName);
    return info;
}

var obj = {//传入的参数必须包含firstName secondName
    age:20,
    firstName:'张',
    secondName:'三'
};
// printInfo(obj);

//可选属性

interface FullName1{
    firstName:string;
    secondName?:string;
}

function getName(name:FullName1){
    console.log(name);
}

// getName({
//     firstName:'fistName'
// });

//ts封装一个ajax请求
interface Config{
    type:string;
    url:string;
    data?:string;
    dataType:string;
}

function ajax(config:Config){
    var xhr = new XMLHttpRequest();
    /**
    * @description: function description
    * @param {String} method 请求类型
    * @param {String} url 目标 URL
    * @param {Boolean} async 是否是异步请求(可选 默认是true)
    * @param {Boolean} user 用户名
    * @param {Boolean} password 密码
    * @return: undefined
    */
    xhr.open(config.type, config.url, true);
    // get请求可以不传请求体 post请求带有请求体
    xhr.send(config.data);

    xhr.onreadystatechange = function(){
        /* 
            0	UNSENT	代理被创建，但尚未调用 open() 方法。
            1	OPENED	open() 方法已经被调用。
            2	HEADERS_RECEIVED	send() 方法已经被调用，并且头部和状态已经可获得。
            3	LOADING	下载中； responseText 属性已经包含部分数据。
            4	DONE	下载操作已完成。
        */
        if(xhr.readyState == 4 && ( xhr.status >= 200 && xhr.status < 300)){
            if(config.dataType == 'json'){
                JSON.parse(xhr.responseText);
            }else{
                console.log(xhr.responseText);
            }
        }
    }
}

ajax({
    type:'get',
    url:'http://www.baidu.com',
    dataType:'json'
})

//函数类型接口
interface encrypt{
    (key:string, value:string):string;
}
// 约束了入参和出参
var md5:encrypt = function(key:string, value:string):string{
    return key + value;
}

//console.log(md5('name','zhangsan'));

/* 可索引接口：数组、对象的约束 （不常用）*/
//ts定义数组的方式
/*
var arr:number[] = [2433, 34556];
var arr1:Array<string> = ['123', '345'];
*/ 

//对数组的约束
interface UserArr{
    [index:number]:string;
}

var arr:UserArr = ['aaa', 'bbb'];
// var arr:string[] = ['aaa', 'bbb'];
//console.log(arr[0]);

//对对象的约束
interface UserObj {
    [index:string]:string;
}
var obj1:UserObj = {name:'张三'};
//console.log(obj1['name']);

/* 类类型接口：对类的约束（和抽象类有点相似）*/ 
interface Animal3{
    name:string;
    eat(str:string):void;
}
class Dog2 implements Animal3 {
    name:string;
    constructor(name:string) {
        this.name = name;
    }
    eat(){
        console.log(this.name + '吃狗粮');
    }
}

// var d2 = new Dog2('小黑');
// d2.eat();

class Cat2 implements Animal3  {
    name:string;
    constructor(name:string) {
        this.name = name;
    }

    eat(food:string){
        console.log(this.name + food);
    }
}

var c2 = new Cat2('小花');
c2.eat('老鼠');

/* 接口扩展（继承）*/ 
interface Animal4{
    eat():void;
}
interface Person3 extends Animal4{
    work():void;
}

class Web2 implements Person3{
    public name:string;

    constructor(name:string) {
        this.name = name;
    }
    eat(){
        console.log(this.name + '喜欢吃馒头');
    }
    work(){
        console.log(this.name + '写代码');
    }
}

// var w2 = new Web2('小李');
// w2.work();

//综合例子
class Programmer {
    public name:string;

    constructor(name:string) {
        this.name = name;
    }

    coding(code:string){
        console.log(this.name + code);
    }
}

class Web3 extends Programmer implements Person3 {
    constructor(name:string) {
        super(name);
    }
    eat(){
        console.log(this.name + '喜欢吃馒头');
    }
    work(){
        console.log(this.name + '写代码');
    }
}

var w3 = new Web3('小李');
w3.coding('写代码');