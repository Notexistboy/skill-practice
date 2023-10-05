/* Abstract Factory */
// 抽象类中定义的方法只是显性地定义一些功能,但没有具体的实现
var PhantomFactory = function (subType, superType) {
    // 判断抽象工厂中是否有该抽象类
    if (typeof PhantomFactory[superType] === 'function') {
        // 缓存类
        function F() {}
        // 继承父类属性和方法
        // 这种继承方式类似于寄生组合式继承
        F.prototype = new PhantomFactory[superType]();
        // 将子类constructor指向子类
        subType.constructor = subType;
        // 子类原型继承父类
        subType.prototype = new F();
    } else {
        console.log('未创建该抽象类')
    }
}

PhantomFactory.Car = function () {
    this.type = 'car'
}

PhantomFactory.Car.prototype = {
    getPrice: function () {
        console.log('未创建该抽象类')
    }
}
var BMW = function(price) {
    this.price = price
}
PhantomFactory(BMW, 'Car');
BMW.prototype.getPrice = function() {
    return this.price
}
var car = new BMW(10000)
console.log(car)