angular.module('app').controller('armorsListController', function armorsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";

    //get all armors
    //-------------------------
    $http({
        method: 'GET',
        url: '/armors'
    }).then(function successCallback(response) {
        $scope.armorsList = response.data;
        console.log($scope.armorsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to keep track of armor purchase
    //-------------------------
    $scope.Purchase = Purchase;
    $scope.editPurchase = function (armor) {
        $scope.Purchase.name = armor.name;
        $scope.Purchase._id = armor._id;
        $scope.Purchase.unit_cost = armor.cost;
        $scope.Purchase.amount = 1;
    }
    
    //to show add armor dialogue
    //-------------------------
    $scope.showAddArmor = addToCharacterService.showAddArmor;



});
