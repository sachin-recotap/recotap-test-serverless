'use strict';

exports.CustomError = function(name, message, data={}) {
    this.name = name;
    this.message = message;
    this.data = data;
};

exports.CustomError.prototype = new Error();