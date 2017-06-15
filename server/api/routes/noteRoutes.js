'use strict';
module.exports = function (app) {
    const noteController = require('../controllers/noteController');

    app.route('/notes')
        .get(noteController.list_all_notes)
        .post(noteController.create_note);

    app.route('/notes/:noteId')
        .get(noteController.read_note)
        .put(noteController.update_note)
        .delete(noteController.delete_note);

    app.route('/notes/name/:noteName')
        .get(noteController.read_note_by_name);

};
