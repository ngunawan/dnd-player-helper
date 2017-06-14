'use strict';
module.exports = function (app) {
    const ridableController = require('../controllers/ridableController');

    app.route('/ridables')
        .get(ridableController.list_all_ridables)
        .post(ridableController.create_ridable);

    app.route('/ridables/:ridableId')
        .get(ridableController.read_ridable)
        .put(ridableController.update_ridable)
        .delete(ridableController.delete_ridable);
};
