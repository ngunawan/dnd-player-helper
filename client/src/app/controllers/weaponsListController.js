angular.module('app').controller('weaponsListController', function weaponsListController($scope, $http) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/weapons'
    }).then(function successCallback(response) {
        $scope.weaponsList = response.data;
        console.log($scope.weaponsList)

    }, function errorCallback(response) {
        console.log(response);
    });



});
