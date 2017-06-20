var addToCharacter = angular.module('addToCharacter', ['ngMaterial']);

addToCharacter.controller('addToCharacterController', function addToCharacterController($scope, $mdDialog, $http) {

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

    $scope.add = function (character) {
        $mdDialog.hide(character);
    };

});

addToCharacter.service('addToCharacterService', function addToCharacterService($mdDialog, $http) {

    this.showAddSpell = function (spellName) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addSpellTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (character) {
                    $http({
                        method: 'PUT',
                        url: '/characters/' + character._id + '/spells',
                        data: [spellName]
                    }).then(function successCallback(response) {
                        console.log(response);

                    }, function errorCallback(response) {
                        console.log(response);
                    });

                },
                function () {
                    console.log("spell not added")
                });
    }
    
     this.showAddEquipment = function (equipmentName) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addEquipmentTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (character) {
                    $http({
                        method: 'PUT',
                        url: '/characters/' + character._id + '/equipments',
                        data: [equipmentName]
                    }).then(function successCallback(response) {
                        console.log(response);

                    }, function errorCallback(response) {
                        console.log(response);
                    });

                },
                function () {
                    console.log("equipment not added")
                });
    }
    
    


});
