'use strict';
module.exports = function (app) {
    const backgroundController = require('../controllers/backgroundController');

    app.route('/backgrounds')
        .get(backgroundController.list_all_backgrounds)
        .post(backgroundController.create_background);

    app.route('/backgrounds/:backgroundId')
        .get(backgroundController.read_background)
        .put(backgroundController.update_background)
        .delete(backgroundController.delete_background);
};
