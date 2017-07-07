angular.module('app').factory('Purchase', function () {
    return {
        "_id": "",
        "name": "",
        "unit_cost": 0,
        "amount": 0,
        get total_cost() {
            return this.amount * this.unit_cost;
        }
    }
})
