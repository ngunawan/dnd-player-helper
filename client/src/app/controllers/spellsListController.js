angular.module('app').controller('spellsListController', function spellsListController($scope, $http, $mdDialog) {

    $scope.query = {
        class: ''
    };
    $scope.queryBy = "";


    $http({
        method: 'GET',
        url: '/spells'
    }).then(function successCallback(response) {
        $scope.spellsList = response.data;
        console.log($scope.spellsList)

    }, function errorCallback(response) {
        console.log(response);
    });


    function addSpellController($scope, $mdDialog) {
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
    };



    $scope.showAddSpell = function (spellName) {
        $mdDialog.show({
                controller: addSpellController,
                templateUrl: 'templates/addSpellTemplate.html',
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
            .then(function (character) {

            console.log(typeof spellName);
            
                    $http({
                        method: 'PUT',
                        url: '/characters/' + character._id + '/spells',
                        data: [spellName]
                    }).then(function successCallback(response) {
                        console.log(response);
                        console.log("added");

                    }, function errorCallback(response) {
                        console.log(response);
                    });



                },
                function () {
                    console.log("spell not added")
                });
    };



});
