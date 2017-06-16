"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
var Project = require('./models').Project;
var strftime = require('strftime');
var _ = require('underscore')

// Example endpoint
router.get('/example', function (req, res) {
  var project = new Project({
    title: 'I am a test project'
  });
  project.save(function (err) {
    if (err) {
      res.status(500).json(err);
    } else {
      res.send('Success: created a Project object in MongoDb');
    }
  });
});


module.exports = router;
