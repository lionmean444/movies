// server.js
const express = require('express');
const app = express();
 

var server_port = process.env.YOUR_PORT || process.env.PORT || 5000;
var server_host = process.env.YOUR_HOST || '0.0.0.0';

// Run the app by serving the static files
// in the dist directory


movies = require('./server/routes/moviesRoute');
var cors = require('cors')
var bodyParser = require('body-parser');
var morgan = require('morgan')

app.use(cors())
app.use(morgan('combined'))
//app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

var distDir = __dirname + "/dist";
app.use(express.static(distDir));
 


//app.use(express.static(__dirname + '/dist'));
// Start the app by listening on the default
// Heroku port
app.get('/movies/:id', movies.findById);
app.get('/movies', movies.findAll);
app.get('/movies/find/:name', movies.findName);
app.post('/movies', movies.addMovie);
app.delete('/movies/:id', movies.deleteMovie);
app.put('/movies/:id', movies.updateMovie);
var server = app.listen(process.env.PORT || 8080, function () {
    var port = server.address().port;
    console.log("App now running on port", port);
});



