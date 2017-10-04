angular.module('app').controller('characterController', function characterController($routeParams, $http, $scope, $compile, addToCharacterService) {

    $scope.showAll = false;
    $scope.classFeatures = [];
    $scope.racialTraits = [];
    $scope.proficiency_bonus = 0;
    $scope.query = {};
    $scope.loading = true;


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


    //get all backgrounds
    //-------------------------
    $http({
        method: 'GET',
        url: '/backgrounds'
    }).then(function successCallback(response) {
        console.log(response);
        $scope.backgroundsList = response.data;
    }, function errorCallback(response) {
        console.log(response);
    });


    //get current character
    //-------------------------
    function getCurrentCharacter() {
        $http({
            method: 'GET',
            url: '/characters/' + $routeParams.characterId
        }).then(function successCallback(response) {
            console.log(response);
            $scope.currentCharacter = response.data;
            $scope.cumulateTraits();
            $scope.cumulateFeatures();

            $scope.loading = false;

        }, function errorCallback(response) {
            console.log(response);
        });
    }
    
    getCurrentCharacter();


    //save character
    //-------------------------
    $scope.save = function () {
        delete $scope.currentCharacter['_id'];

        $http({
            method: 'PUT',
            url: '/characters/' + $routeParams.characterId,
            data: $scope.currentCharacter
        }).then(function successCallback(response) {
            console.log('SUCCESS updating character')
            console.log(response);
            $scope.loading = true;
            
            getCurrentCharacter();

        }, function errorCallback(error) {
            console.log('ERROR updating character');
            console.log(error);
        });
    }


    //cumulate class features
    //-------------------------
    $scope.cumulateFeatures = function () {
        $scope.classFeatures = [];

        for (let i = 0; i < $scope.currentCharacter.class.length; i++) {
            let classObj = $scope.currentCharacter.class[i];

            $http({
                method: 'GET',
                url: '/classes/name/' + classObj.name
            }).then(function successCallback(response) {
                for (let j = 0; j < response.data[0].features.length; j++) {
                    let featureObj = response.data[0].features[j];

                    if (featureObj.prereq <= classObj.level) {
                        featureObj.prereq = classObj.name + " " + featureObj.prereq;
                        $scope.classFeatures.push(featureObj);
                    }
                }
            }, function errorCallback(error) {
                console.log(error);
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
