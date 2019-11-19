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
    author_id: _mongoose.Schema.Types.ObjectId,
    date_created: {
        type: Date,
        default: Date.now
    },
    cover: {
        type: String,
        default: _env.URL + '/covers/avatar.png'
    }
});

var Story = exports.Story = (0, _mongoose.model)('Stories', storySchema);