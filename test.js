var assert = require('assert');
var eql = require('./index');

assert(eql({ 'a': 'b' }, null) === false);
