'use strict';
module.exports = function (app) {
    const itemController = require('../controllers/itemController');

    app.route('/items')
        .get(itemController.list_all_items)
        .post(itemController.create_item);

    app.route('/items/:itemId')
        .get(itemController.read_item)
        .put(itemController.update_item)
        .delete(itemController.delete_item);
};
