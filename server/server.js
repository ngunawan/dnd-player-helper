const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Spell = require('./spellsListApi/models/spellsListApiModel'),
    bodyParser = require('body-parser'),
    path = require('path');

mongoose.Promise = global.Promise; //setting mongoose promise to native promises
mongoose.connect('mongodb://localhost/Dndb');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json()); //parses the text as json and exposes the resulting object on req.body.

app.use(express.static(path.resolve('../client/src/views/'))); //sets up static files relative to cwd of index.html
app.get('/dist/bundle.js', function (req, res) {
    res.sendFile(path.resolve('../client/dist/bundle.js'));
});


//initiate routes ====================================================

var routes = require('./spellsListApi/routes/spellsListApiRoutes');
routes(app);


//default route
app.get('/', function (req, res) {
    res.sendFile(path.resolve('../client/src/views/index.html'));
});



//error handling 
app.use(function (req, res) {
    res.status(404).send({
        url: req.originalUrl + ' not found'
    })
});


//listen to port =====================================================
app.listen(port);
console.log('spells list RESTful API server started on: ' + port);
