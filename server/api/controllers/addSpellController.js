angular.module('app').controller('addSpellController', function addSpellController($scope, $mdDialog){
    
         $http({
            method: 'GET',
            url: '/characters'
        }).then(function successCallback(response) {
            $scope.charactersList = response.data;
            console.log($scope.charactersList)

        }, function errorCallback(response) {
            console.log(response);
        });


        $scope.hide = function () {
            $mdDialog.hide();
        };

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        $scope.addSpell = function (character) {
            $mdDialog.hide(character);
        };
    
    
});