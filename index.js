'use strict'

var Px2rem = require('px2rem')
var defaultOptions = {
    remUnit: 75,
    threeVersion: false,
    remVersion: true,
    baseDpr: 2,
    remPrecision: 6
}

module.exports = function(content, file, conf) {
    var options = Object.assign({}, defaultOptions, file.px2rem || {})
    var px2rem = new Px2rem(options)

    return px2rem.generateRem(content)
}
