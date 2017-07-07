angular.module('app').controller('ridablesListController', function ridablesListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/ridables'
    }).then(function successCallback(response) {
        $scope.ridablesList = response.data;
        console.log($scope.ridablesList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.Purchase = Purchase;
    $scope.editPurchase = function (ridable) {
        $scope.Purchase.name = ridable.name;
        $scope.Purchase._id = ridable._id;
        $scope.Purchase.unit_cost = ridable.cost;
        $scope.Purchase.amount = 1;
    }

    $scope.showAddEquipment = addToCharacterService.showAddEquipment;



});
