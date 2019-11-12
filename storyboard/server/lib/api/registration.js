'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registration = undefined;

var _aes = require('crypto-js/aes');

var _aes2 = _interopRequireDefault(_aes);

var _env = require('../env');

var _express = require('express');

var _sha = require('crypto-js/sha256');

var _sha2 = _interopRequireDefault(_sha);

var _users = require('../schemas/users');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registration = (0, _express.Router)();

registration.post('/', async function (req, res) {
    var user = req.body;
    var dbRes = await _users.User.findOne({ email: user.email });
    if (!dbRes) {
        user.password = (0, _sha2.default)(user.password);
        var addedUser = await _users.User.insertMany([user]);
        if (addedUser) {
            console.log(_env.CYPHER);
            var token = _aes2.default.encrypt(user.email + '|' + (new Date().valueOf() + 3600000 * 24), _env.CYPHER + '');
            res.json({ token: token.toString() });
        }
    } else {
        res.json({ error: 'user_already_exists' });
    }
});

exports.registration = registration;