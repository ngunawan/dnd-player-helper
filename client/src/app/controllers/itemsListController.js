angular.module('app').controller('itemsListController', function itemsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    //get all items
    //-------------------------
    $http({
        method: 'GET',
        url: '/items'
    }).then(function successCallback(response) {
        $scope.itemsList = response.data;
        console.log($scope.itemsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to keep track of item purchase
    //-------------------------
    $scope.Purchase = Purchase;
    $scope.editPurchase = function (item) {
        $scope.Purchase.name = item.name;
        $scope.Purchase._id = item._id;
        $scope.Purchase.unit_cost = item.cost;
        $scope.Purchase.amount = 1;
    }

    //to show add item dialogue
    //-------------------------
    $scope.showAddEquipment = addToCharacterService.showAddEquipment;

});
