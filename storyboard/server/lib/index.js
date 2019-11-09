'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _users = require('./schemas/users');

var _mongoose = require('mongoose');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mongoose.connect)('mongodb://localhost/storyboard', { useNewUrlParser: true });

var server = (0, _express2.default)();
server.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

server.get('/api', function (req, res) {
    _users.User.insertMany([{ email: 'test@test.com' }]).catch(function (err) {
        return console.log('db error');
    });
});

var PORT = process.env.PORT || 4000;
_mongoose.connection.once('open', function () {
    return server.listen(PORT, function () {
        return console.log('Tugadi');
    });
});