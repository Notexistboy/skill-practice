class EventEmitter {
    constructor() {
        this.evnets = {}
    }
    on(name, ...args) {
        if(this.evnets[name]) {
            for (let i = 0; i< this.evnets[name].length; i++) {
                this.events[name](...args);
            }
        }
    }

    on(name, callback) {
        if (this.events[name]) {
            this.events[name].push(callback);
        } else {
            this.events[name] = [callback];
        }
    }

    once(name, callback) {
        function fn() {
            callback();
            this.off(name, fn)
        }
        this.on(name, fn);
    }

    off(name, callback) {
        if (!this.events[name]) return;
        if(!callback) {
            Reflect.deleteProperty(this.evnets, name)
        } else {
            this.events[name] = this.evnets[name].filter(item => item !== callback)
        }
    }
}