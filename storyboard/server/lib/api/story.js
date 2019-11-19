'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.story = undefined;

var _express = require('express');

var _helpers = require('../helpers');

var story = (0, _express.Router)();

story.post('/', _helpers.checkToken, async function (req, res) {
    console.log(req.user);
});

exports.story = story;