var Conf = (function () {
    var conf = {
        max: 100,
        min: 1,
    }
    return {
        get: function (name) {
            return conf[name] ? conf[name] : null;
        }
    }
})();
/* lazy */
var LazySingle = (function () {
    var _instance = null;

    function Single() {
        return {
            max: 100,
            min: 1,
        }
    }

    return function () {
        if (!_instance) {
            _instance = new Single();
        }
        return _instance;
    }
})();
// LazySingle 自调用函数
var lazySingle = LazySingle();

/* proxy */
class MyVideo {
    constructor(args){
        
    }
}

function ProxySingleton(classname) {
    let ins;
    return new Proxy(classname, {
        construct(target, ...args) {
            if(!ins){
                ins = Reflect.construct(target, ...args)
                // 可以用反射或者构造函数来做
                //ins =  new classname(...args)
            }
            return ins
        }

    })

}

export default ProxySingleton(MyVideo)
