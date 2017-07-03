angular.module('app').service('addToCharacterService', function addToCharacterService($mdDialog, $http) {

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

    this.showAddWeapon = function (weaponName, weaponDamage) {

        var weaponDamageType = "";

        //splits damage dice and damage type
        if (weaponDamage != "") {
            var split_arr = weaponDamage.split(" ");
            weaponDamage = split_arr[0];
            weaponDamageType = split_arr[1];
        }

        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addWeaponTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (character) {
                    $http({
                        method: 'PUT',
                        url: '/characters/' + character._id + '/weapons',
                        data: {
                            name: weaponName,
                            damage: weaponDamage,
                            damage_type: weaponDamageType
                        }
                    }).then(function successCallback(response) {
                        console.log(response);

                    }, function errorCallback(response) {
                        console.log(response);
                    });

                },
                function () {
                    console.log("weapon not added")
                });
    }

    this.showAddArmor = function (armorName, armorAc) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addArmorTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (character) {
                    $http({
                        method: 'PUT',
                        url: '/characters/' + character._id + '/armors',
                        data: {
                            name: armorName,
                            ac: armorAc
                        }
                    }).then(function successCallback(response) {
                        console.log(response);

                    }, function errorCallback(response) {
                        console.log(response);
                    });

                },
                function () {
                    console.log("armor not added")
                });
    }




});
