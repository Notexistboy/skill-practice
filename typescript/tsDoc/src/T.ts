/*
泛型：软件工程中，我们不仅要创建一致的定于良好的API，同时也要考虑可重用性。
组件不仅能够支持当前的数据类型，同时也能支持未来的数据类型，这在创建大型系统
时为你提供了十分灵活的功能。
在像C#和Java这样的语言中，可以使用泛型来创建可重用的组件，一个组件可以支持多种
类型的数据。这样用户就可以以自己的数据类型来使用组件。
通俗易讲：泛型就是解决类 接口 方法的复用性、以及对不特定数据类型的支持
*/ 
/* 泛型函数 */
//T表示泛型，具体什么类型是调用这个方法的时候决定的
function getData<T>(value:T):T{
    return value;
}
getData<number>(123)
//getData<number>('123') //错误写法

/* 泛型类 */ 
//例子：比如有一个最小堆算法，需要同时支持返回数字和字符串两种类型。
class  Minclas<T> {
    public list:T[] = [];
    add(value:T):void{
        this.list.push(value);
    }
    min():T{
        var minNum = this.list[0];
        for(var i=0;i<this.list.length;i++){
            if(minNum > this.list[i]){
                minNum = this.list[i];
            }
        }
        return minNum;
    }
}
var m1 = new Minclas<number>();
m1.add(1);
m1.add(3);
m1.add(2);
console.log(m1.min())

var m2 = new Minclas<string>();
m2.add('c');
m2.add('a');
m2.add('v');
//console.log(m2.min())

/*泛型接口 泛型类接口*/ 
/*
函数类型接口
interface ConfigFn{
    (value:string,value:string):string;
}
var setData:ConfigFn = function(value1:string,value2:string):string{
    return value1 + value2;
}
setData('name','张三');
*/
//泛型接口
interface ConfigFn{
    <T>(value:T):T;
}
var getData1:ConfigFn = function<T>(value:T):T{
    return value;
}
//console.log(getData1<string>('张三'));

interface ConfigFn1<T>{
    (value:T):T;
}

var myGetData:ConfigFn1<string> = getData1;
//console.log(myGetData('李四'));

/*泛型类-把类作为参数类型*/ 
//1、定义个类
//2、把类作为参数来约束数据传入的类型

//例子：定义一个User的类这个类的作用就是映射数据库字段
//然后定义一个MysqlDb的类这个类用于操作数据库
//然后把User类作为参数传入到MysqlDb中
class  User {
    username:string | undefined;
    password:string | undefined;
}

class MysqlDb {
    add(user:User):boolean{
        console.log(user);
        return true;
    }
}


var u = new User();
u.username = '张三';
u.password = '123456';

var Db  = new MysqlDb();
Db.add(u);


class ArticlaCate {
   title:string | undefined;
   desc:string | undefined;
   status:number | undefined;
}

class Mysql {
    add(info:ArticlaCate):boolean{
        console.log(info);
        return true;
    }
}

var a = new ArticlaCate();
a.title = '国内';
a.desc = '国内新闻';
a.status = 1;

var sql = new Mysql();
sql.add(a);

class MysqlDbT<T> {
    add(info:T):boolean{
        console.log(info);
        return true;
    }
}
var dbT = new MysqlDbT();
dbT.add(u);
dbT.add(a);