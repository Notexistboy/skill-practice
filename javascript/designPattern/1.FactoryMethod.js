/* Factory Method */
var Java = () => { }
var Php = () => { } 
var JavaScript = () => { }
var MethodFactory = function (type, content) {
    switch(type) {
        case 'java':
            return new Java(content);
        case 'php':
            return new Php(content);
        case 'javascript':
            return new JavaScript(content);
    }
}

var SafeFactory = function (type, content) {
    // 如果直接调用
    if (this instanceof safeFactory) {
        var s = new this[type](content)
        return s;
    } else {
        return new SafeFactory(type, content);
    }
};

SafeFactory.prototype = {
    java: function (content) {

    },
    js: function (content) {

    },
    php: function (content) {

    },
};
