var Observer = (function () {
    var _message = {};
    return {
        regist: function (type, fn) {
            if(_message[type]) {
                _message[type].push(fn)
            } else {
                _message[type] = [fn]
            }
        },
        fire: function(type, params) {
            if(!_message[type]) return;
            var events = {
                type,
                args: params || {},
            }
            let i = 0, len = _message[type].length
            for(;i<len;i++){
                _message[type][i].call(this, events)
            }
        },
        remove: function (type, fn) {
            if(_message[type] instanceof Array){
                var i = _message[type].length - 1;
                for(; i>=0; i--){
                    _message[type][i] === fn && _message[type][i].splice(i, 1)
                }
            }
        },
    }
})()
