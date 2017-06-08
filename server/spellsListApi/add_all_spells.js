const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb'),
    Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const SpellSchema = new Schema({
    name: {
        type: String,
    },
    level: {
        type: String,
    },
    school: {
        type: String,
    },
    castingtime: {
        type: String,
    },
    range: {
        type: String,
    },
    components: {
        type: String,
    },
    duration: {
        type: String,
    },
    description: {
        type: String,
    }
});

var Spells = mongoose.model('Spells', SpellSchema);

var array = require('./spells.json');


Spells.insertMany(array, function (error, docs) {
    if(error) {
        console.log("error")
    } else {
        console.log("success")
    }
    
});

mongoose.connection.close();
