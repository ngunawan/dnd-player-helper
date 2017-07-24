'use strict';
module.exports = function (app) {
    const classController = require('../controllers/classController');

    app.route('/classes')
        .get(classController.list_all_classes)
        .post(classController.create_class);

    app.route('/classes/:classId')
        .get(classController.read_class)
        .put(classController.update_class)
        .delete(classController.delete_class);
    
    app.route('/classes/name/:className')
        .get(classController.read_class_by_name);
    
};
