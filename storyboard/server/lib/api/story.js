'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.story = undefined;

var _express = require('express');

var _users = require('../schemas/users');

var _stories = require('../schemas/stories');

var _helpers = require('../helpers');

var story = (0, _express.Router)();

story.get('/', async function (req, res) {
    var opts = {
        path: 'author',
        select: 'name avatar'
    };
    res.json((await _stories.Story.find().populate(opts)));
});

story.delete('/', _helpers.checkToken, async function (req, res) {
    var id = req.body.id;

    await _users.User.findByIdAndUpdate(req.currentUser._id, { $pull: { stories: id } });
    await _stories.Story.findByIdAndDelete(id);
    res.json({ id: id });
});

story.post('/', _helpers.checkToken, async function (req, res) {
    var story = req.body;
    story.author = req.currentUser._id;

    var addedStory = await _stories.Story.insertMany([story]);

    await _users.User.findByIdAndUpdate(req.currentUser._id, { $push: { stories: addedStory[0]._id } });

    res.json({ message: 'success' });
});

exports.story = story;