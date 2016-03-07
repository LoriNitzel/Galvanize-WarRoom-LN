var express = require('express');
// var knex = require('../db/knex');
var router = express.Router();
const warroom = require("../warroom-client")


/* GET home page. */
router.get('/', function(req, res, next) {
  warroom((error, data) => res.json(data));
});

router.get('/:id', function(req, res, next){
  warroom((error, data) => res.json(data.data[req.params.id]));
  
});


module.exports = router;
