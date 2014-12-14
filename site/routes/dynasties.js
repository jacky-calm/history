var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res) {
	var country = req.param('country');
  fs.readFile('/Users/chengxiang/github/history/site/routes/dynasties-'+country+'.json', 
  	'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var dynastyJson = JSON.parse(data);
	  res.json(dynastyJson);
	});
  
});

module.exports = router;
