var Human = function (param) {
    // 技能
    this.skill = param?.skill || '其他'
    // 爱好
    this.hobby = param?.hobby || '其他'
}
Human.prototype = {
    getSkill:function() {
        return this.skill
    }
}
var Name = function (name) {
    var that = this
    // 构造器
    // 构造函数解析
    (function(name, that) {
        that.wholeName = name
        if(name.indexOf('') > -1){
            that.firstName = name.slice(0, name.indexOf(''))
            that.lastName = name.slice(name.indexOf(''))
        }
    })(name, that)
}
var Work = function (work) {
    var that = this
        // 构造器
        // 构造函数解析
        (function (work, that) {
            switch(work){
                case 'code':
                    that.work = 'geek'
            }
        })(work, that)
}

var Person = function (name, work) {
    var _person = new Human()
    _person.name = new Name(name)
    _person.work = new Work(work)
    return _person
}

var person = new Person('xiao ming', 'code');