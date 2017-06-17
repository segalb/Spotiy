"use strict";

// Routes, with inline controllers for each route.
var express = require('express');
var router = express.Router();
// var Project = require('./models').Project;
// var strftime = require('strftime');
var _ = require('underscore')

// Example endpoint
router.get('/', function (req, res) {
  res.render('login');
});


module.exports = router;
