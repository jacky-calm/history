var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res) {
	var catelog = req.param('catelog');
	var item = req.param('item'); 
	var base = '/Users/chengxiang/github/history/site/routes/dynasty/';
	var filePath = base+catelog+'/'+item+'.json';
	console.log(filePath);
  fs.readFile(filePath, 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var dynastyJson = JSON.parse(data);
	  res.json(dynastyJson);
	});
  
});

module.exports = router;
