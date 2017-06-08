const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Spellsdb'),
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

Spells.remove({}, function (err) {
    if (err) {
        console.log(err)
    } else {
        res.end('success');
    }
});

mongoose.connection.close();
