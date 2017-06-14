angular.module('app').controller('packsListController', function packsListController($scope, $http) {

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



});
