'use strict';
module.exports = function (app) {
    const raceController = require('../controllers/raceController');

    app.route('/races')
        .get(raceController.list_all_races)
        .post(raceController.create_race);

    app.route('/races/:raceId')
        .get(raceController.read_race)
        .put(raceController.update_race)
        .delete(raceController.delete_race);
    
    app.route('/races/name/:raceName')
        .get(raceController.read_race_by_name);
    
};
