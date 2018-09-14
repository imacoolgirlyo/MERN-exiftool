var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
		id: 1,
		model: "Apple",
		FileLocation: "samsepi0l",
		metadata:{
			"height" : "300",
			"width" : "200"
		}

  }, {
  	id: 2,
		model: "SamSung",
		FileLocation: "samsepi02",
		metadata:{
			"height" : "100",
			"width" : "100"
		}
  }]);
});

module.exports = router;
