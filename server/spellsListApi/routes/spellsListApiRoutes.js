'use strict';
module.exports = function (app) {
    var spellsList = require('../controllers/spellsListApiController');

    app.route('/spellsList')
        .get(spellsList.list_all_spells)
        .post(spellsList.create_a_spell);

    app.route('/spellsList/:spellId')
        .get(spellsList.read_a_spell)
        .put(spellsList.update_a_spell)
        .delete(spellsList.delete_a_spell);
};
