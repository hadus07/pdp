'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generateToken = exports.sendError = undefined;

var _env = require('./env');

var _aes = require('crypto-js/aes');

var _aes2 = _interopRequireDefault(_aes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendError = exports.sendError = function sendError(error) {
    return { error: error };
};

var generateToken = exports.generateToken = function generateToken(email) {
    var str = email + '|' + (new Date().valueOf() + 3600000 * 24);
    return _aes2.default.encrypt(str, _env.CYPHER.toString()).toString();
};