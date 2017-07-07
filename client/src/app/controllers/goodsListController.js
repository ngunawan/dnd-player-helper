angular.module('app').controller('goodsListController', function goodsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/goods'
    }).then(function successCallback(response) {
        $scope.goodsList = response.data;
        console.log($scope.goodsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.Purchase = Purchase;
    $scope.editPurchase = function (good) {
        $scope.Purchase.name = good.name;
        $scope.Purchase._id = good._id;
        $scope.Purchase.unit_cost = good.cost;
        $scope.Purchase.amount = 1;
    }
    $scope.showAddEquipment = addToCharacterService.showAddEquipment;



});
