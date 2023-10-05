/* Simple Factory */
function createBook(name, time, type) {
    var o = new Object();
    o.name = name;
    o.time = time;
    o.type = type;
    return o;
};
