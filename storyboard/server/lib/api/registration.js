'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registration = undefined;

var _express = require('express');

var _sha = require('crypto-js/sha256');

var _sha2 = _interopRequireDefault(_sha);

var _users = require('../schemas/users');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var registration = (0, _express.Router)();

registration.post('/', async function (req, res) {
    var user = req.body;
    var dbRes = await _users.User.findOne({ email: user.email });
    if (!dbRes) {
        user.password = (0, _sha2.default)(user.password);
        var addedUser = await _users.User.insertMany([user]);
        if (addedUser) {
            res.json({ token: (0, _helpers.generateToken)(user.email) });
        } else {
            res.json((0, _helpers.sendError)('cannot_create_user'));
        }
    } else {
        res.json((0, _helpers.sendError)('user_already_exists'));
    }
});

exports.registration = registration;