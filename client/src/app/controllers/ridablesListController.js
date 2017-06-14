angular.module('app').controller('ridablesListController', function ridablesListController($scope, $http) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/ridables'
    }).then(function successCallback(response) {
        $scope.ridablesList = response.data;
        console.log($scope.ridablesList)

    }, function errorCallback(response) {
        console.log(response);
    });



});
