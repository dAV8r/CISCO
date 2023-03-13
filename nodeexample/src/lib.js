// HOF ==> functions which accept function as argument 
// [action is a function]
function forEach(elems, action) {
    for(i = 0 ; i < elems.length; i++) {
        action(elems[i]);
    }
}

function filter(elems, predicate) {
    var result = [];
    for(i = 0 ; i < elems.length; i++) {
       if(predicate(elems[i])) {
        result.push(elems[i]);
       }
    }
    return result;
}

function map() {

}

module.exports = {
    forEach, filter, map
}
