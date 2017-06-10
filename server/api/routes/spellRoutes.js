'use strict';
module.exports = function (app) {
    const spell = require('../controllers/spellController');

    app.route('/spell')
        .get(spell.list_all_spells)
        .post(spell.create_a_spell);

    app.route('/spell/:spellId')
        .get(spell.read_a_spell)
        .put(spell.update_a_spell)
        .delete(spell.delete_a_spell);
};
