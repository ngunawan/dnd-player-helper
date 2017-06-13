'use strict';
module.exports = function (app) {
    const spellController = require('../controllers/spellController');

    app.route('/spells')
        .get(spellController.list_all_spells)
        .post(spellController.create_spell);

    app.route('/spells/:spellId')
        .get(spellController.read_spell)
        .put(spellController.update_spell)
        .delete(spellController.delete_spell);
};
