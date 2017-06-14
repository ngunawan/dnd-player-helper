'use strict';
module.exports = function (app) {
    const packController = require('../controllers/packController');

    app.route('/packs')
        .get(packController.list_all_packs)
        .post(packController.create_pack);

    app.route('/packs/:packId')
        .get(packController.read_pack)
        .put(packController.update_pack)
        .delete(packController.delete_pack);
};
