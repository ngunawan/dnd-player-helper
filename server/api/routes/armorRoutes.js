'use strict';
module.exports = function (app) {
    const armorController = require('../controllers/armorController');

    app.route('/armors')
        .get(armorController.list_all_armors)
        .post(armorController.create_armor);

    app.route('/armors/:armorId')
        .get(armorController.read_armor)
        .put(armorController.update_armor)
        .delete(armorController.delete_armor);
};
