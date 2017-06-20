angular.module('app').controller('toolsListController', function toolsListController($scope, $http, addToCharacterService) {

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

    $scope.showAddEquipment = addToCharacterService.showAddEquipment;


});
