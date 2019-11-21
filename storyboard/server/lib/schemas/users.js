'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _env = require('../env');

var _mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
    email: String,
    password: String,
    date_created: {
        type: Date,
        default: Date.now
    },
    stories: [{
        ref: 'Stories',
        type: _mongoose.Schema.Types.ObjectId
    }],
    avatar: {
        type: String,
        default: _env.URL + '/avatars/avatar.png'
    },
    name: {
        type: String,
        default: 'New_User@' + Math.random().toString().slice(2, 8)
    }
});

var User = exports.User = (0, _mongoose.model)('Users', userSchema);