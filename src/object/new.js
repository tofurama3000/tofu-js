const {proxify} = require('./proxy_utils')

module.exports = (Constructor, ...args) => proxify(new Constructor, ...args)
