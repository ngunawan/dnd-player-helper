angular.module('app').controller('spellsListController', function spellsListController($scope, $http, $mdDialog, addToCharacterService) {

    $scope.query = {
        class: ''
    };
    $scope.queryBy = "";
    $scope.loading = true;

    //get all spells
    //-------------------------
    $http({
        method: 'GET',
        url: '/spells'
    }).then(function successCallback(response) {
        $scope.spellsList = response.data;
        console.log($scope.spellsList);
        
        $scope.loading = false;
        
    }, function errorCallback(response) {
        console.log(response);
    });

    //to show add spell dialogue
    //-------------------------
    $scope.showAddSpell = addToCharacterService.showAddSpell;

});
