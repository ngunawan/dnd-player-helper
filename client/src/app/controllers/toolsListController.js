angular.module('app').controller('toolsListController', function toolsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/tools'
    }).then(function successCallback(response) {
        $scope.toolsList = response.data;
        console.log($scope.toolsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.Purchase = Purchase;
    $scope.editPurchase = function (tool) {
        $scope.Purchase.name = tool.name;
        $scope.Purchase._id = tool._id;
        $scope.Purchase.unit_cost = tool.cost;
        $scope.Purchase.amount = 1;
    }

    $scope.showAddEquipment = addToCharacterService.showAddEquipment;


});
