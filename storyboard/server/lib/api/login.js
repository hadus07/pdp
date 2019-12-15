'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.login = undefined;

var _express = require('express');

var _sha = require('crypto-js/sha256');

var _sha2 = _interopRequireDefault(_sha);

var _users = require('../schemas/users');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var login = (0, _express.Router)();

login.post('/', async function (req, res) {
    var user = req.body;
    var dbUser = await _users.User.findOne({ email: user.email });

    if (dbUser) {
        if ((0, _sha2.default)(user.password).toString() === dbUser.password) {
            res.json({ token: (0, _helpers.generateToken)(user.email) });
        } else {
            res.json((0, _helpers.sendError)('incorrect_password'));
        }
    } else {
        res.json((0, _helpers.sendError)('user_not_found'));
    }
});

exports.login = login;