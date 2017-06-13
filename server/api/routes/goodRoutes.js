'use strict';
module.exports = function (app) {
    const goodController = require('../controllers/tradeGoodController');

    app.route('/goods')
        .get(goodController.list_all_packs)
        .post(goodController.create_pack);

    app.route('/goods/:goodId')
        .get(goodController.read_pack)
        .put(goodController.update_pack)
        .delete(goodController.delete_pack);
};
