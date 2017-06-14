'use strict';
module.exports = function (app) {
    const weaponController = require('../controllers/weaponController');

    app.route('/weapons')
        .get(weaponController.list_all_weapons)
        .post(weaponController.create_weapon);

    app.route('/weapons/:weaponId')
        .get(weaponController.read_weapon)
        .put(weaponController.update_weapon)
        .delete(weaponController.delete_weapon);
};
