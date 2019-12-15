'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.story = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _env = require('../env');

var _express = require('express');

var _users = require('../schemas/users');

var _stories = require('../schemas/stories');

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
    if (req.body.cover === '') {
        delete req.body.cover;
        var addedStory = await _stories.Story.insertMany([story]);

        await _users.User.findByIdAndUpdate(req.currentUser._id, { $push: { stories: addedStory[0]._id } });

        res.json({ id: addedStory[0]._id });
    } else {
        var cov = req.body.cover;
        var data = cov.slice(cov.indexOf(',') + 1);
        var ext = cov.slice(11, cov.indexOf(';'));
        ext = ext === 'jpeg' ? 'jpg' : ext;
        var coverId = Math.random().toString().slice(2, 22);
        var coverName = coverId + '.' + ext;
        var coverUrl = _env.URL + '/covers/' + coverName;
        var coverPath = _path2.default.join(__dirname, '../..', 'public/covers', coverName);

        story.cover = coverUrl;

        _fs2.default.writeFile(coverPath, data, 'base64', async function (err) {
            if (err) res.json((0, _helpers.sendError)('image_write_error'));
            var addedStory = await _stories.Story.insertMany([story]);

            await _users.User.findByIdAndUpdate(req.currentUser._id, { $push: { stories: addedStory[0]._id } });

            res.json({ id: addedStory[0]._id });
        });
    }
});

exports.story = story;