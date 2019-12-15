'use strict';

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _user = require('./api/user');

var _login = require('./api/login');

var _story = require('./api/story');

var _mongoose = require('mongoose');

var _registration = require('./api/registration');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _mongoose.connect)('mongodb://localhost/storyboard', { useNewUrlParser: true });

var server = (0, _express2.default)();

server.use((0, _cors2.default)());
server.use(_express2.default.json({ limit: '3mb' }));
server.use(_express2.default.static(_path2.default.join(__dirname, '../public')));

server.use('/api/user', _user.user);
server.use('/api/login', _login.login);
server.use('/api/story', _story.story);
server.use('/api/registration', _registration.registration);

var PORT = process.env.PORT || 4000;
_mongoose.connection.once('open', function () {
  return server.listen(PORT, function () {
    return console.log('Tugadi');
  });
});