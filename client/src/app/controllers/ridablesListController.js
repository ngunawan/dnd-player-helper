angular.module('app').controller('ridablesListController', function ridablesListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";
    $scope.sortVal = {
        mounts: '',
        landVeh: '',
        waterVeh: ''
    }
    $scope.loading = true;

    //get all ridables
    //-------------------------
    $http({
        method: 'GET',
        url: '/ridables'
    }).then(function successCallback(response) {
        $scope.ridablesList = response.data;
        console.log($scope.ridablesList);
        
        $scope.loading = false;

    }, function errorCallback(response) {
        console.log(response);
    });

    //to keep track of ridable purchase
    //-------------------------
    $scope.Purchase = Purchase;
    $scope.editPurchase = function (ridable) {
        $scope.Purchase.name = ridable.name;
        $scope.Purchase._id = ridable._id;
        $scope.Purchase.unit_cost = ridable.cost;
        $scope.Purchase.amount = 1;
    }

    //to show add equipment dialogue
    //-------------------------
    $scope.showAddEquipment = addToCharacterService.showAddEquipment;

});
