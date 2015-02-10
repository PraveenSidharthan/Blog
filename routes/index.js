var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'RICHIE BULL WORLD' });
});

router.get('contact.html',function(reg,res,next) {
    res.render('contact',{title: 'RICHIE BULL BLOG'})
});
module.exports = router;
