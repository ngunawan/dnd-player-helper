angular.module('app').controller('goodsListController', function goodsListController($scope, $http) {

    $scope.query = {};
    $scope.queryBy = "";

    $http({
        method: 'GET',
        url: '/goods'
    }).then(function successCallback(response) {
        $scope.goodsList = response.data;
        console.log($scope.goodsList)

    }, function errorCallback(response) {
        console.log(response);
    });



});
