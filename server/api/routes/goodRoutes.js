'use strict';
module.exports = function (app) {
    const goodController = require('../controllers/goodController');

    app.route('/goods')
        .get(goodController.list_all_goods)
        .post(goodController.create_good);

    app.route('/goods/:goodId')
        .get(goodController.read_good)
        .put(goodController.update_good)
        .delete(goodController.delete_good);
};
