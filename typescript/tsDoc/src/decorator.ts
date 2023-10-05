/*
装饰器：装饰器是一种特殊类型的声明，它能够被附加到类声明、方法、属性或参数上，可以修改类的行为。
通俗的讲装饰器就是一个方法，可以注入到类、方法、属性参数上来扩展类、属性、方法、参数的功能。
常见的装饰器有：类装饰器、属性装饰器、方法装饰器、参数装饰器
装饰器的写法：普通装饰器（无法传参）、装饰器工厂（可传参）
装饰器是过去几年中js最大的成就之一，已经是ES7的标准特性之一
*/

//1、类装饰器(普通)：类装饰器在类声明之前被声明（仅靠着类声明）。类装饰器应用于类构造函数，可以用来监视，修改后者替换类定义。
function logClass(params:any){
    console.log(params);
    //params就是当前类
    params.prototype.apiUrl = '动态扩展的属性';
    params.prototype.run = function(){
        console.log('我是一个run方法');
    }
}

@logClass
class HttpClient {
    constructor() {
        
    }
    getData(){

    }

}

var http:any = new HttpClient();
// http.run()
// console.log(http.apiUrl);

//2、类装饰器：装饰器工厂（可传参）
function logClassFac(params:string){
    return function(target:any){
        console.log(target);
        console.log(params);
    }
}

@logClassFac('hello')
class HttpClient1 {
    constructor() {
        
    }
    getData(){
        
    }
}

// function logClassFacParam(params:string){
//     return function(target:any){
//         console.log(target);
//         console.log(params);
//         target.prototype.apiUrl = params;
//     }
// }

// @logClassFacParam('https://www.baidu.com')
// class HttpClient2 {
//     constructor() {
        
//     }
//     getData(){
        
//     }
// }
// var http2:any = new HttpClient2();
// console.log(http2.apiUrl)

/*
重载构造函数
类装饰器表达式会在运行时当作函数被调用，类的构造函数作为其唯一的参数。
如果类装饰器返回一个值，它会使用提供的构造函数来替换类的声明
*/ 
function logClassReload(target:any){
    console.log(target);
    return class extends target{
        apiUrl:any = '我是修改后的数据';
        getData(){
            this.apiUrl = this.apiUrl;
            console.log(this.apiUrl);
        }
    }
}

@logClassReload
class HttpClient3 {
    public apiUrl: string | undefined;
    constructor() {
        this.apiUrl = '我是构造函数里面的apiUrl';
    }
    getData(){
        console.log(this.apiUrl);
    }
}

var http3 = new HttpClient3();
http3.getData();

/* 属性装饰器 */
//属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：
//1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
//2、成员的名字 
function logProperty(params:any){
    return function(target:any, attr:any){
        console.log(target);
        console.log(attr);
        console.log(params)
        target[attr] = params
    }
}

class HttpClient4 {
    @logProperty('http://www.baidu.com')
    public url:any | undefined;
    getData(){
        console.log(this.url);
    }
}
var http4 = new HttpClient4();
http4.getData();

/*
方法装饰器
它会被应用到方法的属性描述符上，可以用来监视，修改或者替换方法定义。
方法修饰会在运行时传入下列三个参数
1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象。
2、成员的名字。
3、成员的属性描述符。
*/ 
function get(params:any){
    return function(target:any, methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        target.apiUrl = params;
        target.run = function(){
            console.log('run');
        }
    }
}

class HttpClient5 {
    public url:any | undefined;
    constructor() {
        
    }
    @get('https://www.baidu.com')
    getData(){
        console.log(this.url);
    }
}

var http5:any = new HttpClient5();
// console.log(http5.apiUrl);
// http5.run();

//方法装饰器对方法重写
function get2(params:any){
    return function(target:any,methodName:any,desc:any){
        console.log(target);
        console.log(methodName);
        console.log(desc);
        var oMethod = desc.value;
        desc.value = function(...args:any[]){
            args = args.map(value=>{
                return String(value);
            });
            console.log(args);
            oMethod.apply(this, args);
        }
    }
}

class HttpClient6 {
    public url:any | undefined;
    constructor() {
        
    }
    @get2('https://www.baidu.com')
    getData(){
        console.log('我是getData里面的方法');
    }
}

var http6:any = new HttpClient6();
http6.getData('123', 345, 'str');


/* 
方法参数装饰器 
参数装饰器表达式会在运行时当作函数被调用，可以使用参数装饰器为类的原型增加一些元素数据，
传入下列三个参数
1、对于静态成员来说是类的构造函数，对于实例成员是类的原型对象
2、参数的名字
3、参数在函数参数列表中的索引
*/
function logParams(params:any){
    return function(target:any, methodName:any,paramsIndex:any){
        console.log(params);
        console.log(target);
        console.log(methodName);
        console.log(paramsIndex);
        target.apiUrl = params;
    }
}

class Httpclient7 {
    public url:any | undefined;
    constructor() {
        
    }
    getData(@logParams('xxxx') uuid:any){
        console.log(uuid);
    }
}

var http7:any = new Httpclient7();
// http7.getData(123455);
// console.log(http7.apiUrl);

/* 装饰器的执行顺序 */
/* 属性 > 方法 > 方法参数 > 类*/
//如果有多个同样的装饰器，它会先执行后面的

function logClass1(params:string){
    return function(target:any){
        console.log('类装饰器1');
    }
}

function logClass2(params:string){
    return function(target:any){
        console.log('类装饰器2');
    }
}

function logAttribute(params?:string){
    return function(target:any,attrNamme:any){
        console.log('属性装饰器')
    }
}

function logMethod(params?:string){
    return function(target:any,attrNamme:any,desc:any){
        console.log('方法装饰器')
    }
}
function logParams1(params:any){
    return function(target:any, methodName:any,paramsIndex:any){
       console.log('方法参数装饰器1')
    }
}
function logParams2(params:any){
    return function(target:any, methodName:any,paramsIndex:any){
       console.log('方法参数装饰器2')
    }
}

@logClass1('http://www.baidu.com')
@logClass2('xxx')
class HttpClient8 {
    @logAttribute()
    public apiUrl:string | undefined;
    constructor() {
        
    }
    @logMethod()
    getData(){
        return true;
    }
    setData(@logParams1(1) attr1:any,@logParams2(2) attr2:any){

    }
}
var http8 = new Httpclient7()