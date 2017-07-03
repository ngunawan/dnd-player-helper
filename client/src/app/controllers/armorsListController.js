angular.module('app').controller('armorsListController', function armorsListController($scope, $http, addToCharacterService) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/armors'
    }).then(function successCallback(response) {
        $scope.armorsList = response.data;
        console.log($scope.armorsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.showAddArmor = addToCharacterService.showAddArmor;



});
