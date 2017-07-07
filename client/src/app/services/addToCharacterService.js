angular.module('app').service('addToCharacterService', function addToCharacterService($mdDialog, $http, Purchase) {

    let character, option;

    var makePurchase = function (character, cost) {
        let newGold = character.gold - cost;
        console.log(newGold);
        return $http({
            method: 'PUT',
            url: '/characters/' + character._id + '/gold/' + newGold
        })
    };

    //add spell ---------------------------------
    function addSpellToCharacter(spell, character) {
        $http({
            method: 'POST',
            url: '/characters/' + character._id + '/spells',
            data: spell
        }).then(function successCallback(response) {
            console.log("added spell to character");
        }, function errorCallback(response) {
            console.log("error adding spell to character");
        });
    }

    this.showAddSpell = function (spell) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addSpellTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (arg) {
                    character = arg.character;
                    option = arg.option;

                    addSpellToCharacter(spell, character);
                },
                function () {
                    console.log("spell not added")
                });
    }

    //add feat ---------------------------------
    function addFeatToCharacter(feat, character) {
        $http({
            method: 'POST',
            url: '/characters/' + character._id + '/feats',
            data: feat
        }).then(function successCallback(response) {
            console.log("added feat to character");
        }, function errorCallback(response) {
            console.log("error adding feat to character");
        });
    }

    this.showAddFeat = function (feat) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addFeatTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (arg) {
                    character = arg.character;
                    option = arg.option;

                    addFeatToCharacter(feat, character);
                },
                function () {
                    console.log("feat not added")
                });
    }

    //add equipment ---------------------------------
    function addEquipmentToCharacter(equipment, character, amount) {
        let purchase_array = [];
        for (let i = 1; i <= amount; i++) {
            purchase_array.push(equipment);
        }

        $http({
            method: 'POST',
            url: '/characters/' + character._id + '/equipments',
            data: purchase_array
        }).then(function successCallback(response) {
            console.log("added equipment to character");
        }, function errorCallback(response) {
            console.log("error adding equipment to character");
        });
    }

    this.showAddEquipment = function (equipment) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addEquipmentTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (arg) {
                    character = arg.character;
                    option = arg.option;
                    if (option == 'buy') {
                        makePurchase(character, Purchase.total_cost).then(
                            (success) => {
                                addEquipmentToCharacter(equipment, character, Purchase.amount);
                                console.log("valid purchase");
                            },
                            (error) => {
                                console.log("invalid purchase");
                            });

                    } else if (option == 'no-buy') {
                        addEquipmentToCharacter(equipment, character, Purchase.amount);
                    }
                },
                function () {
                    console.log("equipment not added")
                });
    }

    //add weapon ---------------------------------
    function addWeaponToCharacter(weapon, character, amount) {
        let purchase_array = [];
        for (let i = 1; i <= amount; i++) {
            purchase_array.push(weapon);
        }

        //        let damage, damage_type;
        //        if (weapon.damage != "") {
        //            let split_arr = weapon.damage.split(" ");
        //            damage = split_arr[0];
        //            damage_type = split_arr[1];
        //        }

        $http({
            method: 'POST',
            url: '/characters/' + character._id + '/weapons',
            data: purchase_array
        }).then(function successCallback(response) {
            console.log("added weapon to character");
        }, function errorCallback(response) {
            console.log("error adding weapon to character");
        });
    }

    this.showAddWeapon = function (weapon) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addWeaponTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (arg) {
                    character = arg.character;
                    option = arg.option;

                    if (option == 'buy') {
                        makePurchase(character, weapon.cost).then(
                            (success) => {
                                addWeaponToCharacter(weapon, character, Purchase.amount);
                                console.log("valid purchase");
                            },
                            (error) => {
                                console.log("invalid purchase");
                            });

                    } else {
                        addWeaponToCharacter(weapon, character, Purchase.amount);
                    }
                },
                function () {
                    console.log("weapon not added")
                });
    }

    //add armor ---------------------------------
    function addArmorToCharacter(armor, character, amount) {
        let purchase_array = [];
        for (let i = 1; i <= amount; i++) {
            purchase_array.push(armor);
        }

        console.log(purchase_array);
        $http({
            method: 'POST',
            url: '/characters/' + character._id + '/armors',
            data: purchase_array
        }).then(function successCallback(response) {
            console.log(response);
            console.log("added armor to character");
        }, function errorCallback(response) {
            console.log("error adding armor to character");
        });
    }

    this.showAddArmor = function (armor) {
        $mdDialog.show({
                controller: 'addToCharacterController',
                templateUrl: 'templates/addArmorTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (arg) {
                    character = arg.character;
                    option = arg.option;

                    if (option == 'buy') {
                        makePurchase(character, Purchase.total_cost).then(
                            (success) => {
                                console.log(armor.name);
                                addArmorToCharacter(armor, character, Purchase.amount);
                                console.log(success);
                            }, (error) => {
                                console.log("error making purchase");
                            });
                    } else {
                        addArmorToCharacter(armor, character, Purchase.amount);
                    }
                },
                function () {
                    console.log("armor not added")
                });
    }




});
