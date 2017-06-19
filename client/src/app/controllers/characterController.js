angular.module('app').controller('characterController', function characterController($routeParams, $http, $scope) {
    


    $http({
        method: 'GET',
        url: '/characters/' + $routeParams.characterId
    }).then(function successCallback(response) {
        $scope.currentCharacter = response.data;
        console.log(response);
        console.log($scope.currentCharacter);

    }, function errorCallback(response) {
        console.log(response);
    });






});
