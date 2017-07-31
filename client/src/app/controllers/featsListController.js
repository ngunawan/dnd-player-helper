angular.module('app').controller('featsListController', function featsListController($scope, $http, $mdDialog, addToCharacterService) {

    $scope.search = "";
    $scope.query = {};
    $scope.showAll = false;

    //get all feats
    //-------------------------
    $http({
        method: 'GET',
        url: '/feats'
    }).then(function successCallback(response) {
        $scope.featsList = response.data;
        console.log($scope.featsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to show add feat dialogue
    //-------------------------
    $scope.showAddFeat = addToCharacterService.showAddFeat;


});
