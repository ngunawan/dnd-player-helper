angular.module('app').controller('goodsListController', function goodsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    //get all goods
    //-------------------------
    $http({
        method: 'GET',
        url: '/goods'
    }).then(function successCallback(response) {
        $scope.goodsList = response.data;
        console.log($scope.goodsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to keep track of good purchase
    //-------------------------
    $scope.Purchase = Purchase;
    $scope.editPurchase = function (good) {
        $scope.Purchase.name = good.name;
        $scope.Purchase._id = good._id;
        $scope.Purchase.unit_cost = good.cost;
        $scope.Purchase.amount = 1;
    }
    
    //to show add good dialogue
    //-------------------------
    $scope.showAddEquipment = addToCharacterService.showAddEquipment;



});
