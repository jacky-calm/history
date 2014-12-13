var express = require('express');
var router = express.Router();
var fs = require('fs');


/* GET home page. */
router.get('/', function(req, res) {
	fs.readFile('/Users/chengxiang/github/history/site/routes/times.json', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var dynastyJson = JSON.parse(data);
	  console.log(dynastyJson);
	  res.render('index', { title: '中国历史年代表' , dynasties: dynastyJson});
	});
});

module.exports = router;
