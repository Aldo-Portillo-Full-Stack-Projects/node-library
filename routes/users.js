var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get("/cool", function(req, res) {
  res.send('this is the cool page under users.js')
})

module.exports = router;
