const express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
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


//initiate models ====================================================
const Spell = require('./api/models/spellModel'),
    Pack = require('./api/models/packModel'),
    Weapon = require('./api/models/weaponModel'),
    Armor = require('./api/models/armorModel'),
    Good = require('./api/models/goodModel'),
    Item = require('./api/models/itemModel'),
    Ridable = require('./api/models/ridableModel'),
    Tool = require('./api/models/toolModel');

//add datas ==========================================================
const addSpells = require('./api/scripts/addSpells'),
    addPacks = require('./api/scripts/addPacks'),
    addWeapons = require('./api/scripts/addWeapons'),
    addArmors = require('./api/scripts/addArmors'),
    addGoods = require('./api/scripts/addGoods'),
    addItems = require('./api/scripts/addItems'),
    addRidables = require('./api/scripts/addRidables'),
    addTools = require('./api/scripts/addTools');


addSpells();
addPacks();
addWeapons();
addArmors();
addGoods();
addItems();
addRidables();
addTools();



//initiate routes ====================================================
const spellRoutes = require('./api/routes/spellRoutes'),
    packRoutes = require('./api/routes/packRoutes'),
    weaponRoutes = require('./api/routes/weaponRoutes'),
    armorRoutes = require('./api/routes/armorRoutes'),
    goodRoutes = require('./api/routes/goodRoutes'),
    itemRoutes = require('./api/routes/itemRoutes'),
    ridableRoutes = require('./api/routes/ridableRoutes'),
    toolRoutes = require('./api/routes/toolRoutes');



spellRoutes(app);
packRoutes(app);
weaponRoutes(app);
armorRoutes(app);
goodRoutes(app);
itemRoutes(app);
ridableRoutes(app);
toolRoutes(app);


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
console.log('RESTful API server started on: ' + port);
