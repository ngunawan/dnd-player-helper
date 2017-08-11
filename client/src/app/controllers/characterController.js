angular.module('app').controller('characterController', function characterController($routeParams, $http, $scope, $compile, addToCharacterService) {

    $scope.showAll = false;
    $scope.classFeatures = [];
    $scope.racialTraits = [];
    $scope.proficiency_bonus = 0;


    //get all classes
    //-------------------------
    $http({
        method: 'GET',
        url: '/classes'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.classesList = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });


    //get all races
    //-------------------------
    $http({
        method: 'GET',
        url: '/races'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.racesList = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });


    //get current character
    //-------------------------
    $http({
        method: 'GET',
        url: '/characters/' + $routeParams.characterId
    }).then(function successCallback(response) {
        console.log(response);
        $scope.currentCharacter = response.data;
        $scope.cumulateTraits();
        $scope.cumulateFeatures();

    }, function errorCallback(response) {
        console.log(response);
    });


    //get current character
    //-------------------------
    $scope.save = function () {        
        $http({
            method: 'PUT',
            url: '/characters/' + $routeParams.characterId,
            data: $scope.currentCharacter
        }).then(function successCallback(response) {
            console.log(response);

        }, function errorCallback(response) {
            console.log(response);
        });
    }


    //cumulate class features
    //-------------------------
    $scope.cumulateFeatures = function () {
        let classes = $scope.currentCharacter.class;
        $scope.classFeatures = [];

        for (let i = 0; i < classes.length; i++) {
            $http({
                method: 'GET',
                url: '/classes/name/' + classes[i].name
            }).then(function successCallback(response) {
                for (let j = 0; j < response.data[0].features.length; j++) {
                    $scope.classFeatures.push(response.data[0].features[j]);
                }
                console.log(response);

            }, function errorCallback(response) {
                console.log(response);
            });
        }
    }


    //cumulate racial traits
    //-------------------------
    $scope.cumulateTraits = function () {
        let race = $scope.currentCharacter.race;
        $scope.racialTraits = [];

        $http({
            method: 'GET',
            url: '/races/name/' + race
        }).then(function successCallback(response) {
            for (let j = 0; j < response.data[0].traits.length; j++) {
                $scope.racialTraits.push(response.data[0].traits[j]);
            }
            console.log(response);

        }, function errorCallback(response) {
            console.log(response);
        });
    }

    //add class to classes list
    //-------------------------
    $scope.addClass = function () {
        $scope.currentCharacter.class.push({
            name: "Bard",
            level: 1
        })
    }

    //remove class from classes list
    //-------------------------
    $scope.removeClass = function (index) {
        $scope.currentCharacter.class.splice(index, 1);
    }

    //add custom
    //-------------------------
    $scope.showAddCustomWeapon = function (character) {
        addToCharacterService.showAddCustomWeapon(character)
            .then(function (weapon) {
                $scope.currentCharacter.weapons.push(weapon);
            }).catch(function (error) {
                console.log(error.message);
            });
    }
    $scope.showAddCustomArmor = function (character) {
        addToCharacterService.showAddCustomArmor(character)
            .then(function (armor) {
                $scope.currentCharacter.armors.push(armor);
            }).catch(function (error) {
                console.log(error.message);
            });
    }
    $scope.showAddCustomEquipment = function (character) {
        addToCharacterService.showAddCustomEquipment(character)
            .then(function (equipment) {
                $scope.currentCharacter.equipments.push(equipment);
            }).catch(function (error) {
                console.log(error.message);
            });
    }
    $scope.showAddCustomSpell = function (character) {
        addToCharacterService.showAddCustomSpell(character)
            .then(function (spell) {
                $scope.currentCharacter.spells.push(spell);
            }).catch(function (error) {
                console.log(error.message);
            });
    }



});
