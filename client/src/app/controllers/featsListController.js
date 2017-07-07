angular.module('app').controller('featsListController', function featsListController($scope, $http, $mdDialog, addToCharacterService) {

    $scope.search = "";
    $scope.query = {};
    
    $scope.showAll = false;

    $http({
        method: 'GET',
        url: '/feats'
    }).then(function successCallback(response) {
        $scope.featsList = response.data;
        console.log($scope.featsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    $scope.showAddFeat = addToCharacterService.showAddFeat;


});
