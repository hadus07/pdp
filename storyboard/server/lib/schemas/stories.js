'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Story = undefined;

var _env = require('../env');

var _mongoose = require('mongoose');

var storySchema = new _mongoose.Schema({
    title: String,
    content: String,
    category: String,
    date_created: {
        type: Date,
        default: Date.now
    },
    author: {
        ref: 'Users',
        type: _mongoose.Schema.Types.ObjectId
    },
    cover: {
        type: String,
        default: _env.URL + '/covers/cover.png'
    }
});

var Story = exports.Story = (0, _mongoose.model)('Stories', storySchema);