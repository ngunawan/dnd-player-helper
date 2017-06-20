angular.module('app').controller('itemsListController', function itemsListController($scope, $http, addToCharacterService) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/items'
    }).then(function successCallback(response) {
        $scope.itemsList = response.data;
        console.log($scope.itemsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.showAddEquipment = addToCharacterService.showAddEquipment;

});
