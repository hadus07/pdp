'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.checkToken = exports.generateToken = exports.sendError = undefined;

var _env = require('./env');

var _aes = require('crypto-js/aes');

var _aes2 = _interopRequireDefault(_aes);

var _encUtf = require('crypto-js/enc-utf8');

var _encUtf2 = _interopRequireDefault(_encUtf);

var _users = require('./schemas/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendError = exports.sendError = function sendError(error) {
    return { error: error };
};

var generateToken = exports.generateToken = function generateToken(email) {
    var str = email + '|' + (new Date().valueOf() + 3600000 * 24);
    return _aes2.default.encrypt(str, _env.CYPHER).toString();
};

var checkToken = exports.checkToken = async function checkToken(req, res, next) {
    var token = req.body && req.body.token;

    if (token) {
        token = _aes2.default.decrypt(token, _env.CYPHER).toString(_encUtf2.default);
        var email = token.split('|')[0];
        var expDate = token.split('|')[1];

        if (expDate >= new Date().valueOf()) {
            res.json(sendError('token_expired'));
        } else {
            var user = await _users.User.findOne({ email: email });
            req.user = user;
            delete req.body.token;
            next();
        }
    } else {
        res.json(sendError('no_token_sent'));
    }
};