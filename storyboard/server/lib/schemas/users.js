'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.User = undefined;

var _mongoose = require('mongoose');

var userSchema = new _mongoose.Schema({
    email: String,
    password: String,
    stories: [_mongoose.Schema.Types.ObjectId],
    date_created: {
        type: Date,
        default: Date.now
    },
    avatar: {
        type: String,
        default: 'localhost:4000/public/avatars/avatar.png'
    },
    name: {
        type: String,
        default: 'New_User@' + Math.random().toString().slice(2, 8)
    }
});

var User = exports.User = (0, _mongoose.model)('Users', userSchema);