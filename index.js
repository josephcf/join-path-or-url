'use strict';
var path = require('path');
var urljoin = require('url-join');

module.exports = function () {
    if(arguments.length === 0) {
        return '';
    }
    if(arguments.length === 1){
        return arguments[0];
    }
    if(arguments[0].indexof('http') !== -1){
        return urljoin.apply(this, arguments);
    }else{
        return path.join.apply(this, arguments);
    }
};
