var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET users listing. */
router.get('/', function(req, res) {
   fs.readFile('/Users/chengxiang/github/history/site/routes/dynasties.json', 'utf8', function (err,data) {
	  if (err) {
	    return console.log(err);
	  }
	  var dynastyJson = JSON.parse(data);
	  res.json(dynastyJson);
	});
  
});

module.exports = router;
