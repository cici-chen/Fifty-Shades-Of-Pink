var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function(req,res) {
  res.render('home')
})

router.post('/chapter/1', function(req,res) {
  var data = req.body
  res.send(data)
  // res.render('chapterOne',data)
} )

module.exports = router
