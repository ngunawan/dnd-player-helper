angular.module('app').controller('createCharacterController', function createCharacterController($scope, $http, characterService, $mdDialog, $anchorScroll, $location) {

    
    //object to keep track of created character
    //-------------------------
    $scope.Character = characterService.character;


    //get all classes
    //-------------------------
    $http({
        method: 'GET',
        url: '/classes'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.classesList = response.data;
    }, function errorCallback(error) {
        console.log(error);
    })


    //get all races
    //-------------------------
    $http({
        method: 'GET',
        url: '/races'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.racesList = response.data;
    }, function errorCallback(error) {
        console.log(error);
    });


    //get all backgrounds
    //-------------------------
    $http({
        method: 'GET',
        url: '/backgrounds'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.backgroundsList = response.data;
    }, function errorCallback(error) {
        console.log(error);
    });


    //show character is created dialog
    //-------------------------
    $scope.showConfirm = function (e) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.querySelector('#popupContainer')))
            .clickOutsideToClose(true)
            .title($scope.Character.name + " has been created!")
            .ok('Close')
            .targetEvent(e)
        );
    };

    //reset character fields
    //-------------------------
    $scope.resetCharacter = function () {
        $scope.Character = characterService.resetCharacter();
    }


    //add class to character
    //-------------------------
    $scope.addClass = function (className) {
        $scope.Character.class = [{
            name: className,
            level: 1
        }]
    }


    //create new character
    //-------------------------
    $scope.createNew = function () {
        if(($scope.Character.class[0] == undefined) || ($scope.Character.race == '') || ($scope.Character.background == '') || ($scope.Character.name == '') || ($scope.Character.backstory == '')) {
            let alert = $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('Please complete all the steps.')
                .ariaLabel('complete all the steps before creating new character')
                .ok('Ok')
            $mdDialog.show(alert);
            return;
        }
        
        $http({
            method: 'POST',
            url: '/characters',
            data: $scope.Character
        }).then(function successCallback(response) {
            console.log(response);
            $scope.showConfirm();
            $scope.resetCharacter();

        }, function errorCallback(error) {
            console.log(error);
        });
    }



});
