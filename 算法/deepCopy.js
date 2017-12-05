const typeOf = data => {
    const toString = Object.prototype.toString;
    const map = {
        '[object Boolean]'  : 'boolean',
        '[object Number]'   : 'number',
        '[object String]'   : 'string',
        '[object Function]' : 'function',
        '[object Array]'    : 'array',
        '[object Date]'     : 'date',
        '[object RegExp]'   : 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]'     : 'null',
        '[object Object]'   : 'object'
    };
    return map[toString.call(data)];
}

const deepCopy = obj => {
    const type = typeOf(obj);
    let o;
    if(type === 'array') {
        o = [];
        for(let i of obj) {
            o.push(deepCopy(i))
        }
        return o;
    } else if(type === 'object') {
        o = {};
        for(let i in obj) {
            o[i] = deepCopy(obj[i])
        }
        return o;
    } else {
        return obj;
    }
}