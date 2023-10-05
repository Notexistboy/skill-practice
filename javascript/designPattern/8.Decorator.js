var Decorator = function(input, func) {
    var input = document.getElementById(input)
    if(typeof input === 'function') {
        var oldClickFunc = input.onclick
        input.onclick = function() {
            oldClickFunc();
            func()
        }
    }else{
        input.onclick = func
    }
}