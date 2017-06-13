const mongoose = require('mongoose'),
    connection = mongoose.connect('mongodb://localhost/Dndb');


mongoose.connection.on('open', function () {
    mongoose.connection.db.listCollections().toArray(function (err, names) {
        if (err) {
            console.log(err);
        } else {
            console.log(names);
        }

        mongoose.connection.close();
    });
});
