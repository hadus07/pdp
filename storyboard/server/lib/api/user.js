'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.user = undefined;

var _express = require('express');

var _helpers = require('../helpers');

var _stories = require('../schemas/stories');

var user = (0, _express.Router)();

user.post('/', _helpers.checkToken, async function (req, res) {
    var opts = { path: 'stories', select: '*' };
    var _req$currentUser = req.currentUser,
        _id = _req$currentUser._id,
        stories = _req$currentUser.stories,
        avatar = _req$currentUser.avatar,
        name = _req$currentUser.name,
        email = _req$currentUser.email;

    var strs = await _stories.Story.find({ _id: stories }).populate(opts);

    res.json({ name: name, email: email, _id: _id, avatar: avatar, stories: strs });
});

exports.user = user;