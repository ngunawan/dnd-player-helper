angular.module('app').controller('weaponsListController', function weaponsListController($scope, $http, addToCharacterService, Purchase) {

    $scope.query = {};
    $scope.queryBy = "";
    $scope.queryProperty = [];
    $scope.toggleQueryProperty = function (property) {
        let index = $scope.queryProperty.indexOf(property);
        if (index != -1) {
            $scope.queryProperty.splice(index, 1);
        } else {
            $scope.queryProperty.push(property);
        }
    }

    $scope.isProperty = function (weapon) {
        let properties = weapon.properties;
        let found = 0;
        for (let i = 0; i < $scope.queryProperty.length; i++) {
            if (properties.includes($scope.queryProperty[i])) {
                found++;
            }
        }
        if (found == $scope.queryProperty.length) {
            return true;
        } else {
            return false;
        }
    }

    $http({
        method: 'GET',
        url: '/weapons'
    }).then(function successCallback(response) {
        $scope.weaponsList = response.data;
        console.log($scope.weaponsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.Purchase = Purchase;
    $scope.editPurchase = function (weapon) {
        $scope.Purchase.name = weapon.name;
        $scope.Purchase._id = weapon._id;
        $scope.Purchase.unit_cost = weapon.cost;
        $scope.Purchase.amount = 1;
    }
    $scope.showAddWeapon = addToCharacterService.showAddWeapon;


});
