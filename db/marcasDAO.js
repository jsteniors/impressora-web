var MarcasDAO = function (connection) {

    /*var query = 'SELECT DISTINCT m.* FROM marcas AS m ' +
        'LEFT JOIN marcas_tipos AS mt ON  m.id = mt.marcas_id ' +
        ' INNER JOIN tipos AS t ON t.id=mt.tipos_id';*/
    var query = 'SELECT * FROM marcas';
    //var query = 'SELECT distinct * FROM marcas, marcas_tipos, tipos WHERE (marcas.id=marcas_tipos.marcas_id AND tipos.id = marcas_tipos.tipos_id)';
var TiposDAO = require('../db/tiposDAO');
var tDAO = new TiposDAO(connection);

    this.getMarcas = function (res) {
        var retorno = {};
        connection.query(query, function (error, results, fields) {

            if(error) retorno = error;
                //res.json(error);
            else{
                results.forEach(function (r) {
                    tDAO.getTiposByMarca(r);
                });
                retorno = results;
            }

            console.log('enviando');
            res.json(retorno);
        });
        //return retorno;
    }

}

module.exports = MarcasDAO;