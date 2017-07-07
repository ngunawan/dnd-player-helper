'use strict';
module.exports = function (app) {
    const featController = require('../controllers/featController');

    app.route('/feats')
        .get(featController.list_all_feats)
        .post(featController.create_feat);

    app.route('/feats/:featId')
        .get(featController.read_feat)
        .put(featController.update_feat)
        .delete(featController.delete_feat);
};
