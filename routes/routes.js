'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	/*jshint unused:false*/
	// res.render('index', { title: 'Express' });
	res.redirect('/weebly');
});

router.get('/weebly', function(req, res, next) {
	/*jshint unused:false*/
	res.render('weeblyscript', {
		title: 'Atlas Empire Combat Power Calculator',
		cpscript: '/javascripts/calculator.js'
	});
});

module.exports = router;
