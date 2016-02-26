// Node/Express Vars
var express = require('express')
var twig = require('twig')
var app = express()
var fs = require('fs')

// App
app.set('views', './views')
app.use(express.static('public'))
app.get('/',function(request, result) {
    result.render('layout.twig', {
        message: "Hello Twig!"
    })
});

var server = app.listen(3000, function() {
    console.log("Server running at http://localhost:" + server.address().port)
});

