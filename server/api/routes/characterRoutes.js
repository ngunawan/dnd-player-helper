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
        .put(characterController.update_character_spells);
};
