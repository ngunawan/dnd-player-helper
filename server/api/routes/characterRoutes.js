'use strict';
module.exports = function (app) {
    const characterController = require('../controllers/characterController');

    app.route('/characters')
        .get(characterController.list_all_characters)
        .post(characterController.create_character);

    app.route('/characters/:characterId')
        .get(characterController.read_character)
        .put(characterController.update_character)
        .delete(characterController.delete_character);

    app.route('/characters/:characterId/spells')
        .post(characterController.add_spell);
    app.route('/characters/:characterId/equipments')
        .post(characterController.add_equipments);
    app.route('/characters/:characterId/weapons')
        .post(characterController.add_weapons);
    app.route('/characters/:characterId/armors')
        .post(characterController.add_armors);
    app.route('/characters/:characterId/feats')
        .post(characterController.add_feat);
    
    app.route('/characters/:characterId/gold/:newGold')
        .put(characterController.update_gold);
    
};
