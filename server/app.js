var express = require('express')

var app = express()


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