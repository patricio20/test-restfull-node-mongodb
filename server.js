var express  = require("express"),
    app      = express(),
    http     = require("http"),
    server   = http.createServer(app),
    mongoose = require('mongoose');

app.configure(function () {
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
});

app.get('/', function(req, res){
    res.send('Hola, Mundo!');
});

routes = require('./routes')(app);

mongoose.connect('mongodb://localhost/testmongo', function(err, res) {
    if (err) console.log( 'ERROR: Conectando a la BD...' + err);
    else console.log('Conexion con BD realizada');
});


app.listen(5000);
console.log('Servidor Express escuchando en el puerto 5000');
