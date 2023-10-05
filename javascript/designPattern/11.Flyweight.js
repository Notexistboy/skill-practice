var Flywight = function() {
    var created = []
    function create() {
        var dom = document.createElement('div');
        document.getElementById('container').appendChild(dom);
        created.push(dom)
        return dom;
    }
    return {
        getDiv: function(){
            if(created.length < 5){
                return create()
            } else {
                var div = created.shift();
                created.push(div)
                return div;
            }
        }

    }
}
var article = ['11','22','33', '44','55','66'];
var paper = 0, num = 5, length = article.length;

for (var i = 0; i < 5; i++) {
    if(article[i]){
        Flywight.getDiv().innerHTML = article[i]
    }
}

document.getElementById('nextpage').onclick = function() {
    if(article.length < 5){
        return
    }
    var n = ++paper * num % length,
    j = 0;
    for(; j< 5; j++) {
        if(article[n+j]){
            Flywight.getDiv().innerHTML = article[n+j]
        } else if (article[n + j - len]) {
            Flywight.getDiv().innerHTML = article[n + j - len]
        } else {
            Flywight.getDiv().innerHTML = ''
        }
    }
}