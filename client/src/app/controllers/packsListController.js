angular.module('app').controller('packsListController', function packsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/packs'
    }).then(function successCallback(response) {
        $scope.packsList = response.data;
        console.log($scope.packsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.Purchase = Purchase;
    $scope.editPurchase = function (pack) {
        $scope.Purchase.name = pack.name;
        $scope.Purchase._id = pack._id;
        $scope.Purchase.unit_cost = pack.cost;
        $scope.Purchase.amount = 1;
    }

    $scope.showAddEquipment = addToCharacterService.showAddEquipment;


});
