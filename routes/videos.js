var express = require('express');
var router = express.Router();

/* GET ALL Videos */
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

/* UPLOAD Video */
router.post('/', function(req, res, next){

  let imageFile = req.files.file;
  let imageFilename = imageFile.name;
 console.log(req.body.filename);
 console.log(imageFilename);

 imageFile.mv(`${__dirname}/public/${imageFilename}`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json(imageFilename);
  });

});

/* GET SINGLE Video BY ID */
router.get('/:id', function(req, res, next){
    // Book.findById(req.params.id, function (err, post) {
    //     if (err) return next(err);
    //     res.json(post);
    res.send('Get to /api/video/:id');

});

module.exports = router;