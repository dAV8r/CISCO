// HOF ==> functions which accept function as argument 
// [action is a function]
export function forEach(elems, action) {
    for(i = 0 ; i < elems.length; i++) {
        action(elems[i]);
    }
}

// to get sub-set
export default function filter(elems, predicate) {
    var result = [];
    for(i = 0 ; i < elems.length; i++) {
       if(predicate(elems[i])) {
        result.push(elems[i]);
       }
    }
    return result;
}

// to transform data
export function map(elems, transformFn) {
    var result = [];
    for(i = 0 ; i < elems.length; i++) {
        result.push(transformFn(elems[i]));
    }
    return result;
}
