var express = require('express');

var router = express.Router();
router.get('/teste', function (req, resp, next) {
    res.json({message: 'teste'});
});

module.exports = router;