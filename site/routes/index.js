var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res) {
	res.render('index', { title: '中国历史年代表'});
});

module.exports = router;
