var express = require('express')

var app = express()

app.get('/movies', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*') 
    res.json(
        [
            {id:1, title:'title 1',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: ['John Wayne', 'Ferris Buehler']},
            {id:2, title:'title 2',rating:3,thiss:false, dateWatched: new Date('1/2/2017'),watchAgain:true, characters: []}

        ]
    )
})

app.listen(3000);