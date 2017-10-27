
var TiposDAO = function (connection) {

    this.getTipos = function (res) {

        connection.query('SELECT * FROM tipos', function (error, results, fields) {
            //console.log(results);
            if(error)
                res.json(error);
            else res.json(results);
        });
    }
    this.getTiposByMarca = function (marca) {
        connection.query('SELECT t.id, t.nome AS tipos_nome FROM `marcas` AS m \n' +
            'LEFT JOIN `marcas_tipos` AS mt ON m.id=mt.marcas_id\n' +
            'LEFT JOIN `tipos` AS t ON mt.tipos_id=t.id WHERE m.id=?',[marca.id],function (error, result, field) {
            if(error){
                res.json(error);
            }else{
                if(result.length>0)
                    marca.tipos = result;
            }

        });
    }
}

module.exports = TiposDAO;