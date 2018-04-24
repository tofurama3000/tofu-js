const new_ = require('./new.js')
const transform = require('./transform.js')
const {Null, proxylessChar} = require('./proxy_utils.js')

module.exports = {
    new_: new_,
    transform: transform,
    Null: Null,
    proxylessChar: proxylessChar,
    valIndex: index => proxylessChar + (index || '')
}
