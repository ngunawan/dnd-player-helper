angular.module('app').controller('spellsListController', function spellsListController($scope, $http, $mdDialog, addToCharacterService) {

    $scope.query = {
        class: ''
    };
    $scope.queryBy = "";

    //get all spells
    //-------------------------
    $http({
        method: 'GET',
        url: '/spells'
    }).then(function successCallback(response) {
        $scope.spellsList = response.data;
        console.log($scope.spellsList)

    }, function errorCallback(response) {
        console.log(response);
    });

    //to show add spell dialogue
    //-------------------------
    $scope.showAddSpell = addToCharacterService.showAddSpell;

});
