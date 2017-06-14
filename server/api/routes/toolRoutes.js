'use strict';
module.exports = function (app) {
    const toolController = require('../controllers/toolController');

    app.route('/tools')
        .get(toolController.list_all_tools)
        .post(toolController.create_tool);

    app.route('/tools/:toolId')
        .get(toolController.read_tool)
        .put(toolController.update_tool)
        .delete(toolController.delete_tool);
};
