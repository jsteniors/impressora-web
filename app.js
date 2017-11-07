var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var mysql =  require('mysql');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var connection = require('./db/connection');

var TiposDAO =  require('./db/tiposDAO');

var marcasService = require('./services/marcasService');

app.use('/',marcasService);

var port = process.env.PORT || 3000;

//var teste = require('./routes/teste');



app.use(express.static(__dirname + '/public'));

app.use('/teste',(req, res)=>res.json({message: 'teste'}));



app.use('/tipos',function(req, res){
  var dao = new TiposDAO(connection);
  var dados = dao.getTipos(res);
});


app.use('/robot', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
  var msg = [];
  
  var qtd = Math.floor(Math.random() * (2))+1;

  msg.push({type:'message', content:"Lorem ipsum dolor sit amet, eu augue zril numquam sit, est ea quas errem populo. Utroque pertinacia assueverit te nam, melius delectus ut vis. Ut sed solum deserunt, ne mei autem dissentiunt. Minim singulis deseruisse eu ius, voluptua deserunt no vix."});
  msg.push({type:'message', content: '<input type="text" placeholder="Digite seu nome"><input type="text" placeholder="Telefone"><a>Enviar</a>'});
  msg.push({type:'message', content: '<img src="http://lorempixel.com/400/200">'});
  //msg.push({type:'message', content:"Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker."});
  //msg.push({type:'message', content:"Vse telo suhijm mi, sxuflad kasxtanju tut ku. Oni mi velju pridij vilkas, bez da maluo slovio, vi voz kofe sxuflad ucxitelica. Vo takak robenie gaz. Ne tut robijm iskajm dirkas. Dev li jazikaf ocxviduo, dva to znal miakju. Nocx hrebet kontainer tut da, es dom blizuo verijm zvestis."});
  msg.push({type:'message', content:"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit <a class='link' href='http://google.com'>Teste de link</a>"});
  msg.push({type:'render', location:"http://google.com"});
  msg.push({type:'linked', buttonText:"Clique aqui", link:'http://google.com'});
  msg.push({type:'form'});

  

  var retorno = [];
  
  for(var i = 0;i<qtd;i++){
    var num = Math.floor(Math.random() * (msg.length));
    retorno.push(msg[num]);
  }

  setTimeout(function(){
  	res.json(retorno);
  }, 2000);

});




app.listen(port, function () {
  console.log('Example app listening on port '+port+'!');
});
