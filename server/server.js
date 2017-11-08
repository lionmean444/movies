var express = require('express')
var app = express()


                /* THIS WILL DO IN MEMORY
                var mov = [];
                app.get('/movies', function (req, res) {
                    getData();
                    res.setHeader('Access-Control-Allow-Origin', '*') 
                    res.json(mov);
                })
                app.listen(3000);

                var getData = function(){
                            console.log('in getD');
                            for (i=0;i<25;i++)
                        mov.push({id:i, title:'title '+i,rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []});
                }
                END IN MEMORY
                */


//MONGOOSE
 movies = require('./routes/moviesRoute');
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


app.get('/movies/:id', movies.findById);
app.get('/movies', movies.findAll);
app.get('/movies/find/:name', movies.findName);
app.post('/movies', movies.addMovie);
app.delete('/movies/:id', movies.deleteMovie);
app.put('/movies/:id', movies.updateMovie);

app.listen(3000);

