var express = require('express')

var app = express()
var mov = [];// [{id:1, title:'title 1',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []}];
var getD = function(){
            console.log('in getD');
            for (i=0;i<25;i++)
           mov.push({id:i, title:'title 1',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []});
        }
         

app.get('/movies', function (req, res) {
    getD();
    res.setHeader('Access-Control-Allow-Origin', '*') 
    res.json(mov);
        /*[
          
            {id:2, title:'title 2',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []},
            {id:3, title:'title 2',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []},
            {id:4, title:'title 2',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []},

            
        ]*/
    
})

app.listen(3000);