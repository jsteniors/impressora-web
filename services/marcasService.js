var express = require('express');

var MarcasDAO = require('../db/marcasDAO');

var connection = require('../db/connection');

var router = express.Router();

var mDAO = new MarcasDAO(connection);

router.get('/marcas',function (req, res) {

    mDAO.getMarcas(res);

    //console.log('marcas', marcas);

});

module.exports = router;

