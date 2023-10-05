var LoopImages = function(imgArrs, container){
    this.imgArrs = imgArrs;
    this.container = container;
    this.createImage = function () { }
    this.changeImage = function () { }
}

var SlideLoopImages = function (imgArrs, container) {
    LoopImages.call(this, imgArrs, container);
    this.createImage = function () {
        console.log('createImage');
    }
    this.changeImage = function () {
        console.log('createImage');
    }
}

var FadeLoopImages = function (imgArrs, container, arrow) {
    LoopImages.call(this, imgArrs, container);
    this.arrow = arrow
    this.createImage = function () {
        console.log('createImage');
    }
    this.changeImage = function () {
        console.log('createImage');
    }
}
/* 最优解决方案 */
var LoopImages = function (imgArrs, container) {
    this.imgArrs = imgArrs;
    this.container = container;
}

LoopImages.prototype = {
    createImage: function () { },
    changeImage: function () { },
}

var SlideLoopImages = function (imgArrs, container) {
    LoopImages.call(this, imgArrs, container);
}
/* 原型链继承 */
SlideLoopImages.prototype = new LoopImages()
SlideLoopImages.prototype.changeImage = function () { }

var FadeLoopImages = function (imgArrs, container, arrow) {
    LoopImages.call(this, imgArrs, container);
    this.arrow = arrow
}
FadeLoopImages.prototype = new LoopImages()
FadeLoopImages.prototype.changeImage = function () { }

/* prototype expand */
