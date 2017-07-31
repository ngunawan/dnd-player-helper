angular.module('app').controller('characterController', function characterController($routeParams, $http, $scope) {

    $scope.showAll = false;
    $scope.classFeatures = [];
    $scope.racialTraits = [];

    //get current character
    //-------------------------
    $http({
        method: 'GET',
        url: '/characters/' + $routeParams.characterId
    }).then(function successCallback(response) {
        console.log(response);
        $scope.currentCharacter = response.data;
        cumulateFeatures($scope.currentCharacter.class);
        cumulateTraits($scope.currentCharacter.race);

    }, function errorCallback(response) {
        console.log(response);
    });

    //cumulate class features
    //-------------------------
    function cumulateFeatures(classes) {
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
    function cumulateTraits(race) {
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

});
