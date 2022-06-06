// Imports
var express     = require('express');
var bodyParser  = require('body-parser');
var imageRoute   = require('./routes/images');

// Instantiate server
var server = express();

// Body Parser configuration
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

// Configure controller
server.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.status(200).send('<h1>Bonjour sur mon super server</h1>');
});

//server.use('/api/', imageRoute);

server.use("/images", imageRoute);
server.use('/uploads', express.static('uploads'));


// Launch server
server.listen(3000, function() {
    console.log('Server en écoute :)');
});