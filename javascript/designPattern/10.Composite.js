var objectCopy = function (prototype) { // 创建一个字面量函数
    function Fun() { }; //创建一个构造函数
    Fun.prototype = prototype; //把字面量函数赋值给构造函数的原型
    return new Fun(); //最终返回出实例化的构造函数
}


var inheritPrototype = function (child, parent) {
    let prototype = objectCopy(parent.prototype); // 创建父级对象的实例
    prototype.constructor = child; // 父级对象的构造器属性指向子对象
    child.prototype = prototype; // 子对象的原型指向父级对象的实例
}

var News = function () {
    this.children = []
    this.element = null
}
News.prototype = {
    init: function () {
        console.log('init')
    }
}

var Container = function (id, parent) {
    News.call(this);
    this.id = id;
    this.parent = parent;
    this.init();
}

inheritPrototype(Container, News)

Container.prototype.init = function () {
    this.element = document.createElement('ul')
    this.element.id = this.id
}

Container.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this;
}

Container.prototype.getElement = function (child) {
    return this.element;
};

Container.prototype.show = function () {
    debugger;
    this.parent.appendChild(this.element);
};

var Item = function (classname) {
    News.call(this);
    this.classname = classname;
    this.init();
}

inheritPrototype(Item, News)

Item.prototype.init = function () {
    this.element = document.createElement('li')
}

Item.prototype.add = function (child) {
    this.children.push(child)
    this.element.appendChild(child.getElement())
    return this;
};
Item.prototype.getElement = function (child) {
    return this.element;
};
var EasyNews = function (text) {
    News.call(this);
    this.text = text;
    debugger;
    this.init();
}

inheritPrototype(EasyNews, News)

EasyNews.prototype.init = function () {
    this.element = document.createElement('div')
    this.element.innerHTML = this.text;
}

EasyNews.prototype.add = function () {
};
EasyNews.prototype.getElement = function () {
    debugger;
    return this.element;
};

var news1 = new Container('news', document.body);
news1.add(new Item('normal').add(new EasyNews('123'))).show()


