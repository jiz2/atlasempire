'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	/*jshint unused:false*/
	// res.render('index', {
	// 	title: 'Atlas Empire Home'
	// });
	// res.redirect('/weebly');
	res.redirect('/battle');
});

/* GET battlesimulator page. */
router.get('/battle', function(req, res, next) {
	/*jshint unused:false*/
	res.render('battle', {
		title: 'Atlas Empire Battle Simulator',
		cssSrc: '/stylesheets/battle.css',
		jsSrc: '/javascripts/battle.js'
	});
});

/* GET weebly page. */
router.get('/weebly', function(req, res, next) {
	/*jshint unused:false*/
	res.render('weeblyscript', {
		title: 'Atlas Empire Combat Power Calculator',
		cssSrc: '/stylesheets/weebly.css',
		cpscript: '/javascripts/calculator.js'
	});
});

module.exports = router;
