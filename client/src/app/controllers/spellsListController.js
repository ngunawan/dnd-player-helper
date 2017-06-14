angular.module('app').controller('spellsListController', function spellsListController($scope, $http) {

    $scope.query = {
        class: ''
    };
    $scope.queryBy = "";


    $http({
        method: 'GET',
        url: '/spells'
    }).then(function successCallback(response) {
        $scope.spellsList = response.data;
        console.log($scope.spellsList)

    }, function errorCallback(response) {
        console.log(response);
    });



});
