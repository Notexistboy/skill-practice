/* 定义类 */
class Person{
    public name:string;//属性 前面省略了public关键词

    constructor(n:string){
        this.name = n;
    }

    getName():string{
        return this.name;
    }

    setName(name:string):void{
        this.name = name;
    }
}
var p = new Person('张三');
// console.log(p.getName());
// p.setName('李四');
// console.log(p.getName());

/* 类的继承(extends) */ 
class Person1{
    name:string;

    constructor(name:string){
        this.name = name;
    }

    run():string{
        return `${this.name}在运动`;
    }
}

class Web extends Person1{
    constructor(name:string){
        super(name);
    }
    work():void{
        console.log(`${this.name}在运动`);
    }
}
var w = new Web('李四');
//w.work();
//w.run();

/* 类里面的修饰符 */
//public : 公有          在类里面、子类、类外面都可以访问
//protected : 保护类型    在类里面、子类里面可以访问，在类外面部没法访问
//private : 私有         在类里面可以访问、子类、类外部都没法访问
//Tip：属性如果不加修饰符 默认是公有（public）

class Person2{
    public name:string; //公有属性

    constructor(name:string){
        this.name = name;
    }

    run(){
        console.log(`${this.name}在运动`);
    }
}

class Web1 extends Person2{
    
    constructor(name:string){
        super(name);
    }

    work(){
        console.log(`${this.name}在工作`);
    }
}
// var p2 = new Person2('赵六');
// p2.run();
// var w2 = new Web1('王五');
// w2.work()
// console.log(w2.name);

/* 静态类、静态方法 */

class Per{
    public name:string;
    public age:number = 20;

    static sex = '男';

    constructor(name:string){
        this.name = name;
    }
    run(){ //实例方法
        console.log(`${this.name}在运动`);
    }
    work(){
        console.log(`${this.name}在工作`);
    }
    static print(){
        //console.log('print方法' + this.age); //静态方法 里面没法直接调用类里面的属性
        console.log('print方法' + this.sex);
        //console.log('print方法' + Per.sex);
    }
}
//Per.print();

/* 多态：父类定义一个方法不去实现，让继承它的子类去实现 每一个子类有不同的表现 */
//Tip：多态属于继承

class Animal{
    name:string;
    constructor(name:string){
        this.name = name;
    }
    eat(){ // 具体吃什么不知道，具体吃什么由继承他的子类去实现，每一个子类的表现不一样
        console.log('吃的方法');
    }
}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    eat(){
        console.log(`${this.name}吃狗粮`);
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }   
    eat(){
        console.log(`${this.name}吃老鼠`);
    }
}

/*抽象类*/ 
/*ts中的抽象类，它是提供其他类继承的基类，不能直接被实例化。
用abstract关键字定义抽象类和抽象方法，抽象类中国呢的抽象方法不包含具体实现并且必须在派生类中实现
abstract抽象方法只能放在抽象类里面
*/ 

abstract class Animal1{
    public name:string;
    constructor(name:string){
        this.name = name;
    }
    abstract eat():any;
}

abstract  class Dog1 extends Animal1 {
    constructor(name:any) {
        super(name);
    }
    eat(){
        console.log(this.name + '吃狗粮');
    }
    abstract learn():any;
}
class Cat1 extends Dog1{
    learn(){

    }
}

//var a = new Animal1(); //抽象类是无法直接被实例化
//var d1 = new Dog1('小花花');
//d1.eat();

/* 把类当做接口使用 */
class Point {
    x: number | undefined;
    y: number | undefined;
}

interface Point3d extends Point {
    z: number;
}

let point3d: Point3d = {x: 1, y: 2, z: 3};