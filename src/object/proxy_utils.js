const Err = require('./error')

const proxylessChar = 'ˇ';
const getSymbol = sym => {
    if (isProxyless(sym)) {
        return sym.valueOf().substr(1);
    }
    return sym.valueOf ? sym.valueOf() : '';
}

const isProxyless = sym => {
    if (!sym.valueOf) {
        return false;
    }

    const val = sym.valueOf();
    if (typeof val !== 'string' || val.length == 0) {
        return false;
    }
    return sym.valueOf()[0] === proxylessChar;
}

const falseFunc = () => false


const getNull = sym => isProxyless(sym) ? null : Null;

const Null = new Proxy(Object.preventExtensions({
    isNull:() => true,
    ___$$IsTofuProxy___: true
}), {
    get: (obj, prop) => {
        if (prop === '$' || prop === proxylessChar) {
            return null
        }
        return prop in obj ? obj[prop] : getNull(prop)
    },

    set: () => false,
    isExtensible: () => false,
    setPrototypeOf: () => false,
    defineProperty: () => false,
    deleteProperty: () => false,
});

const proxify = val => {
    if (typeof val === 'object' && val !== null && val.___$$IsTofuProxy___) {
        return val;
    }
    if (val === null || typeof val === 'undefined') {
        return Null;
    }
    return new Proxy({ value: val }, {
        get: (obj, prop) => {

            if (prop === '___$$IsTofuProxy___') {
                return true;
            }

            if (prop === 'isNull') {
                return () => obj.value === null ||
                    typeof obj.value === 'undefined'
            }

            if (prop === 'isError') {
                return () => obj.value instanceof Err;
            }

            if (obj.value === null || typeof obj.value === 'undefined') {
                return getNull(prop)
            }

            let str = getSymbol(prop)
            let returnProxy = !isProxyless(prop)

            if (prop === '$' || prop === proxylessChar) {
                return obj.value
            }

            if (typeof obj.value === 'object' && !Array.isArray(obj.value)) {
                const val = obj.value[str]
                if (val === null || typeof val === 'undefined') {
                    return getNull(prop)
                }
                return returnProxy ? proxify(val) : val
            }

            if (Array.isArray(obj.value) || typeof obj.value === 'string') {
                const substrParams = str.split(':');
                const indexParams = str.split(',')
                if (substrParams.length === 2) {
                    const ind1 = Number.parseInt(substrParams[0])
                    const ind2 = Number.parseInt(substrParams[1])
                    if (!isNaN(ind1) && !isNaN(ind2)) {
                        const val = obj.value.slice(ind1, ind2)
                        return returnProxy ? proxify(val) : val
                    } else if (!isNaN(ind1) && substrParams[1] === '') {
                        const val = obj.value.slice(ind1)
                        return returnProxy ? proxify(val) : val
                    } else if (!isNaN(ind2) && substrParams[0] === '') {
                        const val = obj.value.slice(0, ind2)
                        return returnProxy ? proxify(val) : val
                    } else {
                        const err = new Err('Invalid indices provided!');
                        return returnProxy ? proxify(err) : err
                    }
                } else if(indexParams.length >= 2) {
                    const indices = indexParams.map(i => Number.parseInt(i))
                    const val = indices.map(index => {
                        if (!isNaN(index)) {
                            return proxify(obj.value)[index]
                        } else {
                            return proxify(new Err('Invalid indices provided!'))
                        }
                    }).map(val => val.$);
                    return returnProxy ? proxify(val) : val
                } else {
                    const num = Number.parseInt(str);
                    if (!isNaN(num)) {
                        if (num >= obj.value.length) {
                            return getNull(prop)
                        }
                        if (num < 0) {
                            const index = obj.value.length + num;
                            if (index < 0) {
                                return Null;
                            }
                            const val = obj.value[index]
                            return returnProxy ? proxify(val) : val
                        }
                        const val = obj.value[num]
                        return returnProxy ? proxify(val) : val
                    } else if (str === 'length') {
                        const val = obj.value.length
                        return returnProxy ? proxify(val) : val
                    } else {
                        const err = new Err('Invalid indices provided!');
                        return returnProxy ? proxify(err) : err
                    }
                }
            }

            return getNull(prop)
        },

        has: (obj, prop) => {
            if (prop === '$' || prop === proxylessChar ||
                prop === 'isNull' || prop === '___$$IsTofuProxy___') {
                return true
            }

            const str = getSymbol(prop)
            var int = Number.parseInt(str);
            if ((typeof obj.value === 'string' || Array.isArray(obj.value))
                && !isNaN(int)
            ) {
                return Math.abs(int) < obj.value.length;
            }
            if (typeof obj.value == 'object' && obj.value !== null) {
                return str in obj.value
            }

            if (typeof obj.value == 'string' && str === 'length') {
                return true
            }

            return false
        }
    })
}

module.exports = {
    proxylessChar,
    getSymbol,
    isProxyless,
    proxify,
    getNull,
    Null
};


